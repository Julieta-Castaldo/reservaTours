import styled from "@emotion/styled";

export const CreateProductFormSection = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5rem 0;
  gap: 2rem;

  max-width: 112rem;
  height: max-content;
  @media (max-width: 430px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const CreateProductFormSubWrapper = styled.div`
  display: grid;
  //grid-template-columns: auto auto auto auto;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-template-rows: auto;
  justify-content: stretch;

  align-items: center;
  //flex-wrap: wrap;
  width: 100%;
  height: max-content;
  gap: 1rem;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

  @media (max-width: 1020px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`;

export const CreateProductFormImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-template-rows: auto;
  justify-content: stretch;
  grid-gap: 2rem;
`;
