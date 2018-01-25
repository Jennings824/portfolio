import styled, {css} from 'styled-components';
import media from './media';

export const Div = styled.div`
${( {marginBottom} ) => marginBottom && css`
  marginBottom: ${marginBottom};
`}
${( {marginTop} ) => marginTop && css`
  marginTop: ${marginTop};
`}
${( {marginLeft} ) => marginLeft && css`
  marginLeft: ${marginLeft};
`}
${( {marginRight} ) => marginRight && css`
  marginRight: ${marginRight};
`}
`;

export const Container = styled(Div)`
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
