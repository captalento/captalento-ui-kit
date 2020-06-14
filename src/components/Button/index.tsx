import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outlined = true,
  ...rest
}) => {
  return (
    <Container outlined={outlined} {...rest}>
      {children}
    </Container>
  );
};

export { Button };
