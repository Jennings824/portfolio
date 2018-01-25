import styled, {css} from 'styled-components';

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
