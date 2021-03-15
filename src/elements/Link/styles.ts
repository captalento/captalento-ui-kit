import styled from "@emotion/styled";
import { shade } from "polished";

export const ContainerLink = styled.button`
  padding: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  a {
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    color: #EDEFF9;
    transition: color .4s;
  }

  svg {
    fill: #EDEFF9;
    margin-left: 7px;
    transition: fill .4s;
  }

  &:hover {
    a {
      color: ${shade(.2, '#EDEFF9')};
    }

    svg {
      fill: ${shade(0.2, '#EDEFF9')};
    }
  }
`;
