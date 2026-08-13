import React from 'react';

const variants = {
  solid:
    'border-brand-300 bg-brand-50 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/15 dark:text-brand-300',
  outline: 'border-ink-300 bg-ink-50 text-ink-700 dark:border-white/15 dark:bg-white/5 dark:text-ink-200',
  active: 'border-brand-500 bg-brand-500 text-ink-950',
};

export default function Badge({ children, variant = 'solid', className = '', as: Tag = 'span', ...props }) {
  return (
    <Tag
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
