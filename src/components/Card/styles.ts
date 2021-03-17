import styled from "@emotion/styled";
import { css } from '@emotion/react';
import { shade } from "polished";

interface LevelProps {
  actived: boolean;
  color: string;
}

interface ContainerProps {
  color: string;
}

export const CardComponent = styled.section`
  position: relative;
  width: 236px;
  height: 338px;
  z-index: 1;
  margin: 6px 0 28px;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #252F32;
  border-radius: 8px;
  color: #EEF4F5;
  position: absolute;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;

  header {
    position: absolute;
    top: -5px;
    background: ${(props) => props.color};
    width: calc(100% - 6px);
    height: 20px;
    border-radius: 8px 8px 0 0;
    z-index: -1;
  }

  h3 {
    margin: 40px 0 25px;
  }

  picture {
    & > img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }
    & > svg {
      width: 120px;
    }
  }

  & > div {
    text-align: center;
    margin: 20px 0 66px;

    p {
      text-align: center;
      font-size: 14px;
      svg {
        width: 12px;
        height: 12px;
        margin-right: 5px;
        fill: #c0c0c8;
      }
    }
  }

  button {
    width: calc(100% - 40px);
    height: 48px;
    background: ${(props) => props.color};
    position: absolute;
    border-radius: 8px;
    bottom: -24px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #2b2b2b;

    &:hover {
      background: ${(props) => shade(0.2, props.color)};
    }
  }
`;

export const Level = styled.section<LevelProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #c0c0c8;
  margin: 0 5px 0 0;

  ${(props) =>
    props.actived &&
    css`
      border-color: ${props.color};
      background: ${props.color};
    `}
`;

export const MainLevel = styled.section`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 6px;
  p {
    font-size: 14px;
    margin: 0 5px;
  }
`;
