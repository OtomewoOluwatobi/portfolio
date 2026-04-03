import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">Oluwatobi<span className="dot">.</span></a>
      <ul className="nav-links">
        {['about', 'skills', 'experience', 'impact', 'education', 'contact'].map(s => (
          <li key={s}>
            <a href={`#${s}`} onClick={e => { e.preventDefault(); scrollTo(s); }}>
              {s}
            </a>
          </li>
        ))}
      </ul>
      <button className="nav-cta" onClick={() => scrollTo('contact')}>
        Hire Me
      </button>
    </nav>
  );
}
