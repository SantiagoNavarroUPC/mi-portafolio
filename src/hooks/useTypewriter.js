import { useEffect, useRef, useState } from 'react';

const REDUCED_MOTION =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function useTypewriter(lines, { speed = 26, linePause = 450, loopPause = 4000 } = {}) {
  const [shown, setShown] = useState(REDUCED_MOTION ? lines : []);
  const [caretLine, setCaretLine] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (REDUCED_MOTION) return undefined;

    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    const step = () => {
      if (cancelled) return;

      const currentLine = lines[lineIndex] ?? '';
      charIndex += 1;
      setCaretLine(lineIndex);
      setShown((prev) => {
        const next = prev.slice(0, lineIndex);
        next[lineIndex] = currentLine.slice(0, charIndex);
        return next;
      });

      if (charIndex >= currentLine.length) {
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex >= lines.length) {
          timeoutRef.current = setTimeout(() => {
            if (cancelled) return;
            lineIndex = 0;
            setShown([]);
            timeoutRef.current = setTimeout(step, speed);
          }, loopPause);
          return;
        }
        timeoutRef.current = setTimeout(step, linePause);
        return;
      }

      timeoutRef.current = setTimeout(step, speed);
    };

    timeoutRef.current = setTimeout(step, speed);

    return () => {
      cancelled = true;
      clearTimeout(timeoutRef.current);
    };
  }, [lines, speed, linePause, loopPause]);

  return { shownLines: shown, caretLine };
}
