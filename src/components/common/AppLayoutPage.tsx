import React from 'react';

import HeaderBar from './HeaderBar';
import AppLayout from '../../styles/Layout';
import LayoutBox from '../../styles/LayoutBox';
import Routing from '../routes/Routing';

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
