import React from 'react';
import SectionHeader from '../../common/SectionHeader';
import HeadFilter from '../../subComponent/activity/HeadFilter';
import Tags from '../../common/Tags';
import ContentsPreview from '../../subComponent/activity/ContentsPreview';
import { activityContentDummy } from '../../store/activity/activity_Store';

const Activity = () => {
  const tagList = ['전체', '진행중행사', '무료행사'];

  return (
    <div style={{ height: '95vh' }}>
      <SectionHeader contentTop="닉네임1234 님," contentMiddle="이런 활동은 어떠세요?" />

      <HeadFilter />
      <Tags tagList={tagList} />
      <ContentsPreview contentList={activityContentDummy} />
    </div>
  );
};

export default Activity;
