import Graph, { GraphProps } from "../graph";
import DollarCalculator from "./dollar-calculator";
import { t_exchangeRate } from "@/model/exchage-rate";

export default function WonDollar({
    exchageRate,
    graphProp,
}: {
    exchageRate: t_exchangeRate;
    graphProp: GraphProps;
}) {
    return (
        <div className="flex flex-col text-slate-900">
            <div className="flex">
                <div>1$</div>
                <div>{exchageRate.value!.toFixed(2)}원</div>
            </div>
            <div className="flex">
                <DollarCalculator exchageRate={exchageRate.value!} />
                <div>
                    <Graph
                        ok={graphProp.ok}
                        timeSeries={graphProp.timeSeries}
                    />
                </div>
            </div>
        </div>
    );
}
