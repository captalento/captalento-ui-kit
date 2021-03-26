import styled from 'styled-components';

export const Contant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: #405b79;
  padding: 2rem 1.25rem;
`;

export const Effect = styled.div`
  width: 98%;
  height: 2rem;
  border-radius: 1rem 1rem 0 0;
  position: relative;
  top: 1.375rem;
  z-index: -1;
  background-color: ${props => (props.color === 'blue' ? '#98D0F0' : 'null')};
  background-color: ${props => (props.color === 'green' ? '#ADFF9F' : 'null')};
`;
