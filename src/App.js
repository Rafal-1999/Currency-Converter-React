import Header from "./components/Header";

function App() {
    return (
        // Homework from the module 8 Frontend Developer
        <>
            <main>
                <section className="currency-exchange">
                    <div className="currency-exchange__box">
                        <Header
                            title="Kantor wymiany walut"
                            description="Szybka wymiana bez zbędnego czekania"
                        />
                        <form className="currency-exchange__form">
                            <div className="currency-exchange__user-interface">
                                <div className="currency-exchange__position">
                                    <button type="reset" className="currency-exchange__button">
                                        <img src="images/icons/clear.png" className="currency-exchange__icon" title="Wyczyść wszystko"
                                            alt="Wyczyść" />
                                    </button>
                                </div>
                                <div className="currency-exchange__position currency-exchange__position--center-align">
                                    <p className="currency-exchange__caption">Wymień</p>
                                </div>
                                <div className="currency-exchange__position currency-exchange__position--right-align">
                                    <a href="https://mybank.pl/kursy-walut" className="currency-exchange__link">
                                        <img src="images/icons/stats.png" className="currency-exchange__icon" title="Aktualne kursy"
                                            alt="Kursy walut" />
                                    </a>
                                </div>
                                <div className="currency-exchange__position">
                                    <select className="currency-exchange__currencies js-firstCurrency">
                                        <option value="PLN">PLN</option>
                                        <option value="EUR">EUR</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                                <div className="currency-exchange__position currency-exchange__position--right-align
                        currency-exchange__position--colspan">
                                    <input type="number" className="currency-exchange__value js-amount" min="0" autofocus />
                                </div>
                                <div className="currency-exchange__position">
                                    <button type="button" className="currency-exchange__button js-exchangeButton">
                                        <img src="images/icons/exchange.png" className="currency-exchange__icon" title="Zamień wartości"
                                            alt="Zamiana" />
                                    </button>
                                </div>
                                <div className="currency-exchange__position currency-exchange__position--center-align">
                                    <p className="currency-exchange__current-rate js-currentRate"></p>
                                </div>
                                <div className="currency-exchange__position currency-exchange__position--right-align">
                                    <p></p>
                                </div>
                                <div className="currency-exchange__position">
                                    <select className="currency-exchange__currencies js-secondCurrency">
                                        <option value="EUR">EUR</option>
                                        <option value="PLN">PLN</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                                <div className="currency-exchange__position currency-exchange__position--right-align
                        currency-exchange__position--colspan">
                                    <input type="number" className="currency-exchange__value js-result" readonly />
                                </div>
                            </div>
                            <button className="currency-exchange__submit js-convertButton">Wymień</button>
                        </form>
                    </div>
                    <article className="currency-exchange__exchanges">
                        <h2 className="currency-exchange__article-title">Zrealizowane wymiany</h2>
                        <div className="currency-exchange__last-exchanges js-lastExchanges"></div>
                    </article>
                </section>
            </main>
            <footer className="footer">
                <div className="footer__copyright">
                    <p className="footer__text">
                        Wszelkie prawa zastrzeżone &copy; 2021
                    </p>
                    <p className="footer__text">
                        Stworzone przez Rafał Chudy
                    </p>
                    <p className="footer__text">
                        Zaprojektowane przez Rafał Chudy
                    </p>
                </div>
            </footer>
        </>
    );
}

export default App;
