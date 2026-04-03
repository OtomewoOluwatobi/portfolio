import { impact } from '../data/portfolio.js';

export default function Impact() {
  return (
    <section id="impact" className="impact-section">
      <div className="sec-tag">By the Numbers</div>
      <h2 className="sec-h2">Impact</h2>
      <div className="impact-bento">
        {impact.map((cell, i) => (
          <div
            key={i}
            className="i-cell sr"
            style={cell.span ? { gridColumn: 'span 2' } : {}}
          >
            <div className="i-stripe" />
            <div className="i-big">{cell.big}</div>
            <div className="i-desc">{cell.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
