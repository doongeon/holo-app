import { NewsCardProps } from "@/components/news-display/components/news-card";
import { t_news } from "@/model/finhub/market-news";

export const createNewsCardsProps = (news: t_news[]): NewsCardProps[] => {
    return news
        .filter((item) => item.source !== "MarketWatch") // "MarketWatch" 출처 제외
        .slice(0, 6)
        .map((item) => ({
            id: item.id.toString(), // 숫자 ID를 문자열로 변환
            title: item.headline, // 제목으로 설정
            source: item.source, // 출처 정보
            summary: item.summary, // 요약
            img: item.image, // 이미지 URL
        }));
};
