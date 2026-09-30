// Shared Framer Motion variants: short, ease-out, and never looping.
export const easeOut = [0.22, 1, 0.36, 1];

// `custom` sets a delay for standalone elements. It's omitted (not 0) otherwise,
// because an explicit child delay would override a parent's staggerChildren.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut, ...(delay ? { delay } : {}) },
  }),
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

// Trigger once, shortly after the element's top edge enters the viewport.
// A margin (rather than an `amount`) keeps very tall elements from never triggering.
export const viewportOnce = { once: true, margin: '0px 0px -80px 0px' };
