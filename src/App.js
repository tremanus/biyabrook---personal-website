import './App.css';
import React from 'react';
import Home from './components/home';
import Espn from './components/espn';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/espn" element={<Espn />} />
  </Routes>
  </>
)

export default App;
