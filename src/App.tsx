import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeButton from './components/common/HomeButton';
import HomeHeader from './components/home/HomeHeader';
import TestBear from './components/pages/TestBear';
import TestButton from './components/pages/TestButton';
import TestMobx from './components/pages/TestMobx';
import TestRedux from './components/pages/TestRedux';
import Navigation from './components/templates/Navigation';
import AppLayout from './styles/Layout';
import LayoutBox from './styles/LayoutBox';

const App: React.FC = () => (
  <div className="App">
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
  </div>
);

export default App;
