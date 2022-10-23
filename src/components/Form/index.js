import "./style.css";

const Form = ({ children, title }) => (
    <form className="currency-exchange__form">
        {children}
        <button className="currency-exchange__submit">
            {title}
        </button>
    </form>
);

export default Form;
