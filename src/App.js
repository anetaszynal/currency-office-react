import React, { useState } from 'react';
import Container from "./Container"
import Header from "./Header";
import Section from "./Section";
import Form from "./Section/Form";
import Result from "./Section/Result";
import Footer from "./Footer";
import Clock from "./Section/Form/Clock";

function App() {
  const [result, setResult] = useState();
  const [exchangeRate, setExchangeRate] = useState();

  const calculateResult = (startingRate, finalRate, yourCurrency, finalCurrency, amount) => {
    setResult({
      sourceAmount: (+amount).toFixed(2),
      targetAmount: (amount * (startingRate/finalRate)).toFixed(2),
      yourCurrency,
      finalCurrency,
    });
  };

  const calculateRate = (startingRate, finalRate, yourCurrency, finalCurrency) => {
    setExchangeRate({
      calculateRate: (startingRate/finalRate).toFixed(2),
      yourCurrency,
      finalCurrency,
    });
  }

  return (
    <Container>
      <Header title="Internetowy kantor" />
      <Section
        title="Wprowadź dane:"
        additionalParagraph={<Clock/>}
        body={<Form
          calculateResult={calculateResult}
          calculateRate={calculateRate}
        />}
      >
      </Section>
      <Section
        title="Wynik:"
        body={<Result
          result={result}
          exchangeRate={exchangeRate}
        />}
      >
      </Section>
      <Footer
        title="Kontakt:">
      </Footer>
    </Container>
  );
};

export default App;
