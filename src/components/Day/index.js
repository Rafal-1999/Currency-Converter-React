import { useCurrentDate } from "../../hooks/useCurrentDate";
import { DayContent } from "./styled";

const Day = () => {
    const date = useCurrentDate();

    return (
        <div>
            <DayContent>
                {date.toLocaleTimeString("pl",
                    { weekday: "long", day: "numeric", month: "long", year: undefined }
                )}
            </DayContent>
        </div>
    )
};

export default Day;
