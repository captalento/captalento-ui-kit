import React from "react";

import { Container, Level, MainLevel } from "./styles";
import Clock from "./clock";

export interface CardProps {
  buttonName: string;
  duration: string;
  level: 0 | 1 | 2;
  courseName: string;
  color: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  buttonName,
  duration,
  level,
  color = "#ff4747",
}) => {
  const levelRendering = (step: number) => {
    return (
      <MainLevel>
        <p>nível</p>
        {[...Array(3).keys()].map((_, i) => (
          <Level color={color} actived={i === step} />
        ))}
      </MainLevel>
    );
  };
  return (
    <Container color={color}>
      <header></header>
      <h3>HTML5</h3>
      <picture>{children}</picture>
      <div>
        <p>
          <Clock />
          {duration}
        </p>
        {levelRendering(level)}
      </div>
      <button>{buttonName}</button>
    </Container>
  );
};
