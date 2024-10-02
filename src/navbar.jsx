import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="nav-links">
        <Link to="/" onClick={() => setMenuOpen(false)}>SOBRE MI</Link>
        <Link to="/experiencia" onClick={() => setMenuOpen(false)}>EXPERIENCIA</Link>
        <Link to="/estudios" onClick={() => setMenuOpen(false)}>ESTUDIOS</Link>
      </div>
    </nav>
  );
}
