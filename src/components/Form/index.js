import "./style.css";

const Form = ({ children, title }) => {
    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className="currency-exchange__form"
            onSubmit={onFormSubmit}
        >
            {children}
            <button className="currency-exchange__submit">
                {title}
            </button>
        </form>
    )
};

export default Form;
