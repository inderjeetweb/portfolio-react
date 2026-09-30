import { HiOutlineAcademicCap, HiOutlineBookOpen, HiOutlineLanguage } from 'react-icons/hi2';
import { education, sections } from '../data/content';
import { RevealGroup, RevealItem } from './ui/Reveal';
import Section from './ui/Section';

export default function Education() {
  const { academic, courses, languages } = education;

  return (
    <Section id="education" {...sections.education}>
      <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <EducationCard icon={HiOutlineAcademicCap} heading={academic.heading} items={academic.items} />
        <EducationCard icon={HiOutlineBookOpen} heading={courses.heading} items={courses.items} />

        <RevealItem className="card p-6 md:col-span-2 lg:col-span-1">
          <CardHeading icon={HiOutlineLanguage}>{languages.heading}</CardHeading>
          <ul className="mt-6 space-y-3">
            {languages.items.map((language) => (
              <li
                key={language.name}
                className="flex items-center justify-between gap-4 rounded-xl border border-line bg-canvas/60 px-4 py-3"
              >
                <span className="font-medium">{language.name}</span>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {language.level}
                </span>
              </li>
            ))}
          </ul>
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}

function CardHeading({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="icon-tile">
        <Icon />
      </span>
      <h3 className="text-lg font-semibold">{children}</h3>
    </div>
  );
}

function EducationCard({ icon, heading, items }) {
  return (
    <RevealItem className="card p-6">
      <CardHeading icon={icon}>{heading}</CardHeading>
      <ol className="mt-6 space-y-5">
        {items.map((item) => (
          <li key={item.title} className="flex gap-4">
            <span className="mt-0.5 h-fit shrink-0 rounded-md border border-line bg-canvas/60 px-2 py-0.5 font-mono text-xs font-medium text-muted">
              {item.year}
            </span>
            <div>
              <p className="font-medium leading-snug">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
            </div>
          </li>
        ))}
      </ol>
    </RevealItem>
  );
}
