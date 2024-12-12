import WonDollar from "@/components/dollar-calculaor.tsx/won-dollar";
import { getExchangeRate } from "@/model/exchage-rate";
import { getExchangeRateSeries } from "@/model/historical-exchange-rate";

export default async function Home() {
    const exchageRate = getExchangeRate();
    const exchangeRateSeries = await getExchangeRateSeries();
    return (
        <div className="flex justify-center">
            <WonDollar
                exchageRate={exchageRate}
                graphProp={exchangeRateSeries}
            />
        </div>
    );
}
