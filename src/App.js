import { useFetchData } from "./hooks/useFetchData";
import Section from "./components/Section";
import Day from "./components/Day";
import FormBox from "./components/FormBox";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Form from "./components/Form";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";

function App() {
    const dataUrl = "https://api.exchangerate.host/latest";
    const errorText = "Coś poszło nie tak. \n Proszę spróbować później.";
    const ratesData = useFetchData(dataUrl, errorText);

    const showContentAfterFetch = () => {
        if (ratesData.isLoading) {
            return <Loader />;
        }
        else if (ratesData.errorInfo) {
            return <Error errorInfo={ratesData.errorInfo} />;
        } else {
            return <Form currencyData={ratesData.data} title="Przelicz" />;
        }
    };

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
                    <FormBox content={showContentAfterFetch()} />
                </Section>
            </main>
            <Footer
                creator="Wykonawca: Rafał Chudy"
                designer="Projektant: Rafał Chudy"
                copyright="Wszelkie prawa zastrzeżone &copy; 2022 - 2023"
            />
        </>
    );
}

export default App;
