import styled from "@emotion/styled";

export const ButtonIconWrapper = styled.button`
  font-size: 1.6rem;
  background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  padding: 1rem 2.4rem;
  border: ${({borderColor}) => (borderColor ? `1px solid ${borderColor}` : 'none')};;
  gap: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({color}) => (color ? color : 'white')};
  width: ${({width}) => (width ? width : '95%')}; // auto
  margin: ${({margin}) => (margin ? margin : '0')};

  :hover {
    cursor: pointer;
    background-color: ${({hoverBgColor}) => hoverBgColor};
    color: ${({hoverColor}) => hoverColor};

    & svg.iconSVG > path {
      fill: ${({hoverColor}) => hoverColor};
    }
  }

  @media only screen and (max-width: 600px) {
    width: ${({width}) => (width ? width : '78%')}; // auto
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-botton: 1rem;
}

`;