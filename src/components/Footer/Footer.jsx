import React from "react";
import { FooterContent, FooterTitle } from './styled';

export const Footer = ({ title }) => (
  <FooterContent>
    <FooterTitle>
      {title}
    </FooterTitle>
    <p>
      W przypadku jakichkolwiek pytań, proszę o kontakt na wskazany adres
     </p>
    <address>
      Internetowy Kantor Sp. z o.o.<br />
      interntowy@kantor.pl<br />
      12-345-67-89
    </address>
    <p>
      Kursy, które stosujemy w naszym kantorze oparte są na kursie pobranym ze strony NBP zwiększonym o naszą marżę.
    </p>
  </FooterContent>
);