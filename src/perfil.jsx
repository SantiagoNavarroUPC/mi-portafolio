import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGoogle } from 'react-icons/fa';

export default function Perfil() {
  return (
    <div className="sidebar">
      <div className="profile-container">
        <img
          src="../assets/foto.jpg"
          alt="Santiago Navarro Calderon"
          className="profile-pic"
        />
      </div>
      <h2>Santiago Navarro Calderon</h2>
      <a
        href="/assets/Hoja%20de%20Vida.pdf"
        download="Hoja_de_Vida.pdf"
        className="portfolio-text"
      >
        DESCARGAR HV
      </a>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/santiago.navarrocalderon"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-navarro-calderón-b58b3b2ba"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/santiagonavarro00"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=santiago12.na@gmail.com&su=Contact%20Me&body=Hola,%20me%20gustaría%20contactarte." target="_blank" rel="noopener noreferrer" aria-label="Gmail">
          <FaGoogle />
        </a>
      </div>
    </div>
  );
}
