import React from 'react';
import styled from 'styled-components';

import HomeButton from '../common/HomeButton';

const HomeHeaderStyle = styled.div`
  width: 360px;
  height: 245px;
  flex-shrink: 0;
  display: flex;
  background-color: white;
`;

const HomeSubjectStyle = styled.div`
  display: flex;
  padding: 42px 157px 42px 0px;
  align-items: center;
`;

const HomeSubjectTextStyle = styled.div`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 33px */
  width: 163px;
  height: 82px;
`;

function HomeHeader() {
  return (
    <HomeHeaderStyle>
      <HomeSubjectStyle>
        <HomeSubjectTextStyle>매주 새롭게 사색할만한 주제를 확인해보세요</HomeSubjectTextStyle>
      </HomeSubjectStyle>
    </HomeHeaderStyle>
  );
}

export default HomeHeader;
