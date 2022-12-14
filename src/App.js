import Section from "./components/Section";
import Header from "./components/Header";
import Form from "./components/Form";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";

function App() {
    return (
        // Homework from the module 8 Frontend Developer
        <>
            <main>
                <Section extraContent={<Exchanges title="Zrealizowane wymiany" />}>
                    <Header
                        title="Kantor wymiany walut"
                        description="Szybka wymiana bez zbędnego czekania"
                    />
                    <Form title="Przelicz" />
                </Section>
            </main>
            <Footer
                creator="Wykonawca: Rafał Chudy"
                designer="Projektant: Rafał Chudy"
                copyright="Wszelkie prawa zastrzeżone &copy; 2022"
            />
        </>
    );
}

export default App;
