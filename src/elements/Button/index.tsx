import classnames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  icon?: React.ComponentType<IconBaseProps> | null;
  ref?: React.RefObject<HTMLButtonElement> | null | undefined;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  outlined,
  disabled,
  ref,
  className,
  ...rest
}) => {
  return (
    <Container
      className={classnames("button", className)}
      outlined={outlined}
      disabled={disabled}
      icon={Icon}
      ref={ref}
      {...rest}
    >
      {children}
      {Icon ? <Icon size={20} /> : null}
    </Container>
  );
};

export { Button };
