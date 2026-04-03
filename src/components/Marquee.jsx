import { marqueeItems } from '../data/portfolio.js';

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item.txt}
            <span className={item.dc ? 'dot-g' : 'dot-l'}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
