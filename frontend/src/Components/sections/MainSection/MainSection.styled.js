import styled from "@emotion/styled";

export const MainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  isolation: isolate;

  width: 100%;
  height: 31.3rem;

  background: url(${({bgImg}) => bgImg}) no-repeat center center;
  background-size: cover;

  position: relative;
`;

export const MainSectionSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5.9rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  color: #58C1CE;


  position: absolute;
  width: 89.2rem;
  min-width: 27.1rem;
  height: 15.1rem;
  bottom: -50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #FFFFFF;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;

  @media (max-width: 990px) {
    width: 80vw;
    max-width: 89.2rem;
    min-width: 20rem;
    height: 15.1rem;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

