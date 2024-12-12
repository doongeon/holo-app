import { GraphProps } from "@/components/graph";
import fs from "fs";

export interface t_historicalExchangeRate {
    date: string;
    value: number;
}

export const getExchangeRateSeries = async (): Promise<GraphProps> => {
    if (!fs.existsSync("./historical-exchange-rate.json"))
        return {
            ok: false,
        };

    const json: t_historicalExchangeRate[] = await JSON.parse(
        fs.readFileSync("./historical-exchange-rate.json", "utf-8")
    );

    return {
        timeSeries: json.map((row) => ({
            x: new Date(row.date).getTime(),
            y: row.value,
        })),
        ok: true,
    };
};
