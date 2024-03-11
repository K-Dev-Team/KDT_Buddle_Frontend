import { useEffect, useState } from 'react';
import * as S from '../../subStyleComponent/activity/ContentsPreviewStyle';
import { activityIcons } from '../../../icons/activityIcons';
import { useNavigate } from 'react-router-dom';
import { Contents } from '../../store/activity/activity_Store';

type Props = {
  contentList: Contents[];
};

const ContentsPreview = ({ contentList }: Props) => {
  const navi = useNavigate();
  return (
    <S.OutLinContainer>
      {contentList.map((item, index) => (
        <S.ContentsContainer
          key={index}
          onClick={() => {
            navi(`/activity/ActivityDetail/${item.unique}`);
          }}
        >
          <div style={{ position: 'relative' }}>
            <S.StatusContainer>{item?.status}</S.StatusContainer>
            <S.BookmarkContainer>
              {item?.bookmark ? activityIcons?.bookmarkYes?.icon : activityIcons?.bookmarkNo?.icon}
            </S.BookmarkContainer>
            <S.CoverContainer>{item?.cover}</S.CoverContainer>
          </div>
          <S.TitleContainer>{item?.title}</S.TitleContainer>
          <S.DateContainer>
            {item?.startDate} -{item?.endDate}
          </S.DateContainer>
          <S.LocationContainer>{item?.location}</S.LocationContainer>
        </S.ContentsContainer>
      ))}
    </S.OutLinContainer>
  );
};

export default ContentsPreview;
