import React, { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Form } from "./components/Form";
import { Result } from "./components/Result";
import { Footer } from "./components/Footer";
import { Clock } from "./components/Clock";
import { useCurrencies } from "./lib/useCurrencies";

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
      <Section title="Wprowadź dane:" additionalParagraph={<Clock />}>
        <Form
          currenciesData={currenciesData}
          calculateResult={calculateResult}
          calculateRate={calculateRate}
        />
      </Section>
      <Section title="Wynik:">
        <Result
          result={result}
          exchangeRate={exchangeRate}
          currenciesData={currenciesData}
        />
      </Section>
      <Footer title="Kontakt:" currenciesData={currenciesData} />
    </Container>
  );
}

export default App;
