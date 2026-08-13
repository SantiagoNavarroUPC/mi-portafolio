import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function FloatingBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver arriba"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white/90 text-brand-600 shadow-lg backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-white/10 dark:bg-ink-800/90 dark:text-brand-300 dark:hover:text-brand-200"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
