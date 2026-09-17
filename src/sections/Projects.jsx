import React, { useMemo, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Badge from '../components/Badge';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import PROJECTS from '../data/projects.json';

const FILTERS = [
  { key: 'todos', label: 'Todos' },
  { key: 'programacion', label: 'Programación' },
  { key: 'analisis', label: 'Análisis de datos' },
];

export default function Projects() {
  const [filter, setFilter] = useState('todos');
  const [activeProject, setActiveProject] = useState(null);

  const visibleProjects = useMemo(
    () => (filter === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="proyectos" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Proyectos"
          subtitle="Una muestra de trabajo en desarrollo de software y análisis de datos."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className="focus-visible:outline-none"
            >
              <Badge
                variant={filter === item.key ? 'active' : 'outline'}
                className="cursor-pointer px-4 py-1.5 transition-colors"
              >
                {item.label}
              </Badge>
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onOpen={setActiveProject} />
          ))}
        </div>
      </Container>

      <Modal open={Boolean(activeProject)} onClose={() => setActiveProject(null)}>
        {activeProject && (
          <div>
            <Badge variant="outline">{activeProject.categoryLabel}</Badge>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
              {activeProject.title}
            </h3>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="mt-4 w-full rounded-xl bg-ink-100 object-contain dark:bg-ink-950"
            />
            <p className="mt-4 text-justify text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              {activeProject.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {activeProject.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            {activeProject.repoLink && (
              <a
                href={activeProject.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
              >
                Ver repositorio
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
