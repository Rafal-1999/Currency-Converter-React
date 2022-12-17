import currencies from "./currencies";

const Select = ({ currencyValue, onChangeCurrency }) => (
    <select
        className="currency-exchange__currencies"
        value={currencyValue}
        onChange={onChangeCurrency}
    >
        {[...currencies]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(currency => (
                <option key={currency.name}>{currency.name}</option>
            ))}
    </select>
);

export default Select;
