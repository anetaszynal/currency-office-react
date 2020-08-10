import styled, { css } from 'styled-components';

export const FormContent = styled.form`
  margin: 10px;
  overflow-x: scroll;
`;

export const FormFieldset = styled.fieldset`
  margin: 10px;
  padding: 5px;
  border: 2px inset rgb(236 236 236);
`;

export const FormLegend = styled.legend`
  margin: 10px;
  padding: 5px;
  font-size: 18px;
  border: 2px outset rgb(236 236 236);
`;

export const FormLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const FormParagraph = styled.p`
  margin: 10px;
  font-size: 18px;
  min-width: 50%;

  ${({ additionalInfo }) => additionalInfo && css`
    margin: 20px 30px 0px;
    font-weight: bold;
    font-style: italic;
  `}
`;

export const FormInput = styled.input`
  margin: 10px;
  padding: 5px;
  flex-grow: 1;
  flex-shrink: 0;
  min-width: 230px;
  font-size: 18px;
  min-width: 240px;
`;

export const FormSelect = styled.select`
  margin: 10px;
  padding: 5px;
  flex-grow: 1;
  flex-shrink: 0;
  min-width: 230px;
  font-size: 18px;
`;

export const FormButton = styled.button`
  margin: 10px;
  padding: 5px;
  float: right;
  font-size: 18px;
  background-color: white;

  &:hover {
    background-color: rgb(236 236 236);
  }
`;