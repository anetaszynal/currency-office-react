import React from "react";
import { FormLabel, FormParagraph, FormField } from "./styled";

export const Select = ({ title, currenciesData, currency, onSelectChange }) => {
  return (
    <FormLabel>
      <FormParagraph>{title}</FormParagraph>
      <FormField as="select" value={currency} onChange={onSelectChange}>
        {currenciesData &&
          Object.keys(currenciesData.rates).map((rate) => (
            <option key={rate}>{rate}</option>
          ))}
      </FormField>
    </FormLabel>
  );
};
