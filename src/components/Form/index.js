import { useState, useEffect } from "react";
import Position from "../Position";
import Select from "../Select";
import { Interface, SubmitButton } from "./styled";
import { Button, Caption, IconLink, FieldTitle, InputValue, CurrentRate } from "../Position/styled";
import clearImage from "../../images/icons/clear.png";
import statsImage from "../../images/icons/stats.png";
import exchangeImage from "../../images/icons/exchange.png";

const Form = ({ currencyData, title }) => {
    const [currencyFrom, setCurrencyFrom] = useState("PLN" ? "USD" : "PLN");
    const [amount, setAmount] = useState("");
    const [currentCourse, setCurrentCourse] = useState("");
    const [currencyTo, setCurrencyTo] = useState("EUR");
    const [result, setResult] = useState("");

    useEffect(() => {
        const selectedCurrencyFrom = currencyData.find(({ code }) => code === currencyFrom);
        const selectedCurrencyTo = currencyData.find(({ code }) => code === currencyTo);

        if (selectedCurrencyFrom) {
            setCurrentCourse(`1 ${selectedCurrencyFrom.code} = 
            ${selectedCurrencyFrom.mid.toFixed(4).replace(/\.?0+$/, '')} 
            ${selectedCurrencyTo.code}`);
        }
    }, [currencyData, currencyFrom, currencyTo]);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (amount !== "") {
            calculateResult();
        }
    };

    const calculateResult = () => {
        const selectedCurrencyFrom = currencyData.find(({ code }) => code === currencyFrom);
        const currencyValueFrom = selectedCurrencyFrom.mid;

        const selectedCurrencyTo = currencyData.find(({ code }) => code === currencyTo);
        const currencyValueTo = selectedCurrencyTo.mid;

        setResult(currencyValueFrom / currencyValueTo * amount);
    };

    const resetForm = () => {
        setCurrencyFrom("PLN" ? "USD" : "PLN");
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
        <form onSubmit={onFormSubmit}>
            <Interface>
                <Position isTopLeft>
                    <Button
                        type="button"
                        onClick={resetForm}
                    >
                        <img
                            width="24"
                            height="24"
                            src={clearImage}
                            title="Wyczyść wszystko"
                            alt="Wyczyść"
                        />
                    </Button>
                </Position>
                <Position isTop>
                    <Caption>Wymień</Caption>
                </Position>
                <Position isTopRight>
                    <IconLink
                        href="https://mybank.pl/kursy-walut"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            width="24"
                            height="24"
                            src={statsImage}
                            title="Aktualne kursy"
                            alt="Kursy walut"
                        />
                    </IconLink>
                </Position>
                <Position isLeft1>
                    <Select
                        currencyData={currencyData}
                        currencyValue={currencyFrom}
                        onChangeCurrency={({ target }) => setCurrencyFrom(target.value)}
                    />
                </Position>
                <Position isRight1>
                    <FieldTitle htmlFor="currency">
                        Wpisz ilość
                    </FieldTitle>
                    <InputValue
                        type="number"
                        id="currency"
                        min="0"
                        step="0.01"
                        placeholder="Podaj kwotę"
                        required
                        autoFocus
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </Position>
                <Position isLeft2>
                    <Button
                        type="button"
                        onClick={toggleCurrencyValues}
                    >
                        <img
                            width="24"
                            height="24"
                            src={exchangeImage}
                            title="Zamień wartości"
                            alt="Zamiana"
                        />
                    </Button>
                </Position>
                <Position isCenter>
                    <CurrentRate>
                        <strong>
                            {currentCourse}
                        </strong>
                    </CurrentRate>
                </Position>
                <Position isBottomLeft>
                    <Select
                        currencyData={currencyData}
                        currencyValue={currencyTo}
                        onChangeCurrency={({ target }) => setCurrencyTo(target.value)}
                    />
                </Position>
                <Position isBottomRight>
                    <InputValue as="p" padding>
                        {result !== "" && result.toFixed(2)}
                    </InputValue>
                </Position>
            </Interface>
            <SubmitButton>
                {title}
            </SubmitButton>
        </form>
    )
};

export default Form;
