import { SelectCurrencies } from "../Position/styled";

const Select = ({ currencyData, currencyValue, onChangeCurrency }) => {
    const sortAlphabetically = array => array.sort((a, b) => a.code.localeCompare(b.code));

    return (
        <SelectCurrencies
            value={currencyValue}
            onChange={onChangeCurrency}
        >
            {sortAlphabetically(currencyData).map(({ code, currency }) => {
                return <option key={code} title={currency}>{code}</option>
            })}
        </SelectCurrencies>
    )
};

export default Select;
