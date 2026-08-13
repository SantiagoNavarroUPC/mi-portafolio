import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-mono text-4xl font-semibold text-ink-900 md:text-5xl dark:text-white">
        {display}
        <span className="text-brand-600 dark:text-brand-400">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{label}</p>
    </div>
  );
}
