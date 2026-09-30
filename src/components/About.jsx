import { HiOutlineLanguage, HiOutlineMapPin } from 'react-icons/hi2';
import { about, education, profile, sections } from '../data/content';
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal';
import Section from './ui/Section';

const languages = education.languages.items.map((language) => language.name).join(' & ');

export default function About() {
  const [lead, ...rest] = about.paragraphs;

  return (
    <Section id="about" {...sections.about}>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative rounded-[1.125rem] bg-gradient-to-br from-accent/60 via-line to-line p-px shadow-lift">
            <img
              src={profile.photo.src}
              srcSet={profile.photo.srcSet}
              sizes="(min-width: 1024px) 460px, 384px"
              alt={profile.photo.alt}
              width={profile.photo.width}
              height={profile.photo.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl bg-surface object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal className="space-y-5">
            <p className="text-lg text-fg sm:text-xl">{lead}</p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="text-base text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal as="ul" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted">
            <li className="flex items-center gap-2">
              <HiOutlineMapPin className="h-5 w-5 text-accent" />
              {profile.location}
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineLanguage className="h-5 w-5 text-accent" />
              {languages}
            </li>
          </Reveal>

          <RevealGroup as="dl" className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            {about.stats.map((stat) => (
              <RevealItem key={stat.label} className="card flex flex-col-reverse justify-end gap-1 p-5">
                <dt className="text-sm leading-snug text-muted">{stat.label}</dt>
                <dd className="text-gradient text-3xl font-bold tracking-tight">{stat.value}</dd>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
