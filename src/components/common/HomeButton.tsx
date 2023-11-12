import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeButtonStyle = styled.div`
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: 0.34px;
`;
function HomeButton() {
  return (
    <HomeButtonStyle>
      <Link to="/">Buddle</Link>
    </HomeButtonStyle>
  );
}

export default HomeButton;
