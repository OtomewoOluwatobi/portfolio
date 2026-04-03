import { useEffect } from 'react';
import './App.css';

import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Impact from './components/Impact';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Scroll-reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe all .sr elements (re-query after mount so components have rendered)
    const attach = () => {
      document.querySelectorAll('.sr').forEach(el => obs.observe(el));
    };
    const timer = setTimeout(attach, 100);
    return () => { clearTimeout(timer); obs.disconnect(); };
  }, []);

  return (
    <>
      <Cursor />
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Impact />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
