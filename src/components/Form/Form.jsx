import React, { useState } from "react";
import { Select } from "./Select";
import {
  FormContainer,
  FormFieldset,
  FormLegend,
  FormLabel,
  FormParagraph,
  FormField,
  FormButton,
} from "./styled";

export const Form = ({ currenciesData, calculateResult, calculateRate }) => {
  const [amount, setAmount] = useState("");
  const [yourCurrency, setYourCurrency] = useState("EUR");
  const [finalCurrency, setFinalCurrency] = useState("PLN");

  const onTransactionButtonClick = (event) => {
    event.preventDefault();
    calculateResult(yourCurrency, finalCurrency, amount);
    setAmount("");
  };

  const onExchangeRateButtonClick = (event) => {
    event.preventDefault();
    calculateRate(yourCurrency, finalCurrency);
    console.log(currenciesData);
  };

  return (
    <FormContainer>
      <FormFieldset>
        <FormLegend>Dokonaj transakcji</FormLegend>
        <Select
          title="Wybierz walutę, którą chcesz wymienić:"
          onSelectChange={({ target }) => setYourCurrency(target.value)}
          currency={yourCurrency}
          currenciesData={currenciesData}
        />
        <Select
          title="Wybierz walutę, którą chcesz otrzymać:"
          onSelectChange={({ target }) => setFinalCurrency(target.value)}
          currency={finalCurrency}
          currenciesData={currenciesData}
        />
        <FormLabel>
          <FormParagraph>Wpisz kwotę którą dysponujesz: </FormParagraph>
          <FormField
            otherWidth
            name="amount"
            placeholder="100.00"
            step="0.01"
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </FormLabel>
        <FormButton onClick={onExchangeRateButtonClick}>
          Sprawdź kurs
        </FormButton>
        <FormButton onClick={onTransactionButtonClick}>
          Dokonaj transakcji
        </FormButton>
      </FormFieldset>
      <FormParagraph additionalInfo>
        Aby dokonać transakcji uzupełnij pole z kwotą.
      </FormParagraph>
    </FormContainer>
  );
};
