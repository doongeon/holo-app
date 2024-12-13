import { useEffect, useState } from "react";

export default function useDisplay(ok: boolean, n_news?: number) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!ok) return;

        setTimeout(() => {
            setCurrent((prev) => {
                console.log("turn");
                return (prev + 1) % n_news!;
            });
        }, 10000);
    });

    return current;
}
