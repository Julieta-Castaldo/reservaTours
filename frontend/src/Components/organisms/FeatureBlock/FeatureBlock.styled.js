import styled from "@emotion/styled";

export const FeatureBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 3rem;
  gap: 2.7rem;

  width: 100%;
  height: max-content;

  /* B10 */
  background: rgba(88, 193, 206, 0.1);

  @media (max-width: 990px) {
    padding: 2.4rem;
    gap: 2.2rem;
  }
`;

export const FeatureBlockTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 4.2rem;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* 3 */
  color: #58C1CE;

  text-decoration: underline;
  text-underline-offset: 1rem;

  @media (max-width: 990px) {
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 42px;
    /* 3 */
  }
`;

export const FeatureBlockItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  gap: 2.5rem;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  /* Inside auto layout */
`;