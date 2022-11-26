import { useState } from "react";
import currencies from "./currencies";

const Select = (constantUseState,changeValueSelect, children) => {
    const [firstSelect, setFirstSelect] = useState(currencies[0]);
    const [secondSelect, setSecondSelect] = useState(currencies[1]);

    return (
        <select
            className="currency-exchange__currencies"
            value={ constantUseState}
            onChange={changeValueSelect}
        >
            {children}
        </select>
    )
};

export default Select;
