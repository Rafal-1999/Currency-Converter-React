import { useState, useEffect } from "react";
import "./style.css";

const Day = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const dateCounter = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(dateCounter);
    }, []);

    return (
        <div className="day">
            <p className="day__content">
                {date.toLocaleTimeString("pl",
                    { weekday: "long", day: "numeric", month: "long", year: undefined }
                )}
            </p>
        </div>
    )
};

export default Day;
