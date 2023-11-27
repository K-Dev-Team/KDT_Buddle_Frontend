import styled from 'styled-components';

export const ContentsBackground = styled.div`
  width: 100%;
  height: 600px;
  overflow-y: hidden;
`;
export const Line1 = styled.div`
  margin-bottom: 20px;
`;
export const Line2 = styled.div`
  color: #000;
  font-family: Eulyoo1945;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px; /* 137.5% */
  width: 225px;
  margin-bottom: 50px;
`;
export const Line3 = styled.div`
  border-left: 1.5px solid #101010;
  display: flex;
  padding: 5px 10px;
  margin-bottom: 15px;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Item = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05);
`;
export const ArrowIconPosition = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  &:hover {
    cursor: pointer;
  }
`;
