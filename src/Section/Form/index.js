import React, { useState, useEffect } from "react";
import Select from "./Select";
import "./style.css";
import { currencies } from "../../currencies";

const Form = ({ calculateResult, calculateRate }) => {
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
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Dokonaj transakcji</legend>
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
        <label className="form__label">
          <p className="form__paragraph">Wpisz kwotę którą dysponujesz: </p>
          <input
            className="form__field form__field--otherWidth"
            name="amount"
            placeholder="100.00"
            step="0.01"
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </label>
        <button onClick={onExchangeRateFormClick} className="form__button">Sprawdź kurs</button>
        <button onClick={onTransactionFormClick} className="form__button">Dokonaj transakcji</button>
      </fieldset>
      <p className="form__paragraph form__paragraph--additionalInfo">Aby dokonać transakcji uzupełnij pole z kwotą.</p>
    </form>
  );
};
export default Form;