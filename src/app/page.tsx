import DollarCalculator from "@/components/dollar-calculaor.tsx/dollar-calculator";
import { getExchangeRate, t_exchangeRate } from "@/model/exchage-rate";

export default async function Home() {
    const exchageRate: t_exchangeRate = await getExchangeRate();
    return (
        <div className="flex">
            <DollarCalculator exchageRate={exchageRate.value} />
        </div>
    );
}
