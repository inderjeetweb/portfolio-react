import Container from './Container';
import { Reveal } from './Reveal';

export default function Section({ id, eyebrow, title, description, tinted = false, children }) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-20 sm:py-28 ${tinted ? 'border-y border-line/60 bg-surface/40' : ''}`}
    >
      <Container>
        <Reveal as="header" className="mb-12 max-w-2xl sm:mb-16">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={headingId} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
