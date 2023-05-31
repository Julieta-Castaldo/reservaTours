import styled from "@emotion/styled";

export const ToursSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 10rem 0;
  gap: 5rem;

`;

export const ToursSectionTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-family: 'Roboto';
  font-size: 38px;
  line-height: 24px;
  /* identical to box height, or 53% */

  display: flex;
  align-items: center;
  text-align: center;

  /* 3 */

  color: #FACA0A;
`;

export const ToursSectionCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 4rem;
`;