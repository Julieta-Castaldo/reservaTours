import styled from "@emotion/styled";

export const IconBgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  width: max-content;
  height: max-content;

  background: ${({bgColor}) => bgColor};
  border-radius: 5rem;

  :hover {
    cursor: pointer;
    background-color: ${({hoverBgColor}) => hoverBgColor};
    color: ${({hoverColor}) => hoverColor};

    & svg.iconSVG > path {
      fill: ${({hoverColor}) => hoverColor};
    }
    & svg.iconSVG > g > path {
      fill: ${({hoverColor}) => hoverColor};
    }
  }
`;