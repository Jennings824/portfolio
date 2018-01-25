import styled, {css} from 'styled-components';
import media from './media';

export const Div = styled.div`
${( {marginBottom} ) => marginBottom && css`
  marginBottom: ${marginBottom};
`}
`;

export const Container = styled(Div)`
  padding-left: 140px;
  padding-right: 140px;
  padding-top: 60px;
  padding-bottom: 80px;
  ${media.giant`
      padding-left: 200px;
      padding-right: 200px;
      padding-top: 150px;
    `}
  ${media.desktop`
      padding-left: 120px;
      padding-right: 120px;
      padding-top: 50px;
    `}
  ${media.tablet`
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 15px;
    `}
    ${media.phone`
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 15px;
      `}
`;


export const Relative = styled(Div)`
  position: relative;
`;

export const Flex = styled(Div)`
  display: flex;

  ${( {column} ) => column && css`
    flex-direction: ${column};
  `}
  ${( {justify} ) => justify && css`
    justify-content: ${justify};
  `}
  ${( {align} ) => align && css`
    align-content: ${align};
  `}
`;
