import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const dateCounter = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(dateCounter);
    }, []);

    return date;
};
