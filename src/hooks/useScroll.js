import { useEffect, useState } from 'react';

// True once the page has scrolled past `threshold` pixels.
export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

// Returns the id of the section currently under the reading line (35% down the viewport).
// `ids` must be a stable array (e.g. defined at module level).
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const { scrollY, innerHeight } = window;
      const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(ids[ids.length - 1]);
        return;
      }
      const readingLine = innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= readingLine) current = id;
      }
      setActiveId(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids]);

  return activeId;
}
