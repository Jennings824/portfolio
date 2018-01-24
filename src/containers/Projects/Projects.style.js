import styled from 'styled-components';

export const BrewReviewImage = styled.div`
  cursor: pointer;


  width: 20%;
  height: 20%;

  & > img {
    transition: transform .3s;
  }
  &:hover {
    & > img {
      transform: scale(1.1);
    }
  }
`;
