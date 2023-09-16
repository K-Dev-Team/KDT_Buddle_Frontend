import React from 'react';
import HomeButton from './HomeButton';
import { searchImage } from './images/imageComponents';

interface Props {
  styles?: React.CSSProperties;
}
const HeaderBar = () => {
  const search = searchImage();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: '55px 20px 0 20px',
      }}
    >
      <HomeButton />
      <div style={{ marginLeft: 'auto' }}>{search}</div>
    </div>
  );
};

export default HeaderBar;
