import styled from "@emotion/styled";

export const CircleButtonWrapper = styled.button`
  font-size: 1.6rem;
  background-color: ${({bgColor}) => (bgColor ? bgColor : 'transparent')};
  border: ${({borderColor}) => (borderColor ? `1px solid ${borderColor}` : 'none')};;
  gap: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({color}) => (color ? color : 'white')};
  width: ${({width}) => (width ? width : '100%')}; // auto
  height: ${({height}) => (height ? height : '100%')}; // auto
  margin: ${({margin}) => (margin ? margin : '0')};
  border-radius: 50%;

  :hover {
    cursor: pointer;
    background-color: ${({hoverBgColor}) => hoverBgColor};
    color: ${({hoverColor}) => hoverColor};

    & svg.iconSVG > path {
      fill: ${({hoverColor}) => hoverColor};
    }
  }

  :disabled {
    opacity: 0.5;
    border: grey;
    background-color: grey;
    pointer-events: none;
  }


`;