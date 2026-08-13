import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-ink-600 md:text-lg dark:text-ink-300">{subtitle}</p>}
    </motion.div>
  );
}
