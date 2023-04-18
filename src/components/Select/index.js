import currencies from "./currencies";
import { SelectCurrencies } from "../Position/styled";

const alphabeticalSorting = (array) => array.sort((a, b) => a.name.localeCompare(b.name));
const sortedCurrencies = alphabeticalSorting(currencies);

const Select = ({ currencyValue, onChangeCurrency }) => (
    <SelectCurrencies
        value={currencyValue}
        onChange={onChangeCurrency}
    >
        {sortedCurrencies.map(currency => (
            <option key={currency.name}>{currency.name}</option>
        ))}
    </SelectCurrencies>
);

export default Select;
