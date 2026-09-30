import { sections, skills } from '../data/content';
import { categoryIcons, getIcon, skillIcons } from '../lib/icons';
import { easeOut, fadeUpSmall } from '../lib/motion';
import { RevealGroup, RevealItem } from './ui/Reveal';
import Section from './ui/Section';

// Each card fades up, then staggers its own chips in.
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut, staggerChildren: 0.035, delayChildren: 0.15 },
  },
};

export default function Skills() {
  return (
    <Section id="skills" tinted {...sections.skills}>
      <RevealGroup className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, index) => {
          const CategoryIcon = getIcon(categoryIcons, group.category);
          // The two largest groups span wider columns; the rest sit four across.
          const wide = index < 2 ? 'md:col-span-2' : '';
          return (
            <RevealItem as="article" key={group.category} variants={cardVariants} className={`card p-6 ${wide}`}>
              <div className="flex items-center gap-3">
                <span className="icon-tile">
                  <CategoryIcon />
                </span>
                <h3 className="text-lg font-semibold">{group.category}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const SkillIcon = getIcon(skillIcons, skill);
                  return (
                    <RevealItem
                      as="li"
                      key={skill}
                      variants={fadeUpSmall}
                      className="group inline-flex items-center gap-2 rounded-lg border border-line bg-canvas/60 px-3 py-1.5 text-sm font-medium transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                    >
                      <SkillIcon className="h-4 w-4 text-muted transition-colors duration-300 group-hover:text-accent" />
                      {skill}
                    </RevealItem>
                  );
                })}
              </ul>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
