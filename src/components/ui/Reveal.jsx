import { m, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion';

// Fades and slides an element up the first time it scrolls into view.
// With reduced motion, `initial={false}` renders everything in its final state.
export function Reveal({ as = 'div', delay, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const Component = m[as];

  return (
    <Component
      variants={fadeUp}
      custom={delay}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </Component>
  );
}

// Staggers its RevealItem children in as the group scrolls into view.
export function RevealGroup({ as = 'div', stagger = 0.08, delay = 0, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const variants = useMemo(() => staggerContainer(stagger, delay), [stagger, delay]);
  const Component = m[as];

  return (
    <Component
      variants={variants}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ as = 'div', variants = fadeUp, children, ...rest }) {
  const Component = m[as];

  return (
    <Component variants={variants} {...rest}>
      {children}
    </Component>
  );
}
