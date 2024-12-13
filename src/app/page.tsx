import WonDollar from "@/components/dollar-calculaor.tsx/won-dollar";
import NewsDisplay from "@/components/news-display/news-display";
import { getExchangeRate } from "@/model/exchage-rate";
import { getNews } from "@/model/finhub/market-news";
import { getExchangeRateSeries } from "@/model/historical-exchange-rate";
import { createNewsCardsProps } from "@/view-model/news-cards";

export default async function Home() {
    const exchageRate = getExchangeRate();
    const exchangeRateSeries = await getExchangeRateSeries();
    const news = await getNews();

    if (!news.ok) console.log("fail fetch news");

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <NewsDisplay
                ok={news.ok}
                newsCardProps={createNewsCardsProps(news.news!)}
            />
            <WonDollar
                exchageRate={exchageRate}
                graphProp={exchangeRateSeries}
            />
        </div>
    );
}
