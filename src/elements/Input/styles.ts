import { LabelHTMLAttributes } from 'react';
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  error?: string
}

const topAnimate = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Label = styled.label<LabelProps>`
  height:50px;
  padding: 0 15px;
  border-radius: 8px;
  border: 2px solid #0f1829;
  background-color: #0f1829;
  transition: border .4s;
  display: flex;
  align-items: center;

  & + label {
  margin-bottom: 15px;
  }

  &:focus-within, &:active {
    border-color: ${props => !props.error ? '#64A4ED' : ''};

    svg {
      fill: #64A4ED;
      transition: fill .4s;
    }

    ${(props) =>
    props.error &&
    css`
    svg {
      fill: #FB8686;
    }
  `}
  }

  ${(props) =>
    props.error &&
    css`
    border-color: #FB8686;

    svg {
      fill: #FB8686;
    }
  `}

  svg {
    fill: #A0A2A4;
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
      color: #A0A2A4;
    }
  }
`;

export const Error = styled.p`
  color: #FB8686;
  margin-top: 7px;
  animation: ${topAnimate} .4s backwards;
`
