import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="main-content">
      <h1>Bienvenidos</h1>
      <h3>Mi Sitio Personal</h3>
      <div className="buttons">
        <button 
          className={`btn ${activeTab === 'experience' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('experience')}
        >
          EXPERIENCIA
        </button>
        <button 
          className={`btn ${activeTab === 'skills' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('skills')}
        >
          HABILIDADES
        </button>
      </div>

      {activeTab === 'experience' && (
        <div id="experiencia">
          <p>
            Mi nombre es Santiago Navarro Calderon, soy estudiante de ingeniería de sistemas. Me apasiona crear soluciones digitales que faciliten la vida de las personas.
          </p>
          <p>
            Me especializo en el diseño y desarrollo de aplicaciones web y móviles, gestor y análisis de datos, desempeño otras funciones como la gestión de proyectos. Aquí podrás encontrar algunos de mis proyectos y experiencias más recientes. Si estás interesado en trabajar juntos, no dudes en contactarme. ¡Gracias por visitar mi sitio personal!
          </p>
        </div>
      )}

      {activeTab === 'skills' && (
        <div id="habilidades">
          <ul>
            <li>Desarrollo web (HTML, CSS, JavaScript, React)</li>
            <li>Desarrollo móvil (React Native, flutter)</li>
            <li>Gestión de bases de datos (SQL, MongoDB)</li>
            <li>Análisis de datos (Python, R)</li>
            <li>Gestión de proyectos (Ingenieria de requerimientos, Metodologias Agiles)</li>
          </ul>
        </div>
      )}
    </div>
  );
}
