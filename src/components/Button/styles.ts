import styled from "@emotion/styled";
import { shade } from "polished";
import { ButtonProps } from "./index";

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 3.5rem;
  margin: 8px 0;
  padding: 0 30px;
  border-radius: 8px;
  border: none;
  background: #28bae7;
  color: #171a1c;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    background: ${shade(0.2, '#28bae7')};
  }

  /* @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 1200px) {
  } */
`;

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV
