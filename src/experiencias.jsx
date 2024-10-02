import React, { useState } from 'react';
import './experiencias.css';

export default function Experiencias() {
  const [activeTab, setActiveTab] = useState('programacion');

  const programacionProjects = [
    {
      title: "Upon Delivery",
      description: "El Software para la gestión de pedidos, liderado por Santiago Navarro y respaldado por la Universidad Popular del Cesar, tiene como objetivo gestionar los productos de cualquier sucursal de almacenes de cadena",
      tags: ["PHP", "MySQL"],
      image: "/assets/upondelivery.png"
    },
    {
      title: "GELATO",
      description: "El proyecto móvil para la gestión de Popsy, liderado por Santiago Navarro y respaldado por la Universidad Popular del Cesar, tiene como objetivo desarrollar una aplicación innovadora que mejore la experiencia tanto para los clientes como para el equipo.",
      tags: ["Flutter", "Firebase"],
      image: "/assets/gelato.png"
    }
  ];

  const analisisProjects = [
    {
      title: "Bodega de datos Demo.dwh",
      description: "El dashboard desarrollado permite un análisis detallado de las ventas de 2008 a 2016, enfocándose en KPI claves.",
      tags: ["Python", "PowerBi", "Talend","Oracle BD"],
      image: "/assets/BDdemo.png"
    },
    {
      title: "Modelo de Calidad del aire",
      description: "Se implementó un tratamiento exhaustivo de datos para mejorar la calidad de la información sobre la medición de la calidad del aire.",
      tags: ["Python", "Spark", "TensorFlow","Mongo DB","JavaScript"],
      image: "/assets/aire.png"

    }
  ];

  const currentProjects = activeTab === 'programacion' ? programacionProjects : analisisProjects;

  return (
    <div className="main-content">
      <h1>Experiencia</h1>
      <section className="projects">
        <div className="buttons">
          <button 
            className={`btn ${activeTab === 'programacion' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('programacion')}
          >
            PROGRAMACIÓN
          </button>
          <button 
            className={`btn ${activeTab === 'analisis' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('analisis')}
          >
            ANÁLISIS DE DATOS
          </button>
        </div>
        <div className="project-grid">
          {currentProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}