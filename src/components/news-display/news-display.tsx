"use client";

import NewsCard, { NewsCardProps } from "./components/news-card";
import useDisplay from "@/hooks/use-display";

interface NewsDisplayProps {
    ok: boolean;
    newsCardProps?: NewsCardProps[];
}

export default function NewsDisplay({ ok, newsCardProps }: NewsDisplayProps) {
    const current = useDisplay(ok, newsCardProps?.length);

    return (
        <div className="lg:h-[400px] lg:w-[1024px] md:h-[400px] md:w-[760px] sm:h-[420px] sm:w-[90%] relative">
            {ok
                ? newsCardProps?.map((newsCardProp, index) => (
                      <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ${
                              index === current ? "opacity-100" : "opacity-0"
                          }`}
                      >
                          <NewsCard {...newsCardProp} />
                      </div>
                  ))
                : "fail"}
        </div>
    );
}
