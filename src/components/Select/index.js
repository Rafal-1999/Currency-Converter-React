import currencies from "./currencies";

const Select = ({ currencyValue, onChangeCurrency }) => {
    const alphabeticalSorting = (array) => {
        return array.sort((a, b) => a.name.localeCompare(b.name));
    };

    return (
        <select
            className="currency-exchange__currencies"
            value={currencyValue}
            onChange={onChangeCurrency}
        >
            {alphabeticalSorting(currencies).map(currency => (
                <option key={currency.name}>{currency.name}</option>
            ))}
        </select>
    )
};

export default Select;
