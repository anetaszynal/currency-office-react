import React from "react";
import {FooterContent, FooterTitle} from "./styled";

export const Footer = ({title, currenciesDate}) => (
    <FooterContent>
        <FooterTitle>{title}</FooterTitle>
        <p>If you have any questions, please contact me at the address provided.</p>
        <address>
            Online currency exchange
            <br/>
            currencyexchange@online.pl
            <br/>
            12-345-67-89
        </address>
        <p>
            The courses we use in our exchange office are taken from the European Bank
            Central. Relevant for the day {currenciesDate}.
        </p>
    </FooterContent>
);
