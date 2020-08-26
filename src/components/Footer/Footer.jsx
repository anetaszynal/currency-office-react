import React from "react";
import { FooterContent, FooterTitle } from "./styled";

export const Footer = ({ title, currenciesData }) => (
  <FooterContent>
    <FooterTitle>{title}</FooterTitle>
    <p>W przypadku jakichkolwiek pytań, proszę o kontakt na wskazany adres</p>
    <address>
      Internetowy Kantor Sp. z o.o.
      <br />
      interntowy@kantor.pl
      <br />
      12-345-67-89
    </address>
    {currenciesData && (
      <p>
        Kursy, które stosujemy w naszym kantorze pobrane są z Europejskiego
        Banku Centralnego. Aktualne na dzień {currenciesData.date}.
      </p>
    )}
  </FooterContent>
);
