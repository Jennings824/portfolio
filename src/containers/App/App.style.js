import styled from 'styled-components';
import { yellow } from '../../theme/variables'

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 80vh;
  background-image: url(${require('../../assets/MJ-logo.png')});
  opacity: 0.4;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`;
