import React, { useState } from 'react';
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Form } from "./components/Form";
import { Result } from "./components/Result";
import { Footer } from "./components/Footer";
import { Clock } from "./components/Clock";

function App() {
  const [result, setResult] = useState();
  const [exchangeRate, setExchangeRate] = useState();

  const calculateResult = (startingRate, finalRate, yourCurrency, finalCurrency, amount) => {
    setResult({
      sourceAmount: (+amount).toFixed(2),
      targetAmount: (amount * (startingRate / finalRate)).toFixed(2),
      yourCurrency,
      finalCurrency
    });
  };

  const calculateRate = (startingRate, finalRate, yourCurrency, finalCurrency) => {
    setExchangeRate({
      calculateRate: (startingRate / finalRate).toFixed(2),
      yourCurrency,
      finalCurrency
    });
  };

  return (
    <Container>
      <Header title="Internetowy kantor" />
      <Section
        title="Wprowadź dane:"
        additionalParagraph={<Clock />}
      >
        <Form
          calculateResult={calculateResult}
          calculateRate={calculateRate}
        />
      </Section>
      <Section title="Wynik:">
        <Result
          result={result}
          exchangeRate={exchangeRate}
        />
      </Section>
      <Footer title="Kontakt:" />
    </Container>
  );
};

export default App;
