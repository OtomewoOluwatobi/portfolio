import { education, awards } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" className="edu-section">
      <div className="edu-col">
        <div className="edu-col-head">Education</div>
        {education.map((e, i) => (
          <div className="edu-entry sr" key={i}>
            <div className="edu-deg">{e.deg}</div>
            <div className="edu-school">{e.school}</div>
            <div className="edu-yr">{e.yr}</div>
          </div>
        ))}
      </div>
      <div className="edu-col">
        <div className="edu-col-head">Awards &amp; Recognition</div>
        {awards.map((a, i) => (
          <div className="award-card sr" key={i}>
            <div className="award-emoji">{a.emoji}</div>
            <div>
              <div className="award-name">{a.name}</div>
              <div className="award-yr">{a.yr}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
