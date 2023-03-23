
import React from 'react';
import Home from './pages/home';
import Menu from './components/menu';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
