
import React from 'react';
import Home from './pages/home/index';
import Journey from './pages/Journey/index';
import Skills from './pages/Skills';
import Menu from './components/menu';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/Journey" element={<Journey />}> </Route>
        <Route path="/Skills" element={<Skills />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
