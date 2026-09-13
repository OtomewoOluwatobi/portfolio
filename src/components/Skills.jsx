import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="sec-tag">Expertise</div>
      <h2 className="sec-h2">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map(card => (
          <div className="skill-card" key={card.num}>
            <div className="skill-num">{card.num}</div>
            <div className="skill-title">{card.title}</div>
            <div className="chip-list">
              {card.tags.map(tag => (
                <span className="skill-chip" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skills-evolving">
        <p>Always learning — currently exploring LLM integrations, Rust for systems work, and advanced k8s patterns.</p>
        <span>Always evolving</span>
      </div>
    </section>
  );
}
