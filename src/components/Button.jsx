import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-brand-500 text-ink-950 shadow-[0_0_30px_-8px_rgba(23,160,106,0.7)] hover:bg-brand-400 hover:shadow-[0_0_40px_-6px_rgba(23,160,106,0.85)]',
  ghost:
    'border border-ink-300 bg-ink-50 text-ink-800 hover:border-brand-500/50 hover:bg-ink-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-brand-400/50 dark:hover:bg-white/10',
};

export default function Button({
  children,
  variant = 'primary',
  as: Tag = 'button',
  className = '',
  ...props
}) {
  const MotionTag = motion(Tag);
  return (
    <MotionTag
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-ink-950 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
