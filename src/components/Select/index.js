import currencies from "./currencies";

const alphabeticalSorting = (array) => array.sort((a, b) => a.name.localeCompare(b.name));
const sortedCurrencies = alphabeticalSorting(currencies);

const Select = ({ currencyValue, onChangeCurrency }) => (
    <select
        className="currency-exchange__currencies"
        value={currencyValue}
        onChange={onChangeCurrency}
    >
        {sortedCurrencies.map(currency => (
            <option key={currency.name}>{currency.name}</option>
        ))}
    </select>
);

export default Select;
