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

`;