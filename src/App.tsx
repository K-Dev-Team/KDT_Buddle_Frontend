import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TestBear from './components/pages/TestBear';
import TestPage from './components/pages/TestPage';
import Navigation from './components/templates/Navigation';

const App: React.FC = () => (
  <div className="App">
    <BrowserRouter>
      Hello Typescript!
      <Navigation />
      <Routes>
        <Route path="/testPage" element={<TestPage />} />
        <Route path="/testBear" element={<TestBear />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
