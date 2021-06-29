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
    <header className="w-full flex justify-center bg-black-300">
      <div
        className={`${classes} ${
          application === 'app' ? 'lg:px-20' : 'lg:px-48'
        } `}
      >
        <Link
          to={application === 'app' ? '/home' : '/'}
          className="cursor-pointer z-20"
        >
          <LogoDesktop className="hidden lg:block h-8" />
          <LogoMobile className="block lg:hidden h-8" />
        </Link>

        {children}
      </div>
    </header>
  );
}

export { Header };
