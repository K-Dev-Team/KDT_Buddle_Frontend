import React from 'react';
import HeaderBar from '../common/HeaderBar';
import styled from 'styled-components';

const ChannelContainer = styled.div`
  width: 360px;
`;
const ChannelHeader = styled.div`
  width: 100%;
  height: 215px;
  flex-shrink: 0;
  background-color: yellow;
`;
const ChannelTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 33px */
  margin: 37px 136px 61px 18px;
`;
const TabsContainer = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
`;
const TabStyle = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 41px;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;
const AdvContainer = styled.div`
  width: 328px;
  height: 95px;
  display: flex;
  flex-direction: row;
  gap: 65px;
  border-radius: 5px;
  background: #f4f4f4;
  margin: 15px 16px 40px 16px;
`;
const AdvWord = styled.div`
  color: #101010;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  padding: 31px 0px 31px 16px;
  width: 145px;
  height: 33px;
`;
const AdvImageContainer = styled.div`
  display: flex;
  width: 79px;
  padding: 16.159px 9.875px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const Channel = () => {
  return (
    <ChannelContainer>
      <ChannelHeader>
        <HeaderBar />
        <ChannelTitle>모든 이야기 채널을 한번에 살펴볼 수 있어요</ChannelTitle>
      </ChannelHeader>
      <TabsContainer>
        <TabStyle>전체</TabStyle>
        <TabStyle>한줄사색</TabStyle>
        <TabStyle>자유</TabStyle>
      </TabsContainer>
      <AdvContainer>
        <AdvWord>서비스 만족도 조사 하고 아메리카노 받기</AdvWord>
        <AdvImageContainer>커피그림</AdvImageContainer>
      </AdvContainer>
    </ChannelContainer>
  );
};

export default Channel;
