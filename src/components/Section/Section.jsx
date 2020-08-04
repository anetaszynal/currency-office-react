import React from 'react';
import './style.css';

export const Section = ({ title, body, additionalParagraph }) => (
  <section className="section">
    <h2 className="section__title">{title}</h2>
    <div>{additionalParagraph}</div>
    <div>{body}</div>
  </section>
);
