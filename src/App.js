import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Test from "./Pages/Test";
import CheckHeart from "./Pages/CheckHeart";
import CheckSugar from "./Pages/CheckSugar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test />} />
          <Route path="/checkHeart" element={<CheckHeart/>} />
          <Route path="/checkSugar" element={<CheckSugar/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
