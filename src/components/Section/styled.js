import styled, { css } from 'styled-components';

export const SectionContent = styled.section`
  padding: 10px;
  border-bottom: 6px solid rgb(236 236 236);
`;

export const SectionTitle = styled.h2`
  margin: 10px 20px;
  font-size: 25px;
`;

export const SectionParagraph = styled.p`
  margin: 30px;
  font-size: 20px;

  ${({ date }) => date && css`
  margin: 0 30px;
  font-size: 15px;
  font-family: monospace;
  text-align: right;
  `}
`;