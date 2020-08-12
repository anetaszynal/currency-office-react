import React from "react";
import { currencies } from "../../lib/currencies";
import { FormLabel, FormParagraph, FormField } from './styled';

export const Select = ({ title, onSelectChange, currency }) => {
  return (
    <FormLabel>
      <FormParagraph>{title}</FormParagraph>
      <FormField
        as="select"
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
      </FormField>
    </FormLabel>
  );
};

