import * as React from 'react';
import classNames from 'classnames';

import { Variant, Size } from '../../common';

interface LinkBaseProps<T> extends React.AnchorHTMLAttributes<T> {}

export interface LinkProps
  extends Exclude<LinkBaseProps<HTMLAnchorElement>, 'size' | 'disabled'> {
  icon?: string;
  outlined?: boolean;
  size?: Exclude<Size, 'largest'>;
  isButton?: boolean;
  variant?: Exclude<Variant, 'orange' | 'red'>;
}

export const Link: React.FC<LinkProps> = ({
  variant = 'black',
  className,
  size,
  outlined,
  icon,
  children,
  isButton,
  ...props
}) => {
  const linkClasses = classNames(
    'link',
    {
      [`is-${size}`]: true,
      [`is-${variant}`]: true,
      'is-outlined': isButton && outlined,
      'is-button': isButton,
    },
    className
  );

  const iconClasses = classNames('icon', {
    [`icon-${icon}`]: true,
    'is-blue': variant === 'blue' && outlined,
    'is-black': outlined ? variant === 'black' : variant === 'white',
    'is-white': outlined
      ? variant === 'white'
      : ['black', 'blue'].includes(variant as string),
  });

  return (
    <a className={linkClasses} {...props}>
      {children ? <span>{children}</span> : null}
      {icon ? <span className={iconClasses}></span> : null}
    </a>
  );
};
