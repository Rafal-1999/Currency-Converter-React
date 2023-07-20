import { useFetchData } from "./hooks/useFetchData";
import Section from "./components/Section";
import Day from "./components/Day";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Form from "./components/Form";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";

function App() {
    const dataUrl = "testData.json";
    const errorText = "Coś poszło nie tak. \nProszę spróbować później.";
    const { isLoading, data, errorInfo } = useFetchData(dataUrl, errorText);

    return (
        // Homework from the module 8 Frontend Developer
        <>
            <main>
                <Section extraContent={<Exchanges title="Zrealizowane wymiany" />}>
                    <Header
                        title="Kantor wymiany walut"
                        description="Szybka wymiana bez zbędnego czekania"
                    />
                    <Day />
                    {isLoading ? <Loader /> : <Form currencyData={data} title="Przelicz" />}
                    {errorInfo && <p>{errorInfo}</p>}
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
