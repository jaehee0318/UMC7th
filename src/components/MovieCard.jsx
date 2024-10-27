import styled from 'styled-components';

export const MovieCard= styled.div`
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px;
  width: 170px;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }
`;