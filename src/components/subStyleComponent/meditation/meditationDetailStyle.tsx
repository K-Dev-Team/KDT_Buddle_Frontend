import styled from 'styled-components';

export const HeadContainer = styled.div`
  width: 320px;
  height: 310px;
  display: flex;
  flex-direction: column;
  background-color: #aa9090;
`;
export const DotTree = styled.div`
  display: flex;
  padding: 12px 16px 12px 320px;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;
export const Title = styled.div`
  color: #fff;
  font-family: Eulyoo1945;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  margin: 122px 148px 31px 16px;
`;
export const Sub = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 19.5px */
  padding: 0px 233px 34px 16px;
`;
export const BodyContainer = styled.div`
  width: 320px;
  height: 400px;
  background-color: wheat;
`;
export const Contents = styled.div`
  width: 300px;
  color: #101010;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  padding: 30px 16px 30px 16px;
`;
export const CommentHead = styled.div`
  border-top: 1px solid #e9e9e9;
  background: #fff;
  display: flex;
  flex-direction: row;
  padding: 5px 4px 5px 17px;
  justify-content: center;
  align-items: center;
  gap: 171px;
`;
export const CountLike = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const Input = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  /* padding: 30px 16px; */
  align-items: center;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  background: #fff;
`;
export const InputText = styled.div`
  color: #8c8c8c;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  padding: 22px 16px;
`;
export const SubmitButton = styled.div`
  margin-left: auto;
  padding: 22px 16px;
  border-radius: 18px;
  background: #e5e5e5;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 8px;
`;
export const ComentContainer = styled.div`
  display: flex;
  width: 320px;
  padding: 20px 0px;
  align-items: flex-start;
  border-bottom: 1px solid #ededed;
  background: #fff;
  padding: 20px 0 20px 0;
  flex-direction: row;
  background-color: pink;
`;
export const MinusPlusContainer = styled.div`
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid #e5e5e5;
  background: #fff;
`;
