import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { shade } from "polished";
import { ButtonProps } from "./index";

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  margin: 8px 0;
  border-radius: 8px;
  border: none;
  background: #64A4ED;
  color: #243B55;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: ${props => !props.disabled ? shade(0.2, '#64A4ED') : ''};
    background: ${props => props.outlined ? '#64A4ED' : ''};
    color: ${props => props.outlined ? '#243B55' : ''};
  }

  ${(props) =>
    props.icon &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px 0;
    `}

  
  ${(props) =>
    props.disabled &&
    css`
      background: #ADCCF0;
      cursor: not-allowed
    `}

  ${(props) =>
    props.outlined &&
    css`
      border: 2px solid #64A4ED;
      background: transparent;
      color: #64A4ED;
    `}
`;
