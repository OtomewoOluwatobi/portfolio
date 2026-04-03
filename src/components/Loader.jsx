import { useEffect, useRef, useState } from 'react';

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    let val = 0;
    const iv = setInterval(() => {
      val += Math.random() * 18 + 4;
      if (val >= 100) {
        val = 100;
        clearInterval(iv);
        setTimeout(() => setDone(true), 350);
      }
      setPct(Math.round(val));
    }, 80);
    return () => clearInterval(iv);
  }, []);

  if (done) return null;

  return (
    <div id="loader" className={done ? 'done' : ''}>
      <div className="lbar-wrap">
        <div className="lbar" style={{ width: pct + '%' }} ref={barRef} />
      </div>
      <div className="ltxt">LOADING — {pct.toString().padStart(3, '0')}%</div>
    </div>
  );
}
