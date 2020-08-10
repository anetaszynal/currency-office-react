import React from "react";
import { currencies } from "../../lib/currencies";
import { FormLabel, FormParagraph, FormSelect } from './styled';

export const Select = ({ title, onSelectChange, currency }) => {
  return (
    <FormLabel>
      <FormParagraph>{title}</FormParagraph>
      <FormSelect
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
      </FormSelect>
    </FormLabel>
  );
};

