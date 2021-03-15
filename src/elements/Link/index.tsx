import React, { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link as LinkRouter, LinkProps as PropLink } from '@reach/router';
import { ContainerLink } from './styles'

export interface LinkProps extends PropLink<HTMLLinkElement>{
  to: string;
}

function Link({
  children,
  to,
  ...rest
}: LinkProps): JSX.Element {

  return (
    <ContainerLink type="button">
      <LinkRouter to={to}>{children}</LinkRouter>
      < HiArrowNarrowRight size={20}/>
    </ContainerLink>
  );
};

export { Link };
