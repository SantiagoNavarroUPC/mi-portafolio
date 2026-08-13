import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import useActiveSection from '../hooks/useActiveSection';
import useTheme from '../hooks/useTheme';
import Container from './Container';
import Button from './Button';

const LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'tecnologia', label: 'Tecnología' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'educacion', label: 'Educación' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(LINKS.map((link) => link.id));
  const { theme, toggleTheme } = useTheme();

  const handleNavigate = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const themeToggleButton = (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-300 text-ink-700 transition-colors hover:border-brand-400/50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-white/10 dark:text-white dark:hover:text-brand-300"
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ink-200 bg-white/70 backdrop-blur-md dark:border-white/5 dark:bg-ink-950/70">
        <Container className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleNavigate('inicio')}
            className="font-display text-sm font-semibold uppercase tracking-wide text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white dark:focus-visible:ring-offset-ink-950"
          >
            Santiago<span className="text-brand-500 dark:text-brand-400">.</span>Navarro
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand-500 after:transition-all after:duration-300 focus-visible:outline-none dark:after:bg-brand-400 ${
                  activeId === link.id
                    ? 'text-ink-900 after:w-full dark:text-white'
                    : 'text-ink-500 after:w-0 hover:text-ink-900 hover:after:w-full dark:text-ink-300 dark:hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {themeToggleButton}
            <Button as="button" variant="ghost" className="px-5 py-2" onClick={() => handleNavigate('contacto')}>
              Contactar
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {themeToggleButton}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-300 text-ink-900 dark:border-white/10 dark:text-white"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Rendered as a sibling of <header>, never a descendant: a backdrop-blur
          ancestor becomes the containing block for position:fixed children and
          breaks full-viewport overlays like this one. */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-white dark:bg-ink-950 lg:hidden"
          >
            <Container className="flex h-full flex-col justify-center gap-2 pb-20 pt-16">
              {LINKS.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                  onClick={() => handleNavigate(link.id)}
                  className={`rounded-lg px-3 py-3 text-left font-display text-2xl font-medium tracking-tight transition-colors ${
                    activeId === link.id
                      ? 'text-ink-900 dark:text-white'
                      : 'text-ink-400 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <Button as="button" className="mt-4 w-fit" onClick={() => handleNavigate('contacto')}>
                Contactar
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
