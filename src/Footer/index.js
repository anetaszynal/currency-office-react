import React from "react";
import "./style.css";

const Footer = ({ title }) => (
  <footer className="footer">
    <h2 className="footer__title">{title}</h2>
    <p className="footer__paragraph">W przypadku jakichkolwiek pytań, proszę o kontakt na wskazany adres</p>
    <address>Internetowy Kantor Sp. z o.o.<br />
    interntowy@kantor.pl<br />
    12-345-67-89
    </address>
    <p className="footer__paragraph">Kursy, które stosujemy w naszym kantorze oparte są na kursie pobranym ze strony NBP zwiększonym o naszą marżę.</p>
  </footer>
);
export default Footer;