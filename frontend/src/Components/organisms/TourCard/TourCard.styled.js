import styled from "@emotion/styled";

export const TourCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 4rem;
  gap: 1.5rem;

  width: 29.5rem;
  height: 46.4rem;

  background: #FFFFFF;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
`;

export const TourCardImgWrapper = styled.div`
  width: 21.5rem;
  height: 21.5rem;
  background: #F0F0F0;
  border-radius: 2.5rem;
  background: url(${({imgUrl}) => imgUrl}) center/contain no-repeat;
  background-size: cover;
`;
export const TourCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1rem;

  width: 100%;
  height: max-content;
`;

export const TourCardTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 2.05944rem;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  text-align: center;
  
  color: #58C1CE;
`;

export const TourCardPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  gap: 0.05rem;

  width: 21.5rem;
  height: 2.3rem;

`;

export const TourCardCurrency = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.2rem;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Text */

  color: #717B8A;
`;

export const TourCardPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.3rem;
  display: flex;
  align-items: center;

  color: #F2A63B;
`;