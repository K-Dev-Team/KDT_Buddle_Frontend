import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
      Hello Typescript!
          <Navigation />
          <Routes>
            <Route path="/testBear" element={<TestBear />} />
            <Route path="/testButton" element={<TestButton />} />
            <Route path="/testMobx" element={<TestMobx />} />
            <Route path="/testRedux" element={<TestRedux />} />
          </Routes>
        </BrowserRouter>
      </LayoutBox>
    </AppLayout>
  </div>
);

export default App;
