import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TestPage from './components/pages/TestPage';
import Navigation from './components/templates/Navigation';

const App: React.FC = () => {
  return (
      <div className="App">
        <BrowserRouter>
          Hello Typescript!
          <Navigation /> 
          <Routes>
            <Route path='/testPage' element={<TestPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;