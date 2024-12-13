import { API_KEY } from ".";

const MARKET_NEWS_URL = `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`;

export interface t_news {
    category: string; // 뉴스 카테고리 (예: 'top news', 'business')
    datetime: number; // UNIX 타임스탬프 (초 단위)
    headline: string; // 뉴스 제목
    id: number; // 고유 ID
    image: string; // 이미지 URL
    related: string; // 관련 키워드 (비어있을 수도 있음)
    source: string; // 뉴스 출처 (예: 'MarketWatch', 'CNBC')
    summary: string; // 뉴스 요약
    url: string; // 뉴스 URL
}

export interface NewsResponse {
    ok: boolean;
    news?: t_news[];
}

export const getNews = async (): Promise<NewsResponse> => {
    const res = await fetch(MARKET_NEWS_URL);

    if (!res.ok) return { ok: false };

    const news: t_news[] = await res.json();

    return {
        ok: true,
        news: news,
    };
};
