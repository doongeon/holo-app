"use client";

import useGraph from "@/hooks/use-graph";
import { memo } from "react";

export interface t_timeSereis {
    x?: number;
    y?: number;
}

export interface GraphProps {
    timeSeries?: t_timeSereis[];
    ok: boolean;
}

function Graph(graphProp: GraphProps) {
    const { graphRef, setLength } = useGraph(graphProp);
    return (
        <div>
            <div>
                <button onClick={() => setLength(5)}>5일</button>
                <button onClick={() => setLength(30)}>1개월</button>
                <button onClick={() => setLength(365)}>1년</button>
                <button onClick={() => setLength(-1)}>최대</button>
            </div>
            <div ref={graphRef}></div>
        </div>
    );
}

export default memo(Graph);
