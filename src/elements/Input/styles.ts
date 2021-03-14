import { LabelHTMLAttributes } from 'react';
import styled from "@emotion/styled";
import { css } from "@emotion/core";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  error?: string
}

export const Label = styled.label<LabelProps>`
  height:50px;
  background-color: #0f1829;
  border-radius: 8px;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
  padding: 0 15px;
  border: 2px solid #0f1829;

  &:focus-within {
  border: 2px solid #64A4ED;

  svg {
   fill: #64A4ED;
  }

${(props) =>
  props.error &&
  css`
  border: 2px solid #FB8686;

  svg {
    fill: #FB8686;
  }
`}
}

svg {
  fill: #706F87;
}

${(props) =>
  props.error &&
  css`

  svg {
    fill: #FB8686;
  }
`}

input {
  height: 50px;
  width: 100%;
  margin: 0 12px;
  font-size: 18px;
  color: #d7dcf1;
  border: none;
  background: transparent;

  &::placeholder {
   color: #706F87;
  }
}
`;
