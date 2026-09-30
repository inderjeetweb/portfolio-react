import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

// The browser UI colour (mobile address bar) follows the page background token.
const canvasColor = () =>
  `rgb(${getComputedStyle(document.documentElement).getPropertyValue('--color-canvas').trim()})`;

// public/index.html applies the saved theme before first paint (dark by default),
// so the initial state is read straight from the <html> element.
const readTheme = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

export function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', canvasColor());
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage can be unavailable (private mode, blocked cookies); the toggle still works.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
