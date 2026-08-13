import React from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiFlutter, SiFirebase, SiMongodb, SiPython, SiMysql } from 'react-icons/si';
import { Smartphone, LineChart, ClipboardList, Repeat2 } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';

const groups = [
  {
    group: 'Desarrollo',
    items: [
      { label: 'HTML', Icon: SiHtml5 },
      { label: 'CSS', Icon: SiCss3 },
      { label: 'JavaScript', Icon: SiJavascript },
      { label: 'React', Icon: SiReact },
      { label: 'React Native', Icon: Smartphone },
      { label: 'Flutter', Icon: SiFlutter },
    ],
  },
  {
    group: 'Datos',
    items: [
      { label: 'SQL', Icon: SiMysql },
      { label: 'MongoDB', Icon: SiMongodb },
      { label: 'Python', Icon: SiPython },
      { label: 'R', Icon: LineChart },
    ],
  },
  {
    group: 'Gestión',
    items: [
      { label: 'Requerimientos', Icon: ClipboardList },
      { label: 'Metodologías ágiles', Icon: Repeat2 },
      { label: 'Firebase', Icon: SiFirebase },
    ],
  },
];

export default function Stack() {
  const allItems = groups.flatMap((g) => g.items.map((item) => ({ ...item, group: g.group })));

  return (
    <section id="tecnologia" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Tecnología"
          subtitle="Herramientas y lenguajes que uso para llevar una idea de bosquejo a producto funcionando."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {allItems.map(({ label, Icon, group }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard hover className="flex h-full flex-col items-center gap-3 p-5 text-center">
                <Icon size={26} className="text-brand-600 dark:text-brand-400" />
                <span className="text-sm font-medium text-ink-900 dark:text-white">{label}</span>
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink-500">
                  {group}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
