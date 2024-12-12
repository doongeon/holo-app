"use client";

import { useState } from "react";
import TextInput from "../text-input";
import { formatNumber } from "@/utils/format-number";

export default function DollarCalculator({
    exchageRate,
}: {
    exchageRate: number;
}) {
    const [won, setWon] = useState("0");
    const [dollar, setDollar] = useState("0");

    return (
        <div className="flex">
            <div className="flex flex-col">
                <TextInput
                    label="원"
                    value={won}
                    onChange={({ target: { value } }) => {
                        // 숫자와 소수점만 허용하는 정규식
                        if (!/^\d*\.?\d*$/.test(value)) return;
                        if (!value.includes(".") && value.length !== 0)
                            value = Number(value).toString();

                        setWon(value);

                        if (value.length === 1 && value === ".") setDollar("");
                        else
                            setDollar(
                                formatNumber(Number(value) / exchageRate)
                            );
                    }}
                />
                <TextInput
                    label="달러"
                    value={dollar}
                    onChange={({ target: { value } }) => {
                        // 숫자와 소수점만 허용하는 정규식
                        if (!/^\d*\.?\d*$/.test(value)) return;
                        if (!value.includes(".") && value.length !== 0)
                            value = Number(value).toString();

                        setDollar(value);

                        if (value.length === 1 && value === ".") setWon("");
                        else setWon(formatNumber(Number(value) * exchageRate));
                    }}
                />
            </div>
        </div>
    );
}
