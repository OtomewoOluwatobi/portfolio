import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="sec-tag">Career</div>
      <h2 className="sec-h2">Experience</h2>
      <div className="exp-list">
        {experience.map((job, i) => (
          <div className="exp-item sr" key={i}>
            <div>
              <div className="exp-period">{job.period}</div>
              <span className={`exp-badge ${job.badgeClass}`}>{job.badge}</span>
            </div>
            <div>
              <h3 className="exp-role">{job.role}</h3>
              <div className="exp-co">{job.company}</div>
              <ul className="exp-pts">
                {job.points.map((pt, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: pt }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
