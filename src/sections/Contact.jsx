import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import Container from '../components/Container';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard className="relative overflow-hidden px-6 py-14 text-center md:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-300/25 blur-[100px] dark:bg-brand-600/25"
            />
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl dark:text-white">
              ¿Trabajamos juntos?
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-base text-ink-600 md:text-lg dark:text-ink-300">
              Estoy abierto a proyectos, contratos y colaboraciones en desarrollo de software y
              análisis de datos. Escribime y hablamos.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                as="a"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=santiago12.na@gmail.com&su=Contact%20Me&body=Hola,%20me%20gustaría%20contactarte."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={16} />
                Escríbeme
              </Button>
              <Button as="a" href="/assets/Hoja_de_vida.pdf" download="Hoja de Vida.pdf" variant="ghost">
                <Download size={16} />
                Descargar CV
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
