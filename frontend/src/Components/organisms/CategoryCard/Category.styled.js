import styled from "@emotion/styled";

export const CategoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 0.9rem;

  width: 280px;
  height: 178px;

  background: #FFFFFF;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 2.5rem;
  transition: transform 0.2s ease-in-out;
  
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

`;

export const CategoryCardTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 2.1rem;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  text-align: center;
  
  color: #595E65;

`;