import React, { useState } from "react";
import { Select } from "./Select";
import { FormContainer, FormFieldset, FormLegend, FormLabel, FormParagraph, FormField, FormButton } from './styled';
import { currencies } from "../../lib/currencies";

export const Form = ({ calculateResult, calculateRate }) => {
  const [amount, setAmount] = useState("");
  const [yourCurrency, setYourCurrency] = useState(currencies[1].shortname);
  const [finalCurrency, setFinalCurrency] = useState(currencies[2].shortname);

  const startingRate = currencies.find(({ shortname }) => shortname === yourCurrency).rate;
  const finalRate = currencies.find(({ shortname }) => shortname === finalCurrency).rate;

  const onTransactionButtonClick = (event) => {
    event.preventDefault();
    calculateResult(startingRate, finalRate, yourCurrency, finalCurrency, amount);
    setAmount("")
  }

  const onExchangeRateButtonClick = (event) => {
    event.preventDefault();
    calculateRate(startingRate, finalRate, yourCurrency, finalCurrency);
  };

  return (
    <FormContainer>
      <FormFieldset>
        <FormLegend>Dokonaj transakcji</FormLegend>
        <Select
          title="Wybierz walutę, którą chcesz wymienić:"
          onSelectChange={({ target }) => setYourCurrency(target.value)}
          currency={yourCurrency}
        />
        <Select
          title="Wybierz walutę, którą chcesz otrzymać:"
          onSelectChange={({ target }) => setFinalCurrency(target.value)}
          currency={finalCurrency}
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
        <FormButton onClick={onExchangeRateButtonClick} >Sprawdź kurs</FormButton>
        <FormButton onClick={onTransactionButtonClick} >Dokonaj transakcji</FormButton>
      </FormFieldset>
      <FormParagraph additionalInfo>
        Aby dokonać transakcji uzupełnij pole z kwotą.
        </FormParagraph>
    </FormContainer>
  );
};