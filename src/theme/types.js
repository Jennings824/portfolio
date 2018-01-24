import styled from 'styled-components';
import { deepblue, lightblue, yellow, brightblue } from './variables'

export const A = styled.a`
  color: ${deepblue};
  text-decoration: none;
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${deepblue};
    z-index: -1;
    transition: height .1s, background-color .1s;
  }

  &:hover:after {
    height: 100%;
    background-color: ${yellow};
  }
`;

export const B = styled.a`
  color: ${brightblue};
  text-decoration: none;
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${brightblue};
    z-index: -1;
    transition: height .1s, background-color .1s;
  }

  &:hover:after {
    height: 100%;
    background-color: ${lightblue};
  }
`;
