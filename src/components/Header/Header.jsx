import React from "react";
import { HeaderContent, HeaderTitle } from './styled'

export const Header = ({ title }) => (
  <HeaderContent>
    <HeaderTitle>{title}</HeaderTitle>
  </HeaderContent>
);