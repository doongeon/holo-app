export interface NewsCardProps {
    id: string;
    title: string;
    source: string;
    summary: string;
    img: string;
}

export default function NewsCard({
    id,
    title,
    source,
    summary,
    img,
}: NewsCardProps) {
    return (
        <div className="absolute w-full h-full ">
            <div
                key={id}
                className="relative w-full h-full rounded-lg overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* 블러 및 오버레이 효과 */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* 텍스트 콘텐츠 */}
                <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
                    {/* 출처 */}
                    <span className="text-sm font-medium text-gray-300">
                        {source}
                    </span>

                    {/* 뉴스 제목 */}
                    <h2 className="text-xl font-bold leading-snug">{title}</h2>

                    {/* 세부내용 */}
                    <span className="text-sm text-gray-200 mt-2">
                        {summary}
                    </span>
                </div>
            </div>
        </div>
    );
}
