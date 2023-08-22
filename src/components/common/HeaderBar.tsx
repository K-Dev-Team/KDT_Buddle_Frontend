import React from 'react';

import HomeButton from './HomeButton';
import searchIcon from '../../icons/searchIcon.jpg';

const HeaderBar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
      <HomeButton />
      <img
        src={searchIcon}
        className="searchIcon"
        alt="searchIcon"
        style={{ width: '24px', height: '24px', flexShrink: 0 }}
      />
    </div>
  );
};

export default HeaderBar;
