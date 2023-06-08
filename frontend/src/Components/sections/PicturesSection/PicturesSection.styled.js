import styled from "@emotion/styled";

export const PicturesSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 2rem;
  gap: 2.5rem;

  width: 100%;
  height: auto; /* Updated: Use auto height instead of max-content */
  
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const PicturesSectionMainImg = styled.img`
  flex: 1; /* Updated: Expand to fill available space */
  max-width: 50%; /* Updated: Limit to 50% width */
  height: auto; /* Updated: Maintain aspect ratio */
  border-radius: 0.8rem;
  object-fit: cover;
`;

export const PicturesSectionSubWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  gap: 2.9rem;

  width: 100%;
  height: auto; /* Updated: Use auto height instead of 100% */
  flex-wrap: wrap;

  @media (max-width: 990px) {
    flex-direction: row;
  }
`;

export const PicturesSectionSubImg = styled.img`
  width: 14.7rem;
  height: 10.758rem;
  border-radius: 0.8rem;
  object-fit: cover;
  
  @media (max-width: 990px) {
    width: 9.051rem;
    height: 5.973rem;
  }
`;
