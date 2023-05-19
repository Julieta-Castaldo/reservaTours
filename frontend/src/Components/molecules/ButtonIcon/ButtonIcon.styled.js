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
  width: ${({width}) => (width ? width : '100%')}; // auto
  margin: ${({margin}) => (margin ? margin : '0')};

  :hover {
    cursor: pointer;
    background-color: ${({hoverBgColor}) => hoverBgColor};
    color: ${({hoverColor}) => hoverColor};

    & svg.iconSVG > path {
      fill: ${({hoverColor}) => hoverColor};
    }
  }

`;