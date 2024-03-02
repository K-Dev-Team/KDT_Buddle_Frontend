import React from 'react';
import Tabs from '../../common/Tabs';

import { Advertisement } from '../../common/Advertisement';
import * as S from '../../subStyleComponent/channel/AllContensStyle';
import AllContents from '../../subComponent/channel/AllContents';
import OneLineContens from '../../subComponent/channel/OneLineContens';
import FreeContents from '../../subComponent/channel/FreeContens';

const Channel = () => {
  return (
    <S.ChannelContainer>
      <S.ChannelHeader>
        <S.ChannelTitle>모든 이야기 채널을 한번에 살펴볼 수 있어요</S.ChannelTitle>
      </S.ChannelHeader>
      <div>
        <Tabs
          items={[
            {
              key: '1',
              label: '전체',
              content: (
                <div style={{ height: '60vh', overflowY: 'auto' }}>
                  <Advertisement />
                  <AllContents />
                </div>
              ),
            },
            {
              key: '2',
              label: '한줄사색',
              content: (
                <div style={{ height: '60vh', overflowY: 'auto' }}>
                  <OneLineContens />
                </div>
              ),
            },
            {
              key: '3',
              label: '자유',
              content: (
                <div style={{ height: '60vh', overflowY: 'auto', width: '100%' }}>
                  <FreeContents />
                </div>
              ),
            },
          ]}
        />
      </div>
    </S.ChannelContainer>
  );
};

export default Channel;
