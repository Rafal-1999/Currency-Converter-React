import Header from "./components/Header";
import FormInterface from "./components/FormInterface";
import Footer from "./components/Footer";

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
                            <FormInterface />
                            <button className="currency-exchange__submit">Wymień</button>
                        </form>
                    </div>
                    <article className="currency-exchange__exchanges">
                        <h2 className="currency-exchange__article-title">Zrealizowane wymiany</h2>
                        <div className="currency-exchange__last-exchanges js-lastExchanges"></div>
                    </article>
                </section>
            </main>
            <Footer
                copyright="Wszelkie prawa zastrzeżone &copy; 2022"
                creator="Stworzone przez Rafał Chudy"
                designer="Zaprojektowane przez Rafał Chudy"
            />
        </>
    );
}

export default App;
