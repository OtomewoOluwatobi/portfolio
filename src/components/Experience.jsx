import { experienceGroups } from '../data/portfolio.js';

function ExpItem({ job }) {
  return (
    <div className="exp-item sr">
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
  );
}

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="sec-tag">Career</div>
      <h2 className="sec-h2">Experience</h2>
      <div className="exp-list">
        {experienceGroups.map((group, i) => (
          group.kind === 'cluster' ? (
            <div className="exp-cluster" key={`cluster-${i}`}>
              <div className="exp-cluster-head">
                <span className="exp-cluster-label">{group.label}</span>
                <span className="exp-cluster-note">{group.note}</span>
              </div>
              {group.jobs.map((job, j) => (
                <ExpItem job={job} key={`${job.company}-${j}`} />
              ))}
            </div>
          ) : (
            group.jobs.map((job, j) => (
              <ExpItem job={job} key={`${job.company}-${j}`} />
            ))
          )
        ))}
      </div>
    </section>
  );
}
