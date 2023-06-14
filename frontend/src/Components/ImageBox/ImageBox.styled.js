import styled from "@emotion/styled";

export const ImageBoxWrapper = styled.div`
  /* Auto layout */
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.5rem;
  gap: 0.2rem;

  width: 104px;
  height: 104px;

  background: url(${({image}) => image}) no-repeat center center;
  border-radius: 1rem;
`;

export const ImageBoxDeleteAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  width: 3rem;
  height: 3rem;

  background: #FFFFFF;
  box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
  border-radius: 5rem;

  border: none;
  outline: none;
  cursor: pointer;
`;