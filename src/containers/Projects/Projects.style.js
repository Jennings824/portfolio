import styled from 'styled-components';
import { lightblue, red } from '../../theme/variables'

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
  z-index: -1;
  h1 {
    font-size: 4em;
    margin: 0;
    font-weight: bold;
    transform: translateY(100%);
    color: ${lightblue};
    opacity: .4;
  }
`;

export const Title = styled.h1`
  color: ${lightblue};

`;
