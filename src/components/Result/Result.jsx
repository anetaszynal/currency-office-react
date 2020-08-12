import React from "react";
import { Paragraph } from '../Styles/styled';

export const Result = ({ result, exchangeRate }) => {
  return (
    <>
      <Paragraph>
        {exchangeRate ?
          `Za 1.00 ${exchangeRate.yourCurrency} dostaniesz u nas
           ${exchangeRate.calculateRate} ${exchangeRate.finalCurrency}
           Zapraszamy do dokonania transakcji!`
          : ""
        }
      </Paragraph>
      <Paragraph>
        {result && result.sourceAmount > 0 ?
          `Dziękujemy za transakcję! 
           Twoje ${result.sourceAmount} ${result.yourCurrency} zostało sprzedane.
           Oczekuj wpływu na konto w wysokości ${result.targetAmount} ${result.finalCurrency}`
          : ""
        }
      </Paragraph>
    </>
  );
};
