import { useEffect, useRef } from 'react';
import heroPhoto from '../assets/heroPhoto.js';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function scramble(el) {
  const original = el.dataset.text || el.innerText;
  let iter = 0;
  const total = 20;
  const iv = setInterval(() => {
    el.innerText = original
      .split('')
      .map((c, i) => {
        if (i < iter / (total / original.length)) return c;
        if (c === ' ') return ' ';
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join('');
    iter++;
    if (iter > total) {
      el.innerText = original;
      clearInterval(iv);
    }
  }, 40);
}

export default function Hero() {
  const photoRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    // Parallax on photo
    const onScroll = () => {
      if (photoRef.current) {
        photoRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Scramble effect on hero title lines
    const lines = h1Ref.current?.querySelectorAll('[data-text]');
    lines?.forEach((el, i) => {
      setTimeout(() => scramble(el), 1100 + i * 200);
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag">AVAILABLE FOR WORK — Remote|Hybrid</div>
        <h1 className="hero-h1" ref={h1Ref}>
          <span className="l1" data-text="SENIOR">SENIOR</span><br />
          <span className="l2" data-text="BACKEND">BACKEND</span><br />
          <span className="l3" data-text="ENGINEER.">ENGINEER.</span>
        </h1>
        <p className="hero-sub">
          10+ years building scalable APIs, microservices & real-time platforms
          across <strong>healthtech, fintech &amp; proptech</strong> — from Nigeria to United Kingdom.
        </p>
        <div className="hero-actions">
          <button className="btn-green" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <span>Let's Work Together <span style={{ marginLeft: 4 }}>→</span></span>
          </button>
          <a className="btn-outline-ink" href="#experience" onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Work
          </a>
        </div>
        <div className="hero-accent-b" />
        <div className="hero-scroll">
          <div className="scroll-ln" />
          SCROLL TO EXPLORE
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-wrap">
          <img ref={photoRef} src={heroPhoto} alt="Oluwatobi Otomewo" className="hero-photo" />
          <div className="hero-photo-overlay" />
          <div className="hero-photo-tint" />
        </div>
        <div className="hero-accent-r" />
      </div>
    </section>
  );
}
