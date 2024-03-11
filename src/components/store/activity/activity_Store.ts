import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export type Contents = {
  unique: number;
  status: string;
  bookmark: boolean;
  cover: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
};

export const activityContentDummy = [
  {
    unique: 0,
    status: '진행중',
    bookmark: false,
    cover: '이미지경로',
    title: '비체올린 능소화 축제ssssssssssss',
    startDate: '20230531',
    endDate: '20230731',
    location: '제주도 제주시',
  },
  {
    unique: 1,
    status: '종료',
    bookmark: true,
    cover: '이미지경로',
    title: '스누피가든',
    startDate: '20230531',
    endDate: '20230731',
    location: '제주도 제주시',
  },
  {
    unique: 3,
    status: '진행중',
    bookmark: true,
    cover: '이미지경로',
    title: '이것저것 여러것',
    startDate: '20230531',
    endDate: '20230731',
    location: '제주도 제주시',
  },
  {
    unique: 4,
    status: '진행중',
    bookmark: false,
    cover: '이미지경로',
    title: '이것저것 여러것',
    startDate: '20230531',
    endDate: '20230731',
    location: '제주도 제주시',
  },
  {
    unique: 5,
    status: '진행중',
    bookmark: false,
    cover: '이미지경로',
    title: '이것저것 여러것',
    startDate: '20230531',
    endDate: '20230731',
    location: '제주도 제주시',
  },
  {
    unique: 6,
    status: '진행중',
    bookmark: true,
    cover: '이미지경로',
    title: '이것저것 여러것',
    startDate: '20230531',
    endDate: '20230731',
    location: '제주도 제주시',
  },
  {
    unique: 7,
    status: '진행중',
    bookmark: false,
    cover: '이미지경로',
    title: '이것저것 여러것',
    startDate: '20230531',
    endDate: '20230731',
    location: '제주도 제주시',
  },
  {
    unique: 8,
    status: '진행중',
    bookmark: true,
    cover: '이미지경로',
    title: '이것저것 여러것',
    startDate: '20230531',
    endDate: '20230731',
    location: '제주도 제주시',
  },
  {
    unique: 9,
    status: '진행중',
    bookmark: false,
    cover: '이미지경로',
    title: '이것저것 여러것',
    startDate: '20230531',
    endDate: '20230731',
    location: '제주도 제주시',
  },
];

export const useActivity = () => {
  const [detail, setDetail] = useState<Contents>();
  const { unique } = useParams();

  useEffect(() => {
    const detailItem: any = activityContentDummy.find((item) => {
      return item.unique.toString() === unique;
    });
    setDetail(detailItem);
  }, []);

  const state = { detail };
  const actions = {};
  const variables = {};
  return { ...state, actions, variables };
};
