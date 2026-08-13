import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-ink-200 bg-white p-6 shadow-2xl md:p-8 dark:border-white/10 dark:bg-ink-900"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-ink-50 text-ink-600 transition-colors hover:border-brand-400/50 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:text-white"
            >
              <X size={16} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
