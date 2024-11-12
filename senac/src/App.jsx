import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilterPage from './pages/FilterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filter" element={<FilterPage />} />
    </Routes>
  );
}

export default App;