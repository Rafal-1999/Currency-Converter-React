import { useState } from "react";
import "./style.css";

const Exchanges = ({ title }) => {
    const [result, setResult] = useState("");
    const [resultsHistory, setResultsHistory] = useState([]);

    const addResultToHistory = () => {
        setResultsHistory([...resultsHistory, result]);
        console.log(resultsHistory);
    };

    return (
        <article className="currency-exchange__exchanges">
            <h2 className="currency-exchange__article-title">
                {title}
            </h2>
            <div className="currency-exchange__last-exchanges">
                {resultsHistory.map(resultItem => (
                    <p key={resultItem}>{resultItem}</p>
                ))}
            </div>
        </article>
    )
};

export default Exchanges;
