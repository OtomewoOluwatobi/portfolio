import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const tr = trailRef.current;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.14;
      trail.current.y += (pos.current.y - trail.current.y) * 0.14;
      tr.style.left = trail.current.x + 'px';
      tr.style.top = trail.current.y + 'px';
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => document.body.classList.add('chover');
    const onLeave = () => document.body.classList.remove('chover');
    const onDown = () => document.body.classList.add('cclick');
    const onUp = () => document.body.classList.remove('cclick');

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    const hoverEls = document.querySelectorAll('a, button, .btn-green, .btn-outline-ink, .nav-cta, .dl-btn');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    raf.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={dotRef} />
      <div id="cursor-trail" ref={trailRef} />
    </>
  );
}
