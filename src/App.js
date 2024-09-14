import './App.css';
import React from 'react';
import Home from './components/home';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </>
)

export default App;
