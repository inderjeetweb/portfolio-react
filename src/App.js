import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { IconContext } from 'react-icons';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import Skills from './components/Skills';

// Icons are decorative by default; icon-only links and buttons carry their own aria-label.
const iconDefaults = { attr: { 'aria-hidden': true } };

// Single-page site: anything other than the home page is a 404.
const isHomePage = ['/', '/index.html'].includes(window.location.pathname);

export default function App() {
  return (
    // LazyMotion + `m` components keep Framer Motion's bundle small;
    // reducedMotion="user" honours the OS "reduce motion" setting.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <IconContext.Provider value={iconDefaults}>{isHomePage ? <Portfolio /> : <NotFound />}</IconContext.Provider>
      </MotionConfig>
    </LazyMotion>
  );
}

function Portfolio() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:font-medium focus:shadow-lift"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
