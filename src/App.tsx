import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TestBear from './components/pages/TestBear';
import TestPage from './components/pages/TestPage';
import Navigation from './components/templates/Navigation';
import TestButton from './components/pages/TestButton';

const App: React.FC = () => (
  <div className="App">
    <BrowserRouter>
      Hello Typescript!
      <Navigation />
      <Routes>
        <Route path="/testPage" element={<TestPage />} />
        <Route path="/testBear" element={<TestBear />} />
        <Route path="/testButton" element={<TestButton />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
