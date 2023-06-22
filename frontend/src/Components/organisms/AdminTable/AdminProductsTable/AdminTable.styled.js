import styled from "@emotion/styled";

export const AdminTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 2rem;
`;

export const AdminTableSubWrapper = styled.div`
  vertical-align: middle;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  min-width: 100%;
  display: inline-block;
  overflow: hidden;
`;

export const AdminTableTag = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  min-width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

export const AdminTabletTHead = styled.thead`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 4rem;
  gap: 2rem;

  width: max-content;
  height: max-content;

  background: #EBDECA;
  border-radius: 1rem 1rem 0 0;

  position: sticky;
  top: 0;
  z-index: 1;
`;

export const AdminTableTr = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 4rem;
  gap: 2rem;

  width: inherit;
  height: max-content;
  overflow: hidden;

  background: ${({background}) => background ? background : 'transparent'};
  border-radius: 1rem 1rem 0 0;

  //:nth-child(2n) {
  //  width: 100%;
  //  overflow: hidden;
  //  background: #F2F2F2;
  //}
`;

export const AdminTableTh = styled.th`
  width: ${({width}) => width};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 42px;

  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify ? justify : 'flex-start;'};

  color: #F2A63B;
`;

export const AdminTableTBody = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.2rem 0;
  gap: 1.2rem;

  width: 100%;
  height: max-content;

  background: #FFFFFF;
  //box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
  border-radius: 0 0 1rem 1rem;

  overflow: auto;
`;

export const AdminTableTd = styled.td`
  //width: 15.1rem;
  min-width: ${({width}) => width};
  max-width: ${({width}) => width};
  height: 4.2rem;

  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 4.2rem;

  color: #949698;

  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify ? justify : 'flex-start;'};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  gap: 2rem;

  :after {
    ${({ellipsis}) => ellipsis ? `content: '...';` : null}
  }
`;

export const AdminTableTdImg = styled.td`
  width: 9.051rem;
  height: 5.973rem;
  background: url(${({imgUrl}) => imgUrl}) center/contain no-repeat;
  background-size: cover;
  border-radius: 1rem;
`;