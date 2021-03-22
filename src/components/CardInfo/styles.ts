import styled from 'styled-components';

export const Contant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 1rem;
  background-color: #405B79;
  padding: 2rem 1.25rem;
  color: #EDEFF9;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    max-width: 195px;
    text-align: center;
    font-weight: 400;
    font-size: 1.125rem;
  }
`;

export const Effect = styled.div`
  width: 98%;
  height: 2rem;
  border-radius: 1rem 1rem 0 0;
  position: relative;
  top: 1.375rem;
  z-index: -1;
  background-color: ${props => props.color === 'blue' ? '#98D0F0' : 'null'} ;
  background-color: ${props => props.color === 'green' ? '#ADFF9F' : 'null'} ;
`;