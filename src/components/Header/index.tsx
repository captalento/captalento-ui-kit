import React from 'react';
import classNames from 'classnames';

import LogoDesktop from '../../assets/logo-desktop.svg';
import LogoMobile from '../../assets/logo-mobile.svg';
import { Link } from '@reach/router';

export interface headerProps {
  children?: any;
  className?: string;
  application?: 'app' | 'site';
}

function Header({ className, application = 'app', children }: headerProps) {
  const classes = classNames('header', className);

  return (
    <header className={classes}>
      <Link
        to={
          application === 'app'
            ? 'https://app.captalento.com/home'
            : 'https://captalento.com/'
        }
        className="cursor-pointer z-20"
      >
        <img src={LogoDesktop} className="hidden lg:block h-8" />
        <img src={LogoMobile} className="block lg:hidden h-8" />
      </Link>

      {children}
    </header>
  );
}

export { Header };
