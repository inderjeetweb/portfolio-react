import { HiOutlineCalendar, HiOutlineMapPin } from 'react-icons/hi2';
import { experience, sections } from '../data/content';
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal';
import Section from './ui/Section';

export default function Experience() {
  return (
    <Section id="experience" {...sections.experience}>
      <div className="space-y-16 sm:space-y-20">
        {experience.map((job) => (
          <article key={job.company} className="grid gap-8 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-12">
            <Reveal as="header" className="md:sticky md:top-24 md:self-start">
              <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                <HiOutlineCalendar className="h-4 w-4 shrink-0 text-accent" />
                {job.period} · {job.duration}
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-sm text-muted">
                <HiOutlineMapPin className="h-4 w-4 shrink-0 text-accent" />
                {job.location}
              </p>
            </Reveal>

            {/* Timeline: the rail is a pseudo-element so the <ol> only contains <li>s. */}
            <RevealGroup
              as="ol"
              stagger={0.1}
              className="relative space-y-5 before:absolute before:bottom-3 before:left-[5.5px] before:top-3 before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-line before:to-line/0 before:content-['']"
            >
              {job.roles.map((role) => (
                <RevealItem as="li" key={role.title} className="relative pl-8 sm:pl-10">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-7 h-3 w-3 rounded-full ring-4 ring-canvas ${
                      role.current ? 'bg-accent' : 'border-2 border-accent/70 bg-canvas'
                    }`}
                  />
                  <div className="card p-5 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift sm:p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h4 className="text-lg font-semibold">{role.title}</h4>
                      {role.current && (
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {role.period} · {role.duration}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {role.highlights.map((point) => (
                        <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                          <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </article>
        ))}
      </div>
    </Section>
  );
}
