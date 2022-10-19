import "./style.css";

const Form = ({ children }) => (
    <form className="currency-exchange__form">
        {children}
        <button className="currency-exchange__submit">Wymień</button>
    </form>
);

export default Form;
