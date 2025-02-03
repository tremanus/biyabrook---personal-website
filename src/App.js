import './App.css';
import React from 'react';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </>
)

export default App;
