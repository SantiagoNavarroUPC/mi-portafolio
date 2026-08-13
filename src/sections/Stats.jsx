import React from 'react';
import Container from '../components/Container';
import GlassCard from '../components/GlassCard';
import StatCounter from '../components/StatCounter';

const stats = [
  { value: 5, label: 'Proyectos desarrollados' },
  { value: 2, label: 'Áreas de especialización' },
  { value: 5, label: 'Años de formación' },
  { value: 9, label: 'Certificaciones' },
];

export default function Stats() {
  return (
    <section id="estadisticas" className="scroll-mt-24 py-16">
      <Container>
        <GlassCard className="grid grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </GlassCard>
      </Container>
    </section>
  );
}
