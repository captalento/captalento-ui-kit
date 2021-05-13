import React from 'react';
import classNames from 'classnames';

import LogoDesktop from '../../assets/logo-desktop.svg';
import LogoMobile from '../../assets/logo-mobile.svg';

export interface headerProps {
  children?: any;
  className?: string;
}

function Header({ className, children }: headerProps) {
  const classes = classNames('header', className);

  return (
    <header className={classes}>
      <div className="container">
        <img src={LogoDesktop} className="hidden lg:block h-8" />
        <img src={LogoMobile} className="block lg:hidden w-8" />

        {children}
      </div>
    </header>
  );
}

export { Header };
