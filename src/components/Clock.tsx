"use client";

import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        // Create formatter once
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Kolkata",
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        const updateTime = () => {
            setTime(formatter.format(new Date()) + " IST");
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Avoid hydration mismatch by rendering a placeholder initially
    if (!time) return <span className="opacity-0">00:00:00 IST</span>;

    return <span>{time}</span>;
}
