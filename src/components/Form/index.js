import "./style.css";
import "../FormInterface/style.css";
import "../Position/style.css";
import clear from "../../images/icons/clear.png";
import stats from "../../images/icons/stats.png";
import exchange from "../../images/icons/exchange.png";

const Form = ({ title }) => {
    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form
            className="currency-exchange__form"
            onSubmit={onFormSubmit}
        >
            <div className="currency-exchange__user-interface currency-exchange__position--topLeft">
                <div className="currency-exchange__position">
                    <button type="reset" className="currency-exchange__button">
                        <img
                            src={clear}
                            className="currency-exchange__icon"
                            title="Wyczyść wszystko"
                            alt="Wyczyść"
                        />
                    </button>
                </div>
                <div className="currency-exchange__position currency-exchange__position--top">
                    <p className="currency-exchange__caption">Wymień</p>
                </div>
                <div className="currency-exchange__position currency-exchange__position--topRight">
                    <a href="https://mybank.pl/kursy-walut" className="currency-exchange__link">
                        <img
                            src={stats}
                            className="currency-exchange__icon"
                            title="Aktualne kursy"
                            alt="Kursy walut"
                        />
                    </a>
                </div>
                <div className="currency-exchange__position currency-exchange__position--left1">
                    <select className="currency-exchange__currencies">
                        <option value="PLN">PLN</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className="currency-exchange__position currency-exchange__position--right1">
                    <input
                        type="number"
                        className="currency-exchange__value"
                        min="0"
                        autoFocus
                    />
                </div>
                <div className="currency-exchange__position currency-exchange__position--left2">
                    <button type="button" className="currency-exchange__button">
                        <img
                            src={exchange}
                            className="currency-exchange__icon"
                            title="Zamień wartości"
                            alt="Zamiana"
                        />
                    </button>
                </div>
                <div className="currency-exchange__position currency-exchange__position--center">
                    <p className="currency-exchange__current-rate"></p>
                </div>
                <div className="currency-exchange__position currency-exchange__position--bottomLeft">
                    <select className="currency-exchange__currencies">
                        <option value="EUR">EUR</option>
                        <option value="PLN">PLN</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className="currency-exchange__position currency-exchange__position--bottomRight">
                    <p className="currency-exchange__value" />
                </div>
            </div>
            <button className="currency-exchange__submit">
                {title}
            </button>
        </form>
    )
};

export default Form;
