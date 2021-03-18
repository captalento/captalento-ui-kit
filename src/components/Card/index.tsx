import React from "react";

import { CardComponent, Container, Level, MainLevel } from "./styles";
import Clock from "./clock";

export interface CardProps {
  buttonName: string;
  duration: string;
  level: 0 | 1 | 2;
  courseName: string;
  color: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  courseName,
  buttonName,
  duration,
  level,
  color = "#ff4747",
  onClick,
}) => {
  const levelRendering = (step: number) => {
    return (
      <MainLevel>
        <p>nível</p>
        {/* {[...Array(3).keys()].map((_, i) => ( */}
          <Level color={color} actived={!!step} />
        {/* ))} */}
      </MainLevel>
    );
  };
  return (
    <CardComponent>
      <Container color={color}>
        <header></header>
        <h3>{courseName}</h3>
        <picture>{children}</picture>
        <div>
          <p>
            <Clock />
            {duration}
          </p>
          {levelRendering(level)}
        </div>
        <button onClick={onClick}>{buttonName}</button>
      </Container>
    </CardComponent>
  );
};
