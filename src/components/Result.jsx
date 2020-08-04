import React from 'react';

export const Result = ({ result, exchangeRate }) => {
  return (
    <>
      <p className="section__paragraph">
        {exchangeRate
          ? `Za 1.00 ${exchangeRate.yourCurrency} dostaniesz u nas ${exchangeRate.calculateRate} ${exchangeRate.finalCurrency}
           Zapraszamy do dokonania transakcji!`
          : ''
        }
      </p>
      <p className="section__paragraph">
        {result && result.sourceAmount > 0
          ? `Dziękujemy za transakcję! 
           Twoje ${result.sourceAmount} ${result.yourCurrency} zostało sprzedane.
           Oczekuj wpływu na konto w wysokości ${result.targetAmount} ${result.finalCurrency}`
          : ''
        }
      </p>
    </>
  );
};
