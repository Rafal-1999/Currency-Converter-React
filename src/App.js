import { useFetchData } from "./hooks/useFetchData";
import Section from "./components/Section";
import Day from "./components/Day";
import FormBox from "./components/FormBox";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Form from "./components/Form";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";

function App() {
    const dataUrl = "https://api.exchangerate.host/latest";
    const testDataUrl = "Currency-Converter-React/testData.json";
    const errorText = "Coś poszło nie tak. \n Proszę spróbować później.";
    const { isLoading, data, errorInfo } = useFetchData(dataUrl, errorText);

    const showContentAfterFetch = () => {
        if (isLoading) {
            return <Loader />;
        }
        else if (errorInfo) {
            return <p>{errorInfo}</p>;
        } else {
            return <Form currencyData={data} title="Przelicz" />;
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
                copyright="Wszelkie prawa zastrzeżone &copy; 2022"
            />

            {data ?
                <ul>
                    {Object.keys(data.rates).map((dataItem, index) => {
                        <li key={dataItem}>
                            {dataItem}:
                            {Object.keys(data.rates).map(
                                dataItem => data.rates[dataItem]
                            )}
                        </li>
                    })}
                </ul>
                : null
            }

            {data ?
                <ul>
                    {currencies.map((currency, index) => {
                        return <li key={currency}>
                            {currency}: {ratesValues[index]}
                        </li>
                    })}
                </ul>
                : null
            }

            <ul>
                {Object.keys(data).map((dataItem) => {
                    return <li key={dataItem}>{dataItem}{data[dataItem]}</li>
                })}
            </ul>
        </>
    );
}

export default App;
