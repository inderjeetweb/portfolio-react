import { useReducedMotion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';

// Screen readers get the full list once; the animated text is hidden from them.
export default function Typewriter({ words }) {
  const reduceMotion = useReducedMotion();
  const text = useTypewriter(words, { enabled: !reduceMotion });

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>{' '}
      <span aria-hidden="true">
        {text}
        {!reduceMotion && (
          <span className="ml-1 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] animate-caret rounded-full bg-accent" />
        )}
      </span>
    </>
  );
}
