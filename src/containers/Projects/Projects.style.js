import styled from 'styled-components';

export const BrewReviewImage = styled.div`
  cursor: pointer;
  display: inline-block;

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

export const DecideImage = styled.div`
  cursor: pointer;
  display: inline-block;

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

export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  
`;
