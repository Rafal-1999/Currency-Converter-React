import { useState, useEffect } from "react";
import Position from "../Position";
import Select from "../Select";
import currencies from "../Select/currencies";
import { Interface, SubmitButton } from "./styled";
import { Button, Caption, IconLink, FieldTitle, InputValue, CurrentRate } from "../Position/styled";
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
                        autoFocus
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </Position>
                <Position isLeft2>
                    <Button
                        type="button"
                        onClick={() => toggleCurrencyValues()}
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
