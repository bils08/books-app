import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';
import MainPage from './component/MainPage';
import DetailPage from './component/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={"/detail/:input"} element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
