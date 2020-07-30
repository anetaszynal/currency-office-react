import React from "react";
import { currencies } from "../../../currencies"

const Select = ({ title }) => (
  <label className="form__label">
    <p className="form__paragraph">{title}</p>
    <select className="form__field" name="currencies">
      {currencies.map(({ name, shortname }) => (
        <option
          key={shortname}
          value={name}>
          {name}
        </option>)
      )}
    </select>
  </label>
);
export default Select;
