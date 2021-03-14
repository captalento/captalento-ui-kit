import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from 'react-icons';
import { Container } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  icon?: React.ComponentType<IconBaseProps> | null;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  outlined,
  disabled,
  ...rest
}) => {
  return (
    <Container
      outlined={outlined}
      disabled={disabled}
      icon={Icon}
      {...rest}
    >
      {children}
      {Icon ? <Icon size={20} /> : null}
    </Container>
  );
};

export { Button };
