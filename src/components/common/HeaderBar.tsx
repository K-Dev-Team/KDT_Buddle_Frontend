import React from 'react';
import styled, { css } from 'styled-components';

import HomeButton from './HomeButton';
import { ReactComponent as SearchIcon } from '../../icons/searchIcon.svg';

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
      padding: 22px 0px 17px 0px;
    `;
  }}
`;

const HeaderBar = () => {
  return (
    <HeaderBarWrap>
      <HomeButton />
      <SearchIcon width="19px" height="19px" />
    </HeaderBarWrap>
  );
};

export default HeaderBar;
