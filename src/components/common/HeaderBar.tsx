import React from 'react';
<<<<<<< HEAD
import HomeButton from './HomeButton';
import { searchImage } from './images/imageComponents';

interface Props {
  styles?: React.CSSProperties;
}
=======
import styled, { css } from 'styled-components';

import HomeButton from './HomeButton';
import { ReactComponent as SearchIcon} from '../../icons/searchIcon.svg';

const HeaderBarWrap = styled.header`
${({ theme }) => {
    const { colors } = theme;
    return css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: 24px;
    align-items: center;
    background-color: ${colors.white};
  `;
  }}
`;
  
>>>>>>> develop
const HeaderBar = () => {
  const search = searchImage();

  return (
<<<<<<< HEAD
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
=======
    <HeaderBarWrap>
      <HomeButton />
      <SearchIcon width="19px" height="19px" />
    </HeaderBarWrap>
>>>>>>> develop
  );
};

export default HeaderBar;
