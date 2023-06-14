import styled from "@emotion/styled";

export const NameSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 19.7rem;
  gap: 1rem;

  width: 100%;
  height: 6.2rem;

  background: #F2A63B;
  @media (max-width: 710px) {
    padding: 0 5%;
  }
`;

export const NameSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1rem;

  width: max-content;
  height: max-content;
`;