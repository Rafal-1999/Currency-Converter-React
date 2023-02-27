import { useState } from "react";
import { ExchangeArea, ExchangeTitle, ExchangeHistory } from "./styled";

const Exchanges = ({ title }) => {
    const [result, setResult] = useState("");
    const [resultsHistory, setResultsHistory] = useState([]);

    const addResultToHistory = () => {
        setResultsHistory([...resultsHistory, result]);
        console.log(resultsHistory);
    };

    return (
        <ExchangeArea>
            <ExchangeTitle>
                {title}
            </ExchangeTitle>
            <ExchangeHistory>
                {resultsHistory.map(resultItem => (
                    <p key={resultItem}>{resultItem}</p>
                ))}
            </ExchangeHistory>
        </ExchangeArea>
    )
};

export default Exchanges;
