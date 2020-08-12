import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
margin: 30px;
font-size: 20px;

${({ date }) => date && css`
margin: 0 30px;
font-size: 15px;
font-family: monospace;
text-align: right;
`}
`;