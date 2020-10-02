import React from "react";
import {Paragraph} from "../Styles/styled";

export const Result = ({result, exchangeRate}) => {
    return (
        <>
            <Paragraph>
                {exchangeRate
                    ? `For 1.00 ${exchangeRate.yourCurrency} you will get from us
           ${exchangeRate.calculateRate} ${exchangeRate.finalCurrency}.
          We invite you to make the transaction!`
                    : ""}
            </Paragraph>
            <Paragraph>
                {result && result.sourceAmount > 0
                    ? `Thank you for your transaction!
           Your ${result.sourceAmount} ${result.yourCurrency} has been sold.
           Expect a transfer to your account in the amount of  ${result.targetAmount} ${result.finalCurrency}`
                    : ""}
            </Paragraph>
        </>
    );
};
