import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize2 } from 'lucide-react';
import GlassCard from './GlassCard';
import Badge from './Badge';

export default function ProjectCard({ project, onOpen, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassCard hover className="group flex h-full flex-col overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-44 w-full bg-ink-100 object-contain p-4 transition-transform duration-500 group-hover:scale-105 dark:bg-ink-950"
          />
          <Badge variant="outline" className="absolute left-3 top-3">
            {project.categoryLabel}
          </Badge>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-brand-300 dark:hover:text-brand-200 dark:focus-visible:ring-offset-ink-900"
            >
              <Maximize2 size={14} />
              Ver detalle
            </button>
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositorio de ${project.title}`}
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:border-brand-400/50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-white/10 dark:text-ink-300 dark:hover:text-brand-300"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
