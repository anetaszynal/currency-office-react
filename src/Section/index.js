import React from "react";
import "./style.css"

const Section = ({ title, body }) => (
  <section className="section">
    <h2 class="section__title">{title}</h2>
    <div>{body}</div>
  </section>
);

export default Section;