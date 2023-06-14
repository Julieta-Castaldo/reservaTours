import styled from "@emotion/styled";

export const AddImageWrapper = styled.button`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;

  width: 10.4rem;
  height: 10.4rem;

  /* Raven/50 */
  background: #F5F7F8;
  border-radius: 1rem;

  border: none;
  outline: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.0587545px;

  /* 6 */
  color: #F2A63B;

  &:hover {
    border: 0.1rem solid #F2A63B;
  }

  &:disabled {
    background-color: yellow;
    cursor: not-allowed;
    border: none;
  }
`;