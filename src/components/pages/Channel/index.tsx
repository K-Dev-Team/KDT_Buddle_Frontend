import React from 'react';
import HeaderBar from '../../common/HeaderBar';
import styled from 'styled-components';
import Tabs from '../../common/Tabs';

import { Advertisement } from '../../common/Advertisement';
import * as S from '../../subStyleComponent/channel/channelStyle';

const Channel = () => {
  return (
    <S.ChannelContainer>
      <S.ChannelHeader>
        <S.ChannelTitle>모든 이야기 채널을 한번에 살펴볼 수 있어요</S.ChannelTitle>
      </S.ChannelHeader>
      <Tabs
        items={[
          {
            key: '1',
            label: '전체',
            content: (
              <div>
                <Advertisement />
                <div>sswwwwss</div>
                <div>sswwwwss</div>
                <div>sswwwwss</div>
                <div>sswwwwss</div>
                <div>sswwwwss</div>
                <div>sswwwwss</div>
              </div>
            ),
          },
          { key: '2', label: '한줄사색', content: <>한줄사색 컨텐츠</> },
          { key: '3', label: '자유', content: <>자유 컨텐츠</> },
        ]}
      />
    </S.ChannelContainer>
  );
};

export default Channel;
