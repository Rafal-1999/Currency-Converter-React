const Select = (constantUseState, changeValueSelect, children) => (
    <select
        className="currency-exchange__currencies"
        value={constantUseState}
        onChange={changeValueSelect}
    >
        {children}
    </select>
);

export default Select;
