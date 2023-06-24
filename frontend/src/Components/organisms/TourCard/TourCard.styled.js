import styled from "@emotion/styled";

export const TourCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  width: 487.52px;
  height: 269.95px;

  background: #FFFFFF;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 2rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 29.5rem;
    height: 48rem;
}

`;

export const TourCardImgWrapper = styled.div`
  width: 45%;
  height: 220.1px;
  background: #F0F0F0;
  margin-left: 3rem;
  border-radius: 2.5rem;
  background: url(${({imgUrl}) => imgUrl}) center/contain no-repeat;
  background-size: cover;

  @media only screen and (max-width: 600px) {
    width: 21.5rem;
    height: 21.5rem;
    margin-left: 0;
    margin-top: 1rem;
}
`;
export const TourCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0;
  gap: 1rem;

  width: 50%;
  height: max-content;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: max-content;

}


`;

export const TourCardTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 2.05944rem;
  line-height: 2.4rem;
  padding-right: 2rem;

  display: flex;
  align-items: center;
  text-align: left;
  
  color: #58C1CE;

  width: 250px;
  display: -webkit-box;
  -webkit-box-orient: vertical; 
  -webkit-line-clamp: 2; 
  overflow: hidden; 
  text-overflow: ellipsis;

  @media only screen and (max-width: 600px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
}
`;

export const TourCardPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex;
  padding: 0;
  padding-top: 8px;
  padding-left: 20px;
  gap: 0.05rem;

  width: 21.5rem;
  height: 2.3rem;

  background: rgba(242, 166, 59, 0.15);
  width: 100%;
  height: 39px;
  margin-left; 1rem;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    padding-left: 0px;

}
`;

export const TourCardCurrency = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.2rem;
  /* identical to box height */

  display: flex;
  align-items: left;

  /* Text */

  color: #717B8A;
  background; red;

  @media only screen and (max-width: 600px) {
    
    margin-botton: auto;
    align-items: top;

}
`;

export const TourCardPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 2.3rem;
  display: flex;
  align-items: left;

  color: #F2A63B;

  @media only screen and (max-width: 600px) {
    font-size: 3rem;
    background-size: 100% 100%;
`;