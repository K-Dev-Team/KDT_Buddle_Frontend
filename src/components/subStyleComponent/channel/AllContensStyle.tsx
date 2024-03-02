import styled from 'styled-components';

export const ChannelContainer = styled.div`
  height: 50vh;
`;
export const ChannelHeader = styled.div`
  width: 100%;
  height: 165px;
  flex-shrink: 0;
  background-color: white;
`;
export const ChannelTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 33px */
  margin: 37px 136px 61px 18px;
`;
export const MiddleSubject = styled.div`
  color: #101010;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;
export const CommentBoxHead = styled.div`
  display: flex;
  padding: 65px 15px 20px 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.07);
`;
export const WeekText = styled.div`
  color: #333;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 13px */
`;
export const CommentBoxBody = styled.div`
  display: flex;
  height: 130px;
  padding: 15px 15px 0px 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #fff;
`;
export const ProfilePic = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background: #a5a5a5;
`;
export const ProfileName = styled.div`
  color: #212121;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 13px */
`;
export const CommentBest = styled.div`
  color: #212121;
  leading-trim: both;
  text-edge: cap;
  text-overflow: ellipsis;
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;
export const ContentsContainer = styled.div`
  display: flex;
  width: 320px;
  padding: 20px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
export const ContentsInner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;
export const ContentsNumber = styled.div`
  color: #141414;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  flex: 1 0 0;
`;
export const ContentsHead = styled.div`
  color: #141414;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 16px */
  align-self: stretch;
`;
export const ContentsBody = styled.div`
  width: 100%;
  color: #696969;
  leading-trim: both;
  text-edge: cap;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 146.667% */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  flex: 1 0 0;
`;
export const LikeStyle = styled.div`
  color: #9e71ff;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;
export const CommentStyle = styled.div`
  color: #878787;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
`;
