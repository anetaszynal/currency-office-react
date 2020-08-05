import React from "react";
import "./style.css"

const Section = ({ title, children, additionalParagraph }) => (
  <section className="section">
    <h2 className="section__title">{title}</h2>
    <div>{additionalParagraph}</div>
    <div>{children}</div>
  </section>
);

export default Section;