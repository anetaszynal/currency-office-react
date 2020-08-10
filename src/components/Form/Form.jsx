import React, { useState, useEffect } from "react";
import { Select } from "./Select";
import { FormContent, FormFieldset, FormLegend, FormLabel, FormParagraph, FormInput, FormButton } from './styled';
import { currencies } from "../../lib/currencies";

export const Form = ({ calculateResult, calculateRate }) => {
  const [amount, setAmount] = useState("");
  const [yourCurrency, setYourCurrency] = useState(currencies[1].shortname);
  const [finalCurrency, setFinalCurrency] = useState(currencies[2].shortname);
  const [startingRate, setStartingRate] = useState();
  const [finalRate, setFinalRate] = useState();

  useEffect(() => {
    setStartingRate(currencies.find(({ shortname }) => shortname === yourCurrency).rate);
    setFinalRate(currencies.find(({ shortname }) => shortname === finalCurrency).rate);
  }, [yourCurrency, finalCurrency]);

  const onTransactionFormClick = (event) => {
    event.preventDefault();
    calculateResult(startingRate, finalRate, yourCurrency, finalCurrency, amount);
    setAmount("")
  }

  const onExchangeRateFormClick = (event) => {
    event.preventDefault();
    calculateRate(startingRate, finalRate, yourCurrency, finalCurrency);
  };

  return (
    <FormContent>
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
          <FormInput
            otherWidth
            name="amount"
            placeholder="100.00"
            step="0.01"
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </FormLabel>
        <FormButton onClick={onExchangeRateFormClick} >Sprawdź kurs</FormButton>
        <FormButton onClick={onTransactionFormClick} >Dokonaj transakcji</FormButton>
      </FormFieldset>
      <FormParagraph additionalInfo>
        Aby dokonać transakcji uzupełnij pole z kwotą.
        </FormParagraph>
    </FormContent>
  );
};