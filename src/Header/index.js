import React from "react";
import "./style.css"

const Header = ({ title }) => (
  <header className="header">
    <h1 className="title">{title}</h1>
  </header>
);

export default Header;