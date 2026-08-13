import React from 'react';

export default function GlassCard({ children, className = '', hover = false, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`rounded-2xl border border-ink-200 bg-ink-50/70 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-md dark:hover:border-brand-500/40 dark:hover:bg-white/[0.06] dark:hover:shadow-[0_0_40px_-12px_rgba(23,160,106,0.45)]'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
