import { useCurrentDate } from "../../hooks/useCurrentDate";
import "./style.css";

const Day = () => {
    const date = useCurrentDate();

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
