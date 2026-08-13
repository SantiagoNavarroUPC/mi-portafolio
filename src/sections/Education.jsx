import React from 'react';
import { motion } from 'framer-motion';
import { SiCisco, SiOracle } from 'react-icons/si';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import GlassCard from '../components/GlassCard';

const education = [
  {
    period: '2020 — 2025',
    title: 'Ingeniería en Sistemas',
    logo: '/assets/upc.png',
    logoAlt: 'Universidad Popular del Cesar logo',
    description:
      'Cursé la carrera de Ingeniería en Sistemas en la Universidad Popular del Cesar en Colombia, donde adquirí conceptos y herramientas relacionadas con el desarrollo de software y la tecnología.',
  },
  {
    period: '2022 — 2023',
    title: 'Técnico, SENA',
    logo: '/assets/sena.png',
    logoAlt: 'SENA logo',
    description:
      'Realicé dos programas técnicos en el Centro de Aprendizaje del SENA, centrado en el sector de la salud, donde adquirí habilidades en primeros auxilios, instrumentación y atención al cliente.',
  },
];

const certifications = [
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    Icon: SiCisco,
  },
  {
    title: 'Conceptos básicos de redes',
    issuer: 'Cisco Networking Academy',
    date: '14 abr 2023',
    Icon: SiCisco,
  },
  {
    title: 'CCNAv7: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: '12 jun 2023',
    Icon: SiCisco,
  },
  {
    title: 'Introducción a la Ciberseguridad',
    issuer: 'Cisco Networking Academy',
    date: '10 sep 2023',
    Icon: SiCisco,
  },
  {
    title: 'Seguridad de Terminales',
    issuer: 'Cisco Networking Academy',
    date: '27 nov 2023',
    Icon: SiCisco,
  },
  {
    title: 'Gestión de Amenazas Cibernéticas',
    issuer: 'Cisco Networking Academy',
    date: '27 nov 2023',
    Icon: SiCisco,
  },
  {
    title: 'Defensa de la red',
    issuer: 'Cisco Networking Academy',
    Icon: SiCisco,
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations I',
    issuer: 'Oracle',
    Icon: SiOracle,
  },
  {
    title: 'Oracle Cloud Infrastructure Foundations II',
    issuer: 'Oracle',
    Icon: SiOracle,
  },
];

export default function Education() {
  return (
    <section id="educacion" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <SectionHeading title="Educación" subtitle="Formación académica y técnica." />
        <div className="mt-12">
          <Timeline items={education} />
        </div>

        <h3 className="mt-16 font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
          Certificaciones
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {certifications.map(({ title, issuer, date, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard hover className="flex h-full flex-col gap-3 p-5">
                <Icon size={22} className="text-brand-600 dark:text-brand-400" />
                <p className="text-sm font-medium text-ink-900 dark:text-white">{title}</p>
                <p className="font-mono text-xs text-ink-500">{issuer}</p>
                {date && <p className="font-mono text-[11px] text-ink-400 dark:text-ink-500">{date}</p>}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
