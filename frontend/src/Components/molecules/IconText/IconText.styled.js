import styled from "@emotion/styled";

export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0;
  gap: 1rem;

  width: max-content;
  height: max-content;

  @media only screen and (max-width: 600px) {
  
    height: max-content;
    justify-content: center;
    align-items: center;
}
`;

export const IconTextTitle = styled.p`
  font-style: ${({fontStyle}) => fontStyle ? fontStyle : 'normal'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '300'};
  font-size: ${({fontSize}) => fontSize ? fontSize : '1.6rem'};
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : '2.4rem'};

  display: flex;
  align-items: left;

  color: ${({color}) => color ? color : '#717B8A'};

`;