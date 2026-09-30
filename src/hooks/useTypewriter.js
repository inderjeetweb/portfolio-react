import { useEffect, useState } from 'react';

// Types each word, pauses, deletes it, then moves to the next one.
// When `enabled` is false the first word is returned as static text.
export function useTypewriter(
  words,
  { enabled = true, typeSpeed = 70, deleteSpeed = 35, holdDelay = 1800, nextDelay = 350 } = {}
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled || words.length === 0) return undefined;

    const word = words[wordIndex];
    let delay;
    let step;

    if (!deleting && text === word) {
      delay = holdDelay;
      step = () => setDeleting(true);
    } else if (deleting && text === '') {
      delay = nextDelay;
      step = () => {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      };
    } else {
      delay = deleting ? deleteSpeed : typeSpeed;
      step = () => setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }

    const timer = setTimeout(step, delay);
    return () => clearTimeout(timer);
  }, [enabled, words, wordIndex, text, deleting, typeSpeed, deleteSpeed, holdDelay, nextDelay]);

  return enabled ? text : words[0] ?? '';
}
