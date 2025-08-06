import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Iniciosesion from './components/Iniciosesion';
import Actas from './components/Actas';
import Navbar from './components/navbar';

const AppWrapper = () => {
  const location = useLocation();
  const mostrarNavbar = location.pathname === '/actas';
  return (
    <>
      {mostrarNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Iniciosesion />} />
        <Route path="/actas" element={<Actas />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
