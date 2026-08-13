import React from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';

const experience = [
  {
    period: 'Ago 2024 — Abr 2025',
    title: 'Practicante Universitario — Universidad Popular del Cesar',
    logo: '/assets/upc.png',
    logoAlt: 'Universidad Popular del Cesar logo',
    description:
      'Durante la práctica profesional participé en el desarrollo de "Arcadia", un aplicativo web orientado al aseguramiento de la calidad, enfocado en satisfacer las necesidades operativas del área correspondiente. Mi labor se centró en el análisis, diseño e implementación del sistema, aplicando buenas prácticas de desarrollo y garantizando un alto nivel técnico. El proyecto contribuyó a la optimización de procesos internos, generando impacto positivo y reconocimiento por parte del equipo.',
  },
  {
    period: 'Ene 2025 — Dic 2025',
    title: 'Auxiliar de Sistemas — Dusakawi EPSI',
    logo: '/assets/dusakawi.png',
    logoAlt: 'Dusakawi EPSI logo',
    description:
      'Prestación de servicios como desarrollador para el diseño, desarrollo, implementación, mantenimiento y mejora continua del sistema de información ArwiySoft, así como de otros sistemas tecnológicos internos de Dusakawi EPSI. Las funciones incluyeron soporte técnico especializado, automatización de procesos, integración de módulos y aseguramiento de la calidad en entornos productivos.',
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <SectionHeading title="Experiencia" subtitle="Experiencia de trabajo profesional." />
        <div className="mt-12">
          <Timeline items={experience} />
        </div>
      </Container>
    </section>
  );
}
