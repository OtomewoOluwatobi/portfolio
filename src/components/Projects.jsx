import { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import { projects } from '../data/portfolio';

// ── metric icons keyed by index (pure rendering, no data) ──
const METRIC_ICONS = {
  hostel: [
    <svg key="0" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    <svg key="1" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>,
    <svg key="2" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    <svg key="3" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  ],
  sanan: [
    <svg key="0" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    <svg key="1" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    <svg key="2" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
  ],
  hms: [
    <svg key="0" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    <svg key="1" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    <svg key="2" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    <svg key="3" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>,
  ],
  asco: [
    <svg key="0" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    <svg key="1" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    <svg key="2" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    <svg key="3" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  ],
};

// ── API visual icon paths keyed by project id ──
function ApiIcon({ proj }) {
  if (proj.id === 'hms') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke={proj.apiIconColor} strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={proj.apiIconColor} strokeWidth="1.5">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="17"/>
      <line x1="9.5" y1="14.5" x2="14.5" y2="14.5"/>
    </svg>
  );
}

function ProjectVisual({ proj }) {
  if (proj.visualType === 'image') {
    return (
      <div className="proj-visual">
        <img
          src={proj.imageSrc}
          alt={proj.imageAlt}
          onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
        />
        <div className="proj-visual-fallback" style={{ display: 'none', background: proj.visualBg }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.8rem', color: proj.fallbackTitleColor, letterSpacing: '0.04em' }}>
            {proj.fallbackTitle}
          </div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Mono',monospace", letterSpacing: '0.08em' }}>
            {proj.fallbackSub}
          </div>
        </div>
      </div>
    );
  }

  if (proj.visualType === 'fallback') {
    return (
      <div className="proj-visual">
        <div className="proj-visual-fallback" style={{ background: proj.visualBg }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '3rem', color: 'var(--lime)', letterSpacing: '0.06em', textAlign: 'center', lineHeight: 1 }}>
            {proj.fallbackTitle}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontFamily: "'DM Mono',monospace", letterSpacing: '0.1em' }}>
            {proj.fallbackSub}
          </div>
          {proj.fallbackBadges && (
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              {proj.fallbackBadges.map(b => (
                <div key={b.label} style={{ padding: '0.2rem 0.6rem', background: b.bg, border: `1px solid ${b.border}`, borderRadius: '3px', fontSize: '0.6rem', fontFamily: "'DM Mono',monospace", color: b.color }}>
                  {b.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // api type
  return (
    <div className="proj-visual-api" style={{ background: proj.visualBg }}>
      <div className="shimmer" />
      <div className="api-icon-wrap" style={{ borderColor: proj.apiIconBorder, background: proj.apiIconBg }}>
        <ApiIcon proj={proj} />
      </div>
      <div className="api-routes">
        {proj.apiRoutes.map((r, i) => (
          <div key={i} className="api-route" style={{ background: r.rowBg, color: r.rowColor }}>
            <span className="method-badge" style={r.methodColor ? { color: r.methodColor } : {}}>{r.method}</span>
            {r.path}
          </div>
        ))}
      </div>
    </div>
  );
}

function countUp(el, target, suffix, dur) {
  const t0 = performance.now();
  const isFloat = String(target).includes('.');
  const tick = (now) => {
    const prog = Math.min((now - t0) / dur, 1);
    const ease = 1 - Math.pow(1 - prog, 3);
    el.textContent = (isFloat ? (target * ease).toFixed(1) : Math.round(target * ease)) + suffix;
    if (prog < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const cardRefs = useRef([]);
  const s1Ref = useRef(null);
  const s2Ref = useRef(null);
  const s3Ref = useRef(null);
  const s4Ref = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 120);
            ro.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    cardRefs.current.forEach(el => el && ro.observe(el));
    return () => ro.disconnect();
  }, [filter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (s1Ref.current) countUp(s1Ref.current, 4, '', 1400);
      if (s2Ref.current) countUp(s2Ref.current, 10, 'K+', 1800);
      if (s3Ref.current) countUp(s3Ref.current, 99.9, '%', 2000);
      if (s4Ref.current) countUp(s4Ref.current, 10, '+', 1600);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const visible = projects.filter(p => filter === 'all' || p.cat === filter);

  return (
    <>
      <header className="proj-page-header">
        <div className="ph-tag">Selected Work · 2018 – 2025</div>
        <h1 className="ph-h1">REAL <span>SYSTEMS.</span><br />REAL IMPACT.</h1>
        <p className="ph-sub">Production projects across FinTech, real estate, healthcare, and enterprise — built to scale, secured to last, and shipped on time.</p>
        <div className="ph-filters">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'marketplace', label: 'Marketplace' },
            { key: 'realestate', label: 'Real Estate' },
            { key: 'api', label: 'Backend API' },
            { key: 'enterprise', label: 'Enterprise' },
          ].map(f => (
            <button key={f.key} className={`filter-btn${filter === f.key ? ' active' : ''}`} onClick={() => setFilter(f.key)}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="ph-accent-line" />
      </header>

      <div className="proj-stats-bar">
        <div className="sbar-item"><div className="sbar-num" ref={s1Ref}>0</div><div className="sbar-label">Projects Shipped</div></div>
        <div className="sbar-item"><div className="sbar-num" ref={s2Ref}>0</div><div className="sbar-label">Daily Active Users</div></div>
        <div className="sbar-item"><div className="sbar-num" ref={s3Ref}>0</div><div className="sbar-label">Uptime SLA</div></div>
        <div className="sbar-item"><div className="sbar-num" ref={s4Ref}>0</div><div className="sbar-label">Years Building</div></div>
      </div>

      <div className="projects-wrap">
        <div className="proj-grid">
          {visible.map((proj, i) => (
            <div key={proj.id} className="proj-card" ref={el => { cardRefs.current[i] = el; }} data-cat={proj.cat}>
              <ProjectVisual proj={proj} />
              <div className="proj-body">
                <div className="proj-top">
                  <span className={`proj-cat ${proj.catClass}`}>{proj.catLabel}</span>
                  <div className="proj-links">
                    {proj.link ? (
                      <a href={proj.link.href} target="_blank" rel="noopener noreferrer" className="proj-link">
                        <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        {proj.link.label}
                      </a>
                    ) : (
                      <span className="proj-link private">
                        <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        Private
                      </span>
                    )}
                  </div>
                </div>
                <div className="proj-name">{proj.name}</div>
                <div className="proj-role">{proj.role}</div>
                <p className="proj-desc">{proj.desc}</p>
                <div className="proj-metrics">
                  {proj.metrics.map((m, mi) => (
                    <span key={mi} className="proj-metric">
                      {METRIC_ICONS[proj.id]?.[mi]}
                      {m}
                    </span>
                  ))}
                </div>
                <div className="proj-stack">
                  {proj.stack.map(tag => <span key={tag} className="stack-tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="proj-cta-section">
        <div className="cta-text">
          <h2>LIKE WHAT<br />YOU <span>SEE?</span></h2>
          <p>These are just four highlights from 10+ years of shipping. Every project is engineered for reliability, built to scale, and designed with the next engineer in mind. Let's build something great together.</p>
        </div>
        <div className="proj-cta-actions">
          <a href="/#contact" className="btn-green">
            <span>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Get In Touch
            </span>
          </a>
          <a href="/Oluwatobi_Otomewo_Resume.pdf" download className="btn-outline-ink">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}


