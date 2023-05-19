import styled from "@emotion/styled";

export const DividerSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({padding}) => padding};

  width: 100%;
  height: max-content;
`;

export const DividerSectionElement = styled.div`
  width: 100%;
  height: 0.2rem;
  background: #EBEEF1;
`;