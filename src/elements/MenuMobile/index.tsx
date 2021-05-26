import React from 'react';

import { Link } from '@reach/router';
import { Link as LinkSUI } from '../Link';
import classNames from 'classnames';

export interface PropsMenuMobile extends React.HTMLAttributes<HTMLDivElement> {
  menuActive?: boolean;
  isLogued?: boolean;
}

function MenuMobile({
  className,
  menuActive,
  isLogued,
  ...rest
}: PropsMenuMobile) {
  const classes = classNames(
    'navMobile',
    [menuActive ? 'isShow' : ''],
    className
  );

  const isActive = ({ isCurrent }: any) => {
    return isCurrent ? { className: 'active' } : {};
  };

  return (
    <nav {...rest} className={classes}>
      <ul>
        <li className="link">
          <Link to="/" getProps={isActive}>
            Home
          </Link>
        </li>

        <li className="link">
          <Link to="/we" getProps={isActive}>
            Sobre nós
          </Link>
        </li>

        {!isLogued ? (
          <li className="link">
            <Link to="/register" getProps={isActive}>
              Cadastre-se
            </Link>
          </li>
        ) : null}

        <li>
          <LinkSUI
            href="https://app.captalento.com/login"
            isButton
            sizeButton="b-small"
            variant="blue"
            className="w-38"
          >
            Entrar
          </LinkSUI>
        </li>
      </ul>
    </nav>
  );
}

export { MenuMobile };
