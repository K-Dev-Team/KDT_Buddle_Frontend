import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TestPage from "./components/pages/TestPage";
import Navigation from "./components/templates/Navigation";
import { useTests } from "./components/store/useMain";

const App: React.FC = () => {
  const useTest: any = useTests();
  return (
    <div className="App">
      <BrowserRouter>
        Hello Typescript!
        <div>
          Store Test
          {useTest.bears.state}
          <button onClick={useTest.bears.increase}>plus</button>
          <button onClick={useTest.bears.remove}>remove</button>
        </div>
        <Navigation />
        <Routes>
          <Route path="/testPage" element={<TestPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
