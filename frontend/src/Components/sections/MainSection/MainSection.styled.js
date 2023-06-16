import styled from "@emotion/styled";

export const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  isolation: isolate;

  width: 100%;
  //height: 31.3rem;
  height: 52.2rem;

  //background: url(${({bgImg}) => bgImg}) no-repeat center center;
  background: url(${({bgImg}) => bgImg}) center/cover no-repeat;
  background-size: cover;
  object-fit: cover;
  object-position: center;

  position: relative;
  // 1208
  //@media (max-width: 1208px) {
  //  background: url(https://dh-g6-assets.s3.amazonaws.com/Banner_home_mobile.png) no-repeat center center;
  //}
  @media (max-width: 1208px) {
    //background: url(https://dh-g6-assets.s3.amazonaws.com/home-banner-02.png) no-repeat center center;
    //height: 30rem;
    background: url("https://dh-g6-assets.s3.amazonaws.com/home-banner-02.png") center/cover no-repeat;
  object-fit: cover;
  object-position: center;
  }
`;

export const MainSectionSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //padding: 0 5.9rem;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  color: #58C1CE;


  position: absolute;
  //width: 89.2rem;
  width: max-content;
  //min-width: 27.1rem;
  //height: 15.1rem;
  height: max-content;
  padding: 5rem;
  //bottom: -50%;
  bottom: -30%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #FFFFFF;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;

  @media (max-width: 880px) {
    //width: 80vw;
    //max-width: 89.2rem;
    //min-width: 20rem;
    //height: 15.1rem;
    top: 110%;
    left: 50%;
    //transform: translate(-50%, -50%);
  }
   @media (max-width: 410px) {
    top: 130%;
    left: 50%;
  }
`;

export const MainSectionSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1.4rem;

  width: 8.1rem;
  height: 5rem;

  background: #58C1CE;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    position: absolute;
    width: 22.4rem;
    height: 5rem;
    bottom: -25%;
    left: 50%;
    transform: translate(-50%, -25%);
  }
`;

export const MainSectionSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  //flex-wrap: wrap;
  // 1122
  @media (max-width: 880px) {
    flex-direction: column;
  }
`;
