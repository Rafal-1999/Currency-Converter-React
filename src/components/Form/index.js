const Form = ({ children }) => (
    <form className="currency-exchange__form">
        <div className="currency-exchange__user-interface">
            {children}
        </div>
        <button className="currency-exchange__submit">Wymień</button>
    </form>
);

export default Form;
