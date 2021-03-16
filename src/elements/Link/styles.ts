import styled from "@emotion/styled";
import { shade } from "polished";
import { LinkProps } from '@reach/router';

export interface PropsLink extends LinkProps<HTMLLinkElement>{
  to: string;
}

export const LinkStyle = styled.a<PropsLink>`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  color: #EDEFF9;
  transition: color .4s;
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    fill: #EDEFF9;
    margin-left: 7px;
    transition: fill .4s;
  }

  &:hover {
    color: ${shade(.2, '#EDEFF9')};

    svg {
      fill: ${shade(0.2, '#EDEFF9')};
    }
  }
`;
