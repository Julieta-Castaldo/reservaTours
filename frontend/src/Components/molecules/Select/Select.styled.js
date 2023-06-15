import styled from "@emotion/styled";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.5rem;

  width: 100%;
  height: max-content;
`;

export const SelectLabel = styled.label`
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

export const SelectTag = styled.select`
  color: #717B8A;
  //padding: 0.5rem;
  border: 0.1rem solid #F2A63B;
  transition: border-color 0.3s;
  //background: transparent;
  //width: max-content;
  width: 100%;
  height: 4.2rem;
  border-radius: 0.5rem;

  padding: 1rem;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M1.5 3.5l4 4 4-4' fill='%23333333'/%3E%3C/svg%3E");
  //background-repeat: no-repeat;
  //background-position: right 1rem center;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
  linear-gradient(135deg, gray 50%, transparent 50%),
  linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
  calc(100% - 15px) calc(1em + 2px),
  calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px,
  5px 5px,
  1px 1.5em;
  background-repeat: no-repeat;
`;