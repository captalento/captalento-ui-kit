import classNames from 'classnames';
import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Size, Variant } from '../../common';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ComponentType<IconBaseProps>;
  size?: Size;
  variant?: Variant;
  isOutline?: boolean;
  isButton?: boolean;
}

function Link({
  icon: Icon,
  size = 'xs',
  variant = 'white',
  isButton,
  isOutline,
  href,
  className,
  children,
}: LinkProps): JSX.Element {
  const linkClasses = classNames(
    'link',
    {
      [`is-${size}`]: true,
      [`is-${variant}`]: true,
      'is-outline': isButton && isOutline,
      'is-button': isButton,
      'is-icon': Icon,
      'is-icon-button': isButton && Icon,
      'is-icon-outline': isButton && Icon && isOutline,
    },
    className
  );

  return (
    <a href={href} className={linkClasses}>
      {children}
      {Icon ? (
        <Icon
          size={20}
          className={`${isButton || isOutline ? 'ml-5' : 'ml-2'}`}
        />
      ) : null}
    </a>
  );
}

export { Link };
