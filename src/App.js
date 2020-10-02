import React, {useState} from "react";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Section} from "./components/Section";
import {Form} from "./components/Form";
import {Result} from "./components/Result";
import {Footer} from "./components/Footer";
import {Clock} from "./components/Clock";
import {useCurrencies} from "./lib/useCurrencies";
import {Paragraph} from "./components/Styles/styled";

function App() {
    const currenciesData = useCurrencies();
    const [result, setResult] = useState();
    const [exchangeRate, setExchangeRate] = useState();

    const calculateResult = (yourCurrency, finalCurrency, amount) => {
        const startingRate = currenciesData.rates[yourCurrency];
        const finalRate = currenciesData.rates[finalCurrency];
        setResult({
            sourceAmount: (+amount).toFixed(2),
            targetAmount: ((amount / startingRate) * finalRate).toFixed(2),
            yourCurrency,
            finalCurrency,
        });
    };

    const calculateRate = (yourCurrency, finalCurrency) => {
        const startingRate = currenciesData.rates[yourCurrency];
        const finalRate = currenciesData.rates[finalCurrency];
        setExchangeRate({
            calculateRate: ((1 / startingRate) * finalRate).toFixed(2),
            yourCurrency,
            finalCurrency,
        });
    };

    return (
        <Container>
            <Header title="Online currency exchange"/>
            {currenciesData.loading && (
                <Paragraph>
                    Please wait ... Downloading current exchange rates is in progress.
                </Paragraph>
            )}
            {!currenciesData.loading && currenciesData.error && (
                <Paragraph>
                    Sorry, exchange rates could not be downloaded. Please check Internet connection.
                </Paragraph>
            )}
            {!currenciesData.loading && !currenciesData.error && (
                <>
                    <Section title="Enter data:" additionalParagraph={<Clock/>}>
                        <Form
                            currenciesData={currenciesData}
                            calculateResult={calculateResult}
                            calculateRate={calculateRate}
                        />
                    </Section>
                    <Section title="Result:">
                        <Result result={result} exchangeRate={exchangeRate}/>
                    </Section>
                </>
            )}
            <Footer title="Contact:" currenciesDate={currenciesData.date}/>
        </Container>
    );
}

export default App;
