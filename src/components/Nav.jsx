import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isProjects = location.pathname === '/projects';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    if (isProjects) {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo">Oluwatobi<span className="dot">.</span></Link>
      <ul className="nav-links">
        {['about', 'skills', 'experience', 'impact', 'education', 'contact'].map(s => (
          <li key={s}>
            <a href={`#${s}`} onClick={e => { e.preventDefault(); scrollTo(s); }}>
              {s}
            </a>
          </li>
        ))}
        <li>
          <Link to="/projects" className={isProjects ? 'active' : ''}>Projects</Link>
        </li>
      </ul>
      <button className="nav-cta" onClick={() => scrollTo('contact')}>
        Hire Me
      </button>
    </nav>
  );
}
