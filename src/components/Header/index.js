import "./style.css";

const Header = ({ title, description }) => (
    <header className="currency-exchange__header">
        <h1 className="currency-exchange__title">
            {title}
        </h1>
        <p className="currency-exchange__description">
            {description}
        </p>
    </header>
);

export default Header;
