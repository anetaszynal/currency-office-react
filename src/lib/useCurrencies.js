import { useState, useEffect } from "react";

export const useCurrencies = () => {
  const [currenciesData, setCurrenciesData] = useState({
    date: null,
    rates: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch(
          "https://api.exchangeratesapi.io/latest?base=PLN"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const currencies = await response.json();
        setCurrenciesData({
          date: currencies.date,
          rates: currencies.rates,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Something bad happend!", error);
        setCurrenciesData({
          date: null,
          rates: false,
          loading: false,
          error: true,
        });
      }
    }, 1000);
  }, []);

  return currenciesData;
};
