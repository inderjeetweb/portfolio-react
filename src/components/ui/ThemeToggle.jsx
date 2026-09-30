import { AnimatePresence, m } from 'framer-motion';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line bg-surface/70 text-muted transition duration-300 ease-out hover:border-accent/50 hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={theme}
          className="flex"
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {isDark ? <HiOutlineSun className="h-5 w-5" /> : <HiOutlineMoon className="h-5 w-5" />}
        </m.span>
      </AnimatePresence>
    </button>
  );
}
