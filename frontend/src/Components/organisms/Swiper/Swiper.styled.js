import styled from "@emotion/styled";
import {IconBgWrapper} from "../../atoms/IconBg/IconBg.styled.js";

export const SwiperSection = styled.section`
  background: white;
  //padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  //margin: 10rem 0 10rem 0;
  margin: 5rem 0 5rem 0;
`;

export const SwiperContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  //height: 400px;
  height: fit-content;
  width: 100%;
  gap: 2rem;
  //background: white;
  //padding: 2rem;
  padding: 2rem 8% 2rem 8%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 490px) {
    //gap: 20rem;
  }
`;

export const SwiperCardContainer = styled.div`
  //flex: 0 0 auto;
  width: 100%;
  //height: 400px;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  //font-size: 5em;
  color: white;
  @media (max-width: 710px) {
    padding: 0 0 0 8%; // First
    padding: 0 8% 0 8%; // Last
  }
`;
export const ArrowContainer = styled.div`
  height: 4.8rem;
  width: 4.8rem;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50rem;
  margin: 0 1rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: #F0973C;

    & svg.ButtonIconSVG > path {
      fill: white;
    }
  }
`;
export const SwiperArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  ${({direction}) => (direction === "left" ? "left: 0" : "right: 0")};
    // ${({direction}) => (direction === "left" ? "left: 2.5%" : "right: 2.5%")};

  border: none;
  //width: 4.8rem;
  width: 8rem;
  //height: calc(100% - 3rem);
  height: calc(100% - 1rem);

  ${({direction}) => (direction === "left" ? "border-radius: 0 1rem 1rem 0" : "border-radius: 1rem 0 0 1rem")};
  font-size: 1.5em;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({direction}) => (
    direction === "left" ?
        "background: linear-gradient(90deg, #FFFFFF 44.79%, rgba(255, 255, 255, 0) 100%);"
        :
        "background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 52.6%);"
)};

  &:hover {
    //background: #F0973C;
    ${({direction}) => (
    direction === "left" ?
        "background: linear-gradient(90deg, #FFFFFF 44.79%, rgba(255, 255, 255, 0) 100%);"
        :
        "background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 52.6%);"
)};

    & svg.ButtonIconSVG > path {
      fill: white;
    }
    
    // & ${IconBgWrapper} {
    //   background-color: #030A8C;
    // }
  }
`;