import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function Timeline({ items }) {
  return (
    <div className="relative ml-3 space-y-10 border-l border-ink-200 pl-8 dark:border-white/10">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-500 bg-white dark:bg-ink-950">
            <span className="h-2 w-2 rounded-full bg-brand-400" />
          </span>

          <GlassCard className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start">
            {item.logo && (
              <img
                src={item.logo}
                alt={item.logoAlt}
                className="h-12 w-12 flex-none rounded-lg bg-ink-50 object-contain p-1.5 dark:bg-white/5"
              />
            )}
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-brand-600 dark:text-brand-400">
                {item.period}
              </p>
              <h3 className="mt-1 text-base font-semibold text-ink-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {item.description}
              </p>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
