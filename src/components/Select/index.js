import { SelectCurrencies } from "../Position/styled";

const Select = ({ currencyData, currencyValue, onChangeCurrency }) => (
    <SelectCurrencies
        value={currencyValue}
        onChange={onChangeCurrency}
    >
        {Object.keys(currencyData).map(currencyName => {
            return <option key={currencyName}>{currencyName}</option>
        })}
    </SelectCurrencies>
);

export default Select;
