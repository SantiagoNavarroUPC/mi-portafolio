import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingBackToTop from './components/FloatingBackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Stack from './sections/Stack';
import Stats from './sections/Stats';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white transition-colors duration-300 dark:bg-ink-950">
      {/* Soft green accents so light mode doesn't read as flat white; hidden in
          dark mode, where the near-black base already carries enough depth. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-[4%] h-[380px] w-[380px] rounded-full bg-brand-200/35 blur-[110px] dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] top-[24%] h-[460px] w-[460px] rounded-full bg-brand-300/30 blur-[130px] dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6%] top-[50%] h-[420px] w-[420px] rounded-full bg-brand-200/45 blur-[110px] dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] top-[68%] h-[400px] w-[400px] rounded-full bg-brand-300/30 blur-[120px] dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-[86%] h-[440px] w-[440px] rounded-full bg-brand-200/35 blur-[130px] dark:hidden"
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Stats />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <FloatingBackToTop />
    </div>
  );
}
