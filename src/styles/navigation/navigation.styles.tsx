import styled, { css } from 'styled-components';

export const NavWrap = styled.nav`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      display: flex;
      flex-direction: row;
      position: fixed;
      bottom: 0;
      width: 320px;
      height: 74px;
      background-color: ${colors.white};
      align-items: center;
      font-size: ${fonts.size.xsm};
      & > a {
        flex: 1;
      }
    `;
  }}
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
