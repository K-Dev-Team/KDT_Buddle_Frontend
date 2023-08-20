import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HomeButton from './components/common/HomeButton';
import HomeHeader from './components/home/HomeHeader';
import TestBear from './components/pages/TestBear';
import TestButton from './components/pages/TestButton';
import TestMobx from './components/pages/TestMobx';
import TestRedux from './components/pages/TestRedux';
import Navigation from './components/templates/Navigation';
import GlobalStyles from './styles/GlobalStyle';
import AppLayout from './styles/Layout';
import LayoutBox from './styles/LayoutBox';
import theme from './styles/Theme';

const App: React.FC = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppLayout>
        <LayoutBox>
          <BrowserRouter>
            <HomeHeader />
            <Routes>
              <Route path="/testBear" element={<TestBear />} />
            </Routes>
          </BrowserRouter>
        </LayoutBox>
      </AppLayout>
    </ThemeProvider>
  </div>
);

export default App;
