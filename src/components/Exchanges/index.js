import "./style.css";

const Exchanges = ({ title }) => (
    <article className="currency-exchange__exchanges">
        <h2 className="currency-exchange__article-title">
            {title}
        </h2>
        <div className="currency-exchange__last-exchanges" />
    </article>
);

export default Exchanges;
