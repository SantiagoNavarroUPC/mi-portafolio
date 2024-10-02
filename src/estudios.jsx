import React from 'react';
import './estudios.css';

export default function Estudios() {
  return (
    <div className="main-content">
      <h1>Educación</h1>
      <div className="education-container"> {/* Contenedor para tarjetas */}
        <div className="education-card">
          <div className="education-header">
            <img
              src='/assets/upc.png'
              alt="Universidad Popular del Cesar logo"
              className="education-logo"
            />
            <h3>2020 - Actual</h3>
            <h4>INGENIERÍA EN SISTEMAS</h4>
          </div>
          <div className="education-body">
            <p>
              Estudio la carrera de Ingeniería en Sistemas en la Universidad
              Popular del Cesar en Colombia. Donde adquiero importantes conceptos y
              herramientas relacionadas con el desarrollo de software y la
              tecnología.
            </p>
          </div>
        </div>
        <div className="education-card">
          <div className="education-header">
            <img
              src='/assets/sena.png'
              alt="SENA logo"
              className="education-logo"
            />
            <h3>2022-2023</h3>
            <h4>TÉCNICO</h4>
          </div>
          <div className="education-body">
            <p>
              Realicé dos programas técnicos en el Centro de Aprendizaje del SENA, centrado en el sector de la salud, donde adquirí habilidades en primeros auxilios, 
              instrumentación y atención al cliente. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
