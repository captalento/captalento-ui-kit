import React from 'react';
import classNames from 'classnames';

import LogoDesktop from '../../assets/LogoDesktop';
import LogoMobile from '../../assets/LogoMobile';
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
        to={application === 'app' ? '/home' : '/'}
        className="cursor-pointer z-20"
      >
        <LogoDesktop className="hidden lg:block h-8" />
        <LogoMobile className="block lg:hidden h-8" />
      </Link>

      {children}
    </header>
  );
}

export { Header };
