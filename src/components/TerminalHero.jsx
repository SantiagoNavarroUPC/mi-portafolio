import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';

const CODE_LINES = [
  'const developer = {',
  "  name: 'Santiago Navarro',",
  "  role: 'Ingeniero de sistemas',",
  "  focus: ['web', 'mobile', 'datos'],",
  "  status: 'disponible_para_proyectos',",
  '};',
  '',
  '// desplegando portafolio...',
  '✓ build completado en 842ms',
];

function renderLine(line) {
  if (line.startsWith('//')) {
    return <span className="text-ink-500 italic">{line}</span>;
  }
  if (line.startsWith('✓')) {
    return (
      <span className="inline-flex items-center gap-1.5 text-brand-300">
        <CheckCircle2 size={13} className="shrink-0" />
        {line.slice(2)}
      </span>
    );
  }

  const match = line.match(/^(\s*)([\w[\]']+)(:?)(.*)$/);
  if (!match) return <span className="text-ink-200">{line}</span>;
  const [, indent, key, colon, rest] = match;

  return (
    <>
      <span>{indent}</span>
      <span className={colon ? 'text-brand-300' : 'text-ink-200'}>{key}</span>
      {colon && <span className="text-ink-500">:</span>}
      <span className="text-ink-100">{rest}</span>
    </>
  );
}

export default function TerminalHero() {
  const { shownLines, caretLine } = useTypewriter(CODE_LINES);
  const lines = shownLines.length ? shownLines : CODE_LINES;

  return (
    <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-2xl backdrop-blur-sm">
      <div
        aria-hidden="true"
        className="motion-safe:animate-glow-pulse pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-brand-500/15 blur-3xl"
      />

      <div className="relative flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
        <span className="ml-2 font-mono text-xs text-ink-400">portafolio.dev — zsh</span>
      </div>

      <pre className="relative min-h-[220px] overflow-hidden px-5 py-6 font-mono text-[13px] leading-6 md:text-sm">
        {CODE_LINES.map((original, index) => (
          <div key={index} className="min-h-[1.5em]">
            {renderLine(lines[index] ?? '')}
            {index === caretLine && lines.length <= CODE_LINES.length && (
              <span className="animate-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-0.5 bg-brand-400 align-middle" />
            )}
          </div>
        ))}
      </pre>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative flex flex-wrap items-center gap-3 border-t border-white/10 bg-white/[0.02] px-4 py-3"
      >
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-300">
          <Circle size={8} className="animate-glow-pulse fill-brand-400 text-brand-400" />
          sistema en línea
        </span>
        <span className="font-mono text-xs text-ink-500">5 proyectos · 2 áreas de enfoque</span>
      </motion.div>
    </div>
  );
}
