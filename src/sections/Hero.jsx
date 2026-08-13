import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram, FaGoogle } from 'react-icons/fa';
import { ArrowDown, Download, BadgeCheck, Laptop } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import Badge from '../components/Badge';
import TerminalHero from '../components/TerminalHero';

const socials = [
  { href: 'https://github.com/SantiagoNavarroUPC', label: 'GitHub', Icon: FaGithub },
  { href: 'https://www.facebook.com/santiago.navarrocalderon', label: 'Facebook', Icon: FaFacebookF },
  {
    href: 'https://www.linkedin.com/in/santiago-navarro-calderón-b58b3b2ba',
    label: 'LinkedIn',
    Icon: FaLinkedinIn,
  },
  { href: 'https://www.instagram.com/santiagonavarro00', label: 'Instagram', Icon: FaInstagram },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=santiago12.na@gmail.com&su=Contact%20Me&body=Hola,%20me%20gustaría%20contactarte.',
    label: 'Gmail',
    Icon: FaGoogle,
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-300/20 blur-[120px] dark:bg-brand-700/20"
      />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink-900 md:text-5xl dark:text-white">
            Santiago Navarro Calderon
          </h1>
          <p className="mt-4 font-display text-xl font-medium tracking-tight text-brand-600 md:text-2xl dark:text-brand-400">
            Ingeniero de sistemas
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Badge variant="outline" className="py-1.5">
              <BadgeCheck size={13} className="text-brand-600 dark:text-brand-400" />
              Matrícula profesional 071122-0793084 CES
            </Badge>
            <Badge variant="outline" className="py-1.5">
              <Laptop size={13} className="text-brand-600 dark:text-brand-400" />
              Disponible: presencial y/o remoto
            </Badge>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button as="a" href="/assets/Hoja_de_vida.pdf" download="Hoja de Vida.pdf">
              <Download size={16} />
              Descargar CV
            </Button>
            <Button
              as="a"
              href="#proyectos"
              variant="ghost"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver proyectos
              <ArrowDown size={16} />
            </Button>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-ink-50 text-ink-600 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:text-brand-300 dark:focus-visible:ring-offset-ink-950"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative pb-10 pl-8 pr-2 pt-2 md:pl-14"
        >
          <TerminalHero />

          <div className="absolute -bottom-8 -left-6 w-32 -rotate-6 rounded-xl border border-white/10 bg-ink-900 p-1.5 shadow-2xl transition-transform duration-500 hover:rotate-0 sm:-left-10 sm:w-40 md:w-44">
            <div className="mb-1.5 flex items-center gap-1.5 px-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              <span className="font-mono text-[9px] text-ink-500">santiago.png</span>
            </div>
            <img
              src="/assets/foto.png"
              alt="Santiago Navarro Calderon"
              width="160"
              height="160"
              className="aspect-square w-full rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
