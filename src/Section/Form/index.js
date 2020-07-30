import React from "react";
import Select from "./Select";
import "./style.css"

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Dokonaj transakcji</legend>
      <Select
        title="Wybierz walutę, którą chcesz wymienić:"
      >
      </Select>
      <Select
        title="Wybierz walutę, którą chcesz otrzymać:"
      >
      </Select>
      <label className="form__label">
        <p className="form__paragraph">Wpisz kwotę którą dysponujesz: </p>
        <input className="form__field form__field--otherWidth" name="amount" />
      </label>
    </fieldset>
  </form>
);
export default Form;