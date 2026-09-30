import { m, useReducedMotion } from 'framer-motion';
import { Fragment } from 'react';
import { HiArrowRight, HiOutlineArrowDownTray } from 'react-icons/hi2';
import { hero, profile } from '../data/content';
import { easeOut, fadeUp, staggerContainer } from '../lib/motion';
import Button from './ui/Button';
import Container from './ui/Container';
import SocialLinks from './ui/SocialLinks';
import Typewriter from './ui/Typewriter';

// Kept brisk: the tagline is usually the Largest Contentful Paint element.
const intro = staggerContainer(0.06);
const variableName = profile.name.split(' ')[0].toLowerCase();

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : 'hidden';

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-44"
    >
      <HeroBackground />

      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <m.div variants={intro} initial={initial} animate="visible">
          <m.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm font-medium text-muted"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.currentTitle} at {profile.company}
          </m.p>

          <m.h1 id="hero-heading" variants={fadeUp} className="mt-6 font-bold tracking-tight">
            <span className="block text-xl font-medium text-muted sm:text-2xl">{hero.greeting}</span>{' '}
            <span className="text-metallic mt-2 block pb-1 text-[2.5rem] leading-[1.1] sm:text-6xl lg:text-7xl">
              {profile.name}
            </span>
          </m.h1>

          <m.p variants={fadeUp} className="mt-4 min-h-[2rem] text-xl font-semibold sm:min-h-[2.25rem] sm:text-2xl">
            <Typewriter words={hero.roles} />
          </m.p>

          <m.p variants={fadeUp} className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            {hero.tagline}
          </m.p>

          <m.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              {hero.primaryCta}
              <HiArrowRight className="h-4 w-4" />
            </Button>
            {profile.resumeUrl && (
              <Button href={profile.resumeUrl} external variant="secondary">
                <HiOutlineArrowDownTray className="h-4 w-4" />
                {hero.secondaryCta}
              </Button>
            )}
          </m.div>

          <m.div variants={fadeUp} className="mt-10">
            <SocialLinks only={['github', 'linkedin']} withEmail />
          </m.div>
        </m.div>

        <m.div
          className="hidden lg:block"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.35 }}
        >
          <CodeCard />
        </m.div>
      </Container>
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="hero-grid absolute inset-0" />
      <div className="hero-glow absolute -top-56 left-[calc(50%-24rem)] h-[48rem] w-[48rem] animate-drift rounded-full" />
      <div className="hero-glow-alt absolute -right-48 top-16 h-[36rem] w-[36rem] animate-drift-slow rounded-full" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}

const Punct = ({ children }) => <span className="text-muted">{children}</span>;
const Str = ({ children }) => <span className="text-accent">'{children}'</span>;

// Decorative "profile as code" card; the same facts are available as text elsewhere.
function CodeCard() {
  const { codeCard } = hero;
  const entries = [
    ['role', <Str>{profile.currentTitle}</Str>],
    ['company', <Str>{profile.company}</Str>],
    ['experience', <Str>{codeCard.experience}</Str>],
    [
      'stack',
      <>
        <Punct>[</Punct>
        {codeCard.stack.map((item, index) => (
          <Fragment key={item}>
            {index > 0 && <Punct>, </Punct>}
            <Str>{item}</Str>
          </Fragment>
        ))}
        <Punct>]</Punct>
      </>,
    ],
    ['location', <Str>{profile.location}</Str>],
  ];

  return (
    <div aria-hidden="true" className="card relative overflow-hidden shadow-lift">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-line" />
        <span className="h-3 w-3 rounded-full bg-line" />
        <span className="h-3 w-3 rounded-full bg-line" />
        <span className="ml-3 font-mono text-xs text-muted">{codeCard.fileName}</span>
      </div>
      <pre className="overflow-hidden px-5 py-6 font-mono text-[12px] leading-7 xl:text-[13.5px]">
        <code>
          <span className="block">
            <span className="text-accent-2">const</span> {variableName} <Punct>= {'{'}</Punct>
          </span>
          {entries.map(([key, value]) => (
            <span key={key} className="block pl-6">
              {key}
              <Punct>: </Punct>
              {value}
              <Punct>,</Punct>
            </span>
          ))}
          <span className="block">
            <Punct>{'};'}</Punct>
          </span>
        </code>
      </pre>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
    </div>
  );
}
