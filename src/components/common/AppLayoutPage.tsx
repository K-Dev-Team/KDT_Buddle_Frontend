import React from 'react';
import styled from 'styled-components';

import HeaderBar from './HeaderBar';
import Routing from '../routes/Routing';

const AppLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const LayoutBox = styled.div`
  width: 320px;
  height: 100vh;
  background-color: orange;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  position: relative;
`;

const AppLayoutPage = () => {
  return (
    <AppLayout>
      <LayoutBox>
        {/* <HeaderBar /> */}
        <Routing />
      </LayoutBox>
    </AppLayout>
  );
};

export default AppLayoutPage;
