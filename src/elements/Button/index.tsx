import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Size, Variant } from '../../common';
// import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  size?: Exclude<Size, 'x-small' | 'large' | 'x-large'>;
  variant?: Variant;
  icon?: React.ComponentType<IconBaseProps> | null;
  ref?: React.RefObject<HTMLButtonElement> | null | undefined;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  outlined,
  ref,
  size = 'medium',
  variant = 'blue',
  className,
  ...props
}) => {
  const classes = classNames(
    'button',
    {
      [`is-${size}`]: true,
      [`is-${variant}`]: true,
      'is-outlined': outlined,
      'is-icon': Icon,
    },
    className
  );

  return (
    <button
      className={classes}
      // icon={Icon}
      ref={ref}
      {...props}
    >
      {children ? <span>{children}</span> : null}
      {Icon ? <Icon size={20} className="max-w-max ml-5" /> : null}
    </button>
  );
};

export { Button };
