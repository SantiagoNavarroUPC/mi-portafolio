import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Target, Languages } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';

const facts = [
  { Icon: MapPin, label: 'Ubicación', value: 'Valledupar, Colombia' },
  { Icon: GraduationCap, label: 'Formación', value: 'Ing. de Sistemas, UPC' },
  { Icon: Target, label: 'Enfoque', value: 'Software & datos' },
  {
    Icon: Languages,
    label: 'Idiomas',
    value: ['Español: Nativo', 'Inglés: Intermedio (lectura técnica y conversación básica)'],
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <SectionHeading title="Sobre mí" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[68ch] space-y-4 text-justify text-base leading-relaxed text-ink-600 md:text-lg dark:text-ink-300"
          >
            <p>
              Soy ingeniero de sistemas con experiencia en el desarrollo de aplicaciones web y
              móviles, gestión de proyectos y análisis de datos. Me especializo en crear
              soluciones digitales que mejoren la vida de las personas.
            </p>
            <p>
              Manejo bases de datos relacionales y no relacionales, y tengo conocimientos en
              infraestructura cloud, especialmente en Oracle Cloud Infrastructure (OCI). Me
              apasiona transformar ideas en productos funcionales y eficientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="grid grid-cols-2 gap-5 p-6">
              {facts.map(({ Icon, label, value }) => (
                <div key={label}>
                  <Icon size={18} className="text-brand-600 dark:text-brand-400" />
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-500">
                    {label}
                  </p>
                  {Array.isArray(value) ? (
                    value.map((line) => (
                      <p key={line} className="mt-0.5 text-sm font-medium text-ink-900 dark:text-white">
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="mt-0.5 text-sm font-medium text-ink-900 dark:text-white">{value}</p>
                  )}
                </div>
              ))}
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
