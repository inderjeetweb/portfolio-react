import { HiArrowUp } from 'react-icons/hi2';
import { footer, profile } from '../data/content';
import Container from './ui/Container';
import SocialLinks from './ui/SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-sm font-medium">
            © {year} {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">{footer.note}</p>
        </div>

        <SocialLinks withEmail />

        <a
          href="#top"
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2.5 text-sm font-medium text-muted transition duration-300 ease-out hover:border-accent/50 hover:text-accent"
        >
          Back to top
          <HiArrowUp className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
        </a>
      </Container>
    </footer>
  );
}
