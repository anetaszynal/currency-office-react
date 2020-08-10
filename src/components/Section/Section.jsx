import React from "react";
import { SectionContent, SectionTitle } from './styled';

export const Section = ({ title, children, additionalParagraph }) => (
  <SectionContent>
    <SectionTitle>{title}</SectionTitle>
    <div>{additionalParagraph}</div>
    <div>{children}</div>
  </SectionContent>
);