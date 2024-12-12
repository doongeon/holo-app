"use client";

import { GraphProps } from "@/components/graph";
import ApexCharts from "apexcharts";
import { useEffect, useRef, useState } from "react";

export default function useGraph(graphProps: GraphProps) {
    const graphRef = useRef<HTMLDivElement>(null);
    const [length, setLength] = useState<number>(30);

    useEffect(() => {
        if (!graphProps.ok) return;
        if (!graphRef.current) return;

        const options = {
            chart: {
                type: "line",
                toolbar: {
                    show: false, // 툴바 비활성화
                },
            },
            stroke: {
                curve: "smooth",
            },
            series: [
                {
                    data: graphProps.timeSeries!.slice(0, length),
                },
            ],
            xaxis: {
                type: "datetime",
                tooltip: {
                    enabled: false,
                },
                labels: {
                    formatter: function (value: string) {
                        const date = new Date(value); // value는 날짜 문자열
                        return date.toLocaleDateString("ko-KR", {
                            month: "long",
                            day: "numeric",
                        });
                    },
                },
            },
            tooltip: {
                enabled: true,
                x: {
                    show: false,
                },
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    // x축의 날짜 값 가져오기
                    const date =
                        w.config.series[seriesIndex].data[dataPointIndex].x;
                    const value = series[seriesIndex][dataPointIndex]; // y축의 가격 값 가져오기

                    // 날짜 포맷
                    const formattedDate = new Date(date).toLocaleDateString(
                        "ko-KR",
                        {
                            month: "long",
                            day: "numeric",
                        }
                    );

                    return `
                        <div style="padding: 10px; background: #222; color: #fff; border-radius: 4px;">
                            ${formattedDate} ${value} ₩
                        </div>
                    `;
                },
            },
        };

        const chart = new ApexCharts(graphRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, [graphProps, length]);

    return { graphRef, setLength };
}
