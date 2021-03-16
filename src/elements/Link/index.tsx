import React, { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { LinkProps as PropLink } from '@reach/router';
import { LinkStyle } from './styles'

export interface LinkProps extends PropLink<HTMLLinkElement>{
  to: string;
}

function Link({
  children,
  to,
  ...rest
}: LinkProps): JSX.Element {

  return (
      <LinkStyle to={to}>
        {children}
        < HiArrowNarrowRight size={20}/>
      </LinkStyle>
  );
};

export { Link };
