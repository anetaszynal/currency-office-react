import React from "react";
import { currencies } from "../../lib/currencies"

export const Select = ({ title, onSelectChange, currency }) => {
  return (
    <label className="form__label">
      <p className="form__paragraph">{title}</p>
      <select
        className="form__field"
        value={currency}
        onChange={onSelectChange}
      >
        {currencies.map((({ shortname, name }) => (
          <option
            key={shortname}
            value={shortname}
          >
            {name}
          </option>
        )))}
      </select>
    </label>
  );
};

