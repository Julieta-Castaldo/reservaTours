import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.5rem;

  width: 100%;
  height: max-content;
`;

export const InputLabel = styled.label`
  width: 100%;
  height: 4.2rem;

  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 4.2rem;
  /* identical to box height, or 262% */

  display: flex;
  align-items: center;

  /* 6 */
  color: #F2A63B;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const InputTag = styled.input`
  color: #717B8A;
  padding: 5px;
  border: 0.1rem solid #F2A63B;
  transition: border-color 0.3s;
  background: transparent;
  width: 100%;

  :focus {
    border: 0.1rem solid red;
  }

  :focus-visible {
    border: 0.1rem solid red;
  }

  :placeholder-shown {
    border-color: #ff0000;
  }

  :not(:placeholder-shown):not(:focus) {
    color: red; /* Text color when typing */
  }
`;