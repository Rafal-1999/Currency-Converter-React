import { useState, useEffect } from "react";
import Position from "../Position";
import Select from "../Select";
import currencies from "../Select/currencies";
import "./style.css";
import clearImage from "../../images/icons/clear.png";
import statsImage from "../../images/icons/stats.png";
import exchangeImage from "../../images/icons/exchange.png";

const Form = ({ title }) => {
    const [currencyFrom, setCurrencyFrom] = useState("PLN");
    const [amount, setAmount] = useState("");
    const [currentCourse, setCurrentCourse] = useState("");
    const [currencyTo, setCurrencyTo] = useState("EUR");
    const [result, setResult] = useState("");

    useEffect(() => {
        setCurrentCourse(`1 ${currencyFrom} = ${currencies.find(({ name }) => name === currencyFrom).value}`);
    }, [currencyFrom]);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (amount !== "") {
            calculateResult();
        }
    };

    const calculateResult = () => {
        const firstCurrencyValue = currencies.find(({ name }) => name === currencyFrom).value;
        const secondCurrencyValue = currencies.find(({ name }) => name === currencyTo).value;

        setResult(firstCurrencyValue / secondCurrencyValue * amount);
    };

    const resetForm = () => {
        setCurrencyFrom("PLN");
        setAmount("");
        setCurrentCourse("");
        setCurrencyTo("EUR");
        setResult("");
    };

    const toggleCurrencyValues = () => {
        setCurrencyFrom(currencyTo);
        setCurrencyTo(currencyFrom);
    };

    return (
        <form
            className="currency-exchange__form"
            onSubmit={onFormSubmit}
        >
            <div className="currency-exchange__user-interface">
                <Position place="topLeft">
                    <button className="currency-exchange__button" onClick={resetForm}>
                        <img
                            src={clearImage}
                            className="currency-exchange__icon"
                            title="Wyczyść wszystko"
                            alt="Wyczyść"
                        />
                    </button>
                </Position>
                <Position place="top">
                    <p className="currency-exchange__caption">Wymień</p>
                </Position>
                <Position place="topRight">
                    <a
                        href="https://mybank.pl/kursy-walut"
                        className="currency-exchange__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={statsImage}
                            className="currency-exchange__icon"
                            title="Aktualne kursy"
                            alt="Kursy walut"
                        />
                    </a>
                </Position>
                <Position place="left1">
                    <Select
                        currencyValue={currencyFrom}
                        onChangeCurrency={({ target }) => setCurrencyFrom(target.value)}
                    />
                </Position>
                <Position place="right1">
                    <label htmlFor="currency" className="currency-exchange__field-title">
                        Wpisz ilość
                    </label>
                    <input
                        type="number"
                        className="currency-exchange__value"
                        id="currency"
                        min="0"
                        autoFocus
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </Position>
                <Position place="left2">
                    <button
                        type="button"
                        className="currency-exchange__button"
                        onClick={() => toggleCurrencyValues()}
                    >
                        <img
                            src={exchangeImage}
                            className="currency-exchange__icon"
                            title="Zamień wartości"
                            alt="Zamiana"
                        />
                    </button>
                </Position>
                <Position place="center">
                    <p className="currency-exchange__current-rate">
                        <strong>
                            {currentCourse}
                        </strong>
                    </p>
                </Position>
                <Position place="bottomLeft">
                    <Select
                        currencyValue={currencyTo}
                        onChangeCurrency={({ target }) => setCurrencyTo(target.value)}
                    />
                </Position>
                <Position place="bottomRight">
                    <p className="currency-exchange__value currency-exchange__value--padding">
                        {result !== "" && result.toFixed(2)}
                    </p>
                </Position>
            </div>
            <button className="currency-exchange__submit">
                {title}
            </button>
        </form>
    )
};

export default Form;
