import "./style.css";

const Position = ({ place, children }) => (
    <div className={`currency-exchange__position 
    ${place ? ` currency-exchange__position--${place}` : ""}`}>
        {children}
    </div>
);

export default Position;
