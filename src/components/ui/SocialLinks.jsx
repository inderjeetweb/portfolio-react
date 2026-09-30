import { HiOutlineEnvelope } from 'react-icons/hi2';
import { profile, socials } from '../../data/content';
import { getIcon, socialIcons } from '../../lib/icons';

const iconLink =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/70 text-muted transition duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent';

// Round icon links. `only` limits and orders the networks shown (defaults to all).
export default function SocialLinks({ only, withEmail = false, className = '' }) {
  const items = only ? only.map((id) => socials.find((social) => social.id === id)).filter(Boolean) : socials;

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map((social) => {
        const Icon = getIcon(socialIcons, social.id);
        return (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} (opens in a new tab)`}
              title={social.label}
              className={iconLink}
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
      {withEmail && (
        <li>
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} title="Email" className={iconLink}>
            <HiOutlineEnvelope className="h-5 w-5" />
          </a>
        </li>
      )}
    </ul>
  );
}
