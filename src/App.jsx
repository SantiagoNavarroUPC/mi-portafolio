import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Perfil from './perfil';
import Home from './home';
import Estudios from './estudios';
import Experiencias from './experiencias';
import './App.css';
import './estudios.css';
import './experiencias.css';


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main className="content">
          <Perfil />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudios" element={<Estudios />} />
            <Route path="/experiencia" element={<Experiencias />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
