import { useEffect, useRef } from 'react';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          sectionRef.current?.querySelectorAll('.bar-fill').forEach(b => {
            b.style.width = b.dataset.pct + '%';
          });
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="sec-tag">Expertise</div>
      <h2 className="sec-h2">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map(card => (
          <div className="skill-card" key={card.num}>
            <div className="skill-num">{card.num}</div>
            <div className="skill-title">{card.title}</div>
            <div className="bar-list">
              {card.bars.map(b => (
                <div key={b.name}>
                  <div className="bar-meta">
                    <span className="bar-name">{b.name}</span>
                    <span className="bar-pct">{b.pct}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" data-pct={b.pct} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="skill-card">
          <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>🛠️</div>
          <p style={{ fontSize: '.78rem', color: 'var(--ink3)', lineHeight: 1.6, marginBottom: '.75rem' }}>
            Always learning — currently exploring LLM integrations, Rust for systems work, and advanced k8s patterns.
          </p>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '.62rem', color: 'var(--g2)', letterSpacing: '.1em' }}>
            ALWAYS EVOLVING
          </div>
        </div>
      </div>
    </section>
  );
}
