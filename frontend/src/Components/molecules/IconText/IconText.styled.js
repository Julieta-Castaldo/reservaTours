import styled from "@emotion/styled";

export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1rem;

  width: max-content;
  height: max-content;
`;

export const IconTextTitle = styled.p`
  font-style: ${({fontStyle}) => fontStyle ? fontStyle : 'normal'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '300'};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.6rem'};
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : '2.4rem'};

  display: flex;
  align-items: center;

  color: ${({color}) => color ? color : '#717B8A'};

`;