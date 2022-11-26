import { useState } from "react";
import Position from "../Position";
import Select from "../Select";
import "./style.css";
import clear from "../../images/icons/clear.png";
import stats from "../../images/icons/stats.png";
import exchange from "../../images/icons/exchange.png";

import currencies from "../Select/currencies";

const FormInterface = () => {
    const [firstSelect, setFirstSelect] = useState(currencies[0]);
    const [secondSelect, setSecondSelect] = useState(currencies[1]);

    const onSelectChange = ({ target }) => setFirstSelect(target.value);

    return (
        <div className="currency-exchange__user-interface">
            <Position place="topLeft">
                <button type="reset" className="currency-exchange__button">
                    <img
                        src={clear}
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
                <a href="https://mybank.pl/kursy-walut" className="currency-exchange__link">
                    <img
                        src={stats}
                        className="currency-exchange__icon"
                        title="Aktualne kursy"
                        alt="Kursy walut"
                    />
                </a>
            </Position>
            <Position place="left1">
                {/* <select
                    className="currency-exchange__currencies"
                    value={firstSelect}
                    onChange={({ target }) => setFirstSelect(target.value)}
                >
                    {currencies.map(currency => (
                        <option key={currency.name}>{currency.name}</option>
                    ))}
                </select> */}
                <Select
                    constantUseState={firstSelect}
                    changeValueSelect={onSelectChange}
                >
                    {currencies.map(currency => (
                        <option key={currency.name}>{currency.name}</option>
                    ))}
                </Select>
            </Position>
            <Position place="right1">
                <input
                    type="number"
                    className="currency-exchange__value"
                    min="0"
                    autoFocus
                />
            </Position>
            <Position place="left2">
                <button type="button" className="currency-exchange__button">
                    <img
                        src={exchange}
                        className="currency-exchange__icon"
                        title="Zamień wartości"
                        alt="Zamiana"
                    />
                </button>
            </Position>
            <Position align="center">
                <p className="currency-exchange__current-rate"></p>
            </Position>
            <Position place="bottomLeft">
                <select className="currency-exchange__currencies">
                    <option value="EUR">EUR</option>
                    <option value="PLN">PLN</option>
                    <option value="USD">USD</option>
                </select>
            </Position>
            <Position place="bottomRight">
                <p className="currency-exchange__value" />
            </Position>
        </div>
    )
};

export default FormInterface;
