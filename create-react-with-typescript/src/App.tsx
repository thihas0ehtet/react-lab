import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './routes/home';
import About from './routes/about';

function App() {
  return (
    <BrowserRouter>
      <h1 className='text-center my-5'>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
