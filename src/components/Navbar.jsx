import { AnimatePresence, m } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { navLinks, profile } from '../data/content';
import { useScrolled, useScrollSpy } from '../hooks/useScroll';
import { useTheme } from '../hooks/useTheme';
import Container from './ui/Container';
import ThemeToggle from './ui/ThemeToggle';

const sectionIds = navLinks.map((link) => link.id);
const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('');

export default function Navbar() {
  const scrolled = useScrolled();
  const activeId = useScrollSpy(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close the mobile menu on Escape, outside clicks, or when resizing up to desktop.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onBreakpoint = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-line/70 bg-canvas/75 backdrop-blur-xl backdrop-saturate-150' : 'border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5 whitespace-nowrap rounded-lg font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-solid text-sm font-bold text-accent-on transition-transform duration-300 ease-out group-hover:scale-105"
          >
            {initials}
          </span>
          <span className="text-[15px]">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active ? 'true' : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                      active ? 'bg-accent/10 text-accent' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/70 text-fg transition-colors duration-300 hover:border-accent/50 hover:text-accent lg:hidden"
          >
            {menuOpen ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <m.nav
            id="mobile-menu"
            aria-label="Mobile"
            className="border-t border-line/70 lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Container as="ul" className="flex flex-col gap-1 py-3">
              {navLinks.map((link) => {
                const active = activeId === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? 'true' : undefined}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors duration-300 ${
                        active ? 'bg-accent/10 text-accent' : 'text-fg hover:bg-surface'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </Container>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
