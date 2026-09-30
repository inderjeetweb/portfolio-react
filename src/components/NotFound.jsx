import { useEffect } from 'react';
import { HiArrowLeft } from 'react-icons/hi2';
import { profile } from '../data/content';
import Button from './ui/Button';

// Firebase rewrites every path to index.html, so unknown paths land here.
export default function NotFound() {
  useEffect(() => {
    document.title = `Page not found — ${profile.name}`;
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  return (
    <main id="main" className="grid min-h-screen place-items-center px-4 py-20 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Button href="/" className="mt-8">
          <HiArrowLeft className="h-4 w-4" />
          Back to home
        </Button>
      </div>
    </main>
  );
}
