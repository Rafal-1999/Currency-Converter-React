import { useState, useEffect } from "react";
import "./style.css";

const Day = () => {
    const [date, setDate] = useState(new Date());

    const refreshDate = () => {
        setDate(new Date());
    };

    useEffect(() => {
        const dateCounter = setInterval(refreshDate, 1000);
        return function cleanUp() {
            clearInterval(dateCounter);
        }
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
