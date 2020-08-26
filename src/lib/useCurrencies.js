import { useState, useEffect } from "react";

export const useCurrencies = () => {
  const [currenciesData, setCurrenciesData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.exchangeratesapi.io/latest?base=PLN"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const getCurrencies = await response.json();
        setCurrenciesData(getCurrencies);
      } catch (error) {
        console.error("Something bad happend!", error);
      }
    })();
  }, []);

  return currenciesData;
};
