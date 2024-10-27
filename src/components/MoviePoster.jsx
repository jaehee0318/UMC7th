import styled from 'styled-components';

export const MoviePoster = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 100%;
  filter: brightness(1);
  
  &:hover {
    transition: 0.3s ease-in-out;
    filter: brightness(0.5);
  }
`;