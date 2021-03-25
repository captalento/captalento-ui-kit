import { LabelHTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  error?: string;
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
  height: 50px;
  padding: 0 15px;
  border-radius: 8px;
  border: 2px solid #0f1829;
  background-color: #0f1829;
  transition: border 0.4s;
  display: flex;
  align-items: center;
  /* position: relative; */

  /* & + label {
    margin-top: 25.5px;
  }

  & + button {
    margin-top: 25.6px;
  } */

  &:focus-within,
  &:active {
    border-color: ${props => (!props.error ? '#64A4ED' : '')};

    svg {
      fill: #64a4ed;
      transition: fill 0.4s;
    }

    ${props =>
      props.error &&
      css`
        svg {
          fill: #fb8686;
        }
      `}
  }

  ${props =>
    props.error &&
    css`
      border-color: #fb8686;

      svg {
        fill: #fb8686;
      }
    `}

  svg {
    fill: #a0a2a4;
  }

  ${props =>
    props.error &&
    css`
      svg {
        fill: #fb8686;
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
      color: #a0a2a4;
    }
  }
`;

export const Error = styled.p`
  /* position: absolute; */
  font-size: 12px;
  color: #fb8686;
  margin: 3px 0 7px;
  animation: ${topAnimate} 0.4s backwards;
`;
