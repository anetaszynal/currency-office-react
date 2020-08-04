import React from "react";
import "./style.css"

const Section = ({ title, body, additionalParagraph }) => (
  <section className="section">
    <h2 className="section__title">{title}</h2>
    <div>{additionalParagraph}</div>
    <div>{body}</div>
  </section>
);

export default Section;