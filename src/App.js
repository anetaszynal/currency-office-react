import React, { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Form } from "./components/Form";
import { Result } from "./components/Result";
import { Footer } from "./components/Footer";
import { Clock } from "./components/Clock";
import { useCurrencies } from "./lib/useCurrencies";
import { Paragraph } from "./components/Styles/styled";

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
      <Header title="Internetowy kantor" />
      {currenciesData.loading && (
        <Paragraph>
          Proszę czekać... Trwa pobieranie aktualnych kursów walut.
        </Paragraph>
      )}
      {!currenciesData.loading && currenciesData.error && (
        <Paragraph>
          Przepraszamy, nie udało pobrać się kursów walut. Proszę sprawdzić
          połączenie z internetem.
        </Paragraph>
      )}
      {!currenciesData.loading && !currenciesData.error && (
        <>
          <Section title="Wprowadź dane:" additionalParagraph={<Clock />}>
            <Form
              currenciesData={currenciesData}
              calculateResult={calculateResult}
              calculateRate={calculateRate}
            />
          </Section>
          <Section title="Wynik:">
            <Result result={result} exchangeRate={exchangeRate} />
          </Section>
        </>
      )}
      <Footer title="Kontakt:" currenciesDate={currenciesData.date} />
    </Container>
  );
}

export default App;
