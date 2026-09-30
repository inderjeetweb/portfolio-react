import { FaGithub } from 'react-icons/fa';
import { HiArrowUpRight, HiOutlineLockClosed } from 'react-icons/hi2';
import { dashboards, liveSites, projects, sections } from '../data/content';
import { getIcon, projectIcons } from '../lib/icons';
import { fadeUpSmall } from '../lib/motion';
import Button from './ui/Button';
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal';
import Section from './ui/Section';

const displayUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

// Widens some cards so the last row is never left with a gap:
// two columns on tablets (an odd last card spans both), a 6-track grid on desktop
// where cards take 2 tracks (three per row) or 3 tracks (two per row).
function gridSpan(index, count) {
  const tablet = count % 2 === 1 && index === count - 1 ? 'sm:col-span-2' : '';
  const wideCards = { 0: 0, 1: 4, 2: 2 }[count % 3];
  return `${tablet} ${index < wideCards ? 'lg:col-span-3' : 'lg:col-span-2'}`;
}

export default function Projects() {
  return (
    <Section id="projects" tinted {...sections.projects}>
      <ProjectGroup heading={projects.heading} items={projects.items} />

      <div className="mt-20">
        <ProjectGroup
          heading={dashboards.heading}
          description={dashboards.description}
          items={dashboards.items}
          note={dashboards.note}
        />
      </div>

      <div className="mt-20">
        <Reveal as="h3" className="text-xl font-semibold tracking-tight sm:text-2xl">
          {liveSites.heading}
        </Reveal>
        <RevealGroup as="ul" stagger={0.04} className="mt-6 flex flex-wrap gap-3">
          {liveSites.urls.map((url) => (
            <RevealItem as="li" key={url} variants={fadeUpSmall}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 text-sm font-medium transition duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <span className="link-underline">{displayUrl(url)}</span>
                <HiArrowUpRight className="h-3.5 w-3.5 text-muted transition duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}

function ProjectGroup({ heading, description, items, note }) {
  return (
    <>
      <Reveal className="mb-8 max-w-2xl">
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{heading}</h3>
        {description && <p className="mt-2 text-muted">{description}</p>}
      </Reveal>
      <RevealGroup as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {items.map((project, index) => (
          <RevealItem as="li" key={project.title} className={`h-full ${gridSpan(index, items.length)}`}>
            <ProjectCard project={project} note={note} />
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}

function ProjectCard({ project, note }) {
  const Icon = getIcon(projectIcons, project.icon);
  const hasLinks = Boolean(project.live || project.code);

  return (
    <article className="card group flex h-full flex-col p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift">
      <div className="flex items-start justify-between gap-4">
        <span className="icon-tile transition-transform duration-300 ease-out group-hover:scale-105">
          <Icon />
        </span>
        {project.kicker && (
          <span className="pt-1 text-right text-xs font-semibold uppercase tracking-wider text-muted">
            {project.kicker}
          </span>
        )}
      </div>

      <h4 className="mt-5 text-lg font-semibold tracking-tight">{project.title}</h4>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{project.description}</p>

      <ul aria-label="Tech stack" className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
            {tag}
          </li>
        ))}
      </ul>

      {hasLinks ? (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          {project.live && (
            <Button href={project.live} external size="sm" aria-label={`${project.title} — live site (opens in a new tab)`}>
              Live
              <HiArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          )}
          {project.code && (
            <Button
              href={project.code}
              external
              size="sm"
              variant="secondary"
              aria-label={`${project.title} — source code (opens in a new tab)`}
            >
              <FaGithub className="h-3.5 w-3.5" />
              Code
            </Button>
          )}
        </div>
      ) : (
        note && (
          <p className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-sm text-muted">
            <HiOutlineLockClosed className="h-4 w-4" />
            {note}
          </p>
        )
      )}
    </article>
  );
}
