import React, {useState} from "react";
import {Select} from "./Select";
import {
    FormContainer,
    FormFieldset,
    FormLegend,
    FormLabel,
    FormParagraph,
    FormField,
    FormButton,
} from "./styled";

export const Form = ({currenciesData, calculateResult, calculateRate}) => {
    const [amount, setAmount] = useState("");
    const [yourCurrency, setYourCurrency] = useState("EUR");
    const [finalCurrency, setFinalCurrency] = useState("PLN");

    const onTransactionButtonClick = (event) => {
        event.preventDefault();
        calculateResult(yourCurrency, finalCurrency, amount);
        setAmount("");
    };

    const onExchangeRateButtonClick = (event) => {
        event.preventDefault();
        calculateRate(yourCurrency, finalCurrency);
        console.log(currenciesData);
    };

    return (
        <FormContainer>
            <FormFieldset>
                <FormLegend>Make a transaction</FormLegend>
                <Select
                    title="Select the currency you want to exchange:"
                    onSelectChange={({target}) => setYourCurrency(target.value)}
                    currency={yourCurrency}
                    currenciesData={currenciesData}
                />
                <Select
                    title="Select the currency you want to receive:"
                    onSelectChange={({target}) => setFinalCurrency(target.value)}
                    currency={finalCurrency}
                    currenciesData={currenciesData}
                />
                <FormLabel>
                    <FormParagraph>Enter the amount you have: </FormParagraph>
                    <FormField
                        otherWidth
                        name="amount"
                        placeholder="100.00"
                        step="0.01"
                        type="number"
                        value={amount}
                        onChange={({target}) => setAmount(target.value)}
                    />
                </FormLabel>
                <FormButton onClick={onExchangeRateButtonClick}>
                    Check the rate
                </FormButton>
                <FormButton onClick={onTransactionButtonClick}>
                    Make a transaction
                </FormButton>
            </FormFieldset>
            <FormParagraph additionalInfo>
                To make a transaction, complete the field with the amount.
            </FormParagraph>
        </FormContainer>
    );
};
