import { useState, useEffect, useCallback } from 'react';

/**
 * Gerencia o tema claro/escuro de forma isolada.
 * O switch é instantâneo (sem transição de cor) para evitar jank —
 * as transições de hover/focus dos componentes continuam funcionando normalmente.
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const dark = saved === 'dark' || (!saved && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      const root = document.documentElement;

      // Desabilita transições durante o switch → switch instantâneo, sem jank
      root.classList.add('theme-switching');
      root.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');

      // Dois rAF garantem que o browser pintou antes de re-habilitar transições
      requestAnimationFrame(() =>
        requestAnimationFrame(() => root.classList.remove('theme-switching'))
      );

      return next;
    });
  }, []);

  return { isDark, toggle };
}
