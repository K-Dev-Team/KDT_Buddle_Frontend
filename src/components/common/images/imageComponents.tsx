import HeartStraight from '../../../icons/HeartStraight.png';
import CaretDown from '../../../icons/CaretDown.png';
import SearchIcon from '../../../icons/SearchIcon.png';

import React from 'react';

export const heartImage = () => {
  return (
    <img
      src={HeartStraight}
      className="HeartStraight"
      alt="HeartStraight"
      style={{ width: '18px', height: '18px', marginLeft: 'auto' }}
    />
  );
};

export const downArrowImage = () => {
  return <img src={CaretDown} className="CaretDown" alt="CaretDown" style={{ width: '24px', height: '24px' }} />;
};

export const searchImage = () => {
  return <img src={SearchIcon} className="SearchIcon" alt="SearchIcon" style={{ width: '24px', height: '24px' }} />;
};
