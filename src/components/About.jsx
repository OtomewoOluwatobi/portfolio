import { useEffect, useRef, useState } from 'react';

function useCounter(target, inView) {
    const [val, setVal] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        if (!inView || started.current) return;
        started.current = true;
        let start = 0;
        const step = target / 60;
        const iv = setInterval(() => {
            start += step;
            if (start >= target) { setVal(target); clearInterval(iv); }
            else setVal(Math.round(start));
        }, 18);
        return () => clearInterval(iv);
    }, [inView, target]);

    return val;
}

export default function About() {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const yrs = useCounter(10, inView);
    const proj = useCounter(12, inView);
    const eng = useCounter(5, inView);

    return (
        <section id="about" className="about-strip" ref={sectionRef}>
            <div className="about-num-col">
                <div className="big-yr">{yrs}+</div>
                <div className="yr-label">Years of<br />Engineering</div>
            </div>
            <div className="about-content-col">
                <blockquote className="about-quote sr">
                    "I don't just write code — I architect systems that scale."
                </blockquote>
                <p className="about-body sr sr-d1">
                    Senior Backend Engineer with over 10 years of experience across .NET, Node.js, Laravel, Python, & cloud-hosted architectures, 
                    I specialise in transforming legacy systems into reliable, scalable, production-grade platforms, particularly within 
                    regulated and operationally sensitive environments.
                </p>
                <div className="about-stats">
                    <div className="ast sr sr-d1">
                        <div className="n">{proj}+</div>
                        <div className="l">Projects Shipped</div>
                    </div>
                    <div className="ast sr sr-d2">
                        <div className="n">{eng}+</div>
                        <div className="l">Engineers Mentored</div>
                    </div>
                    <div className="ast sr sr-d3">
                        <div className="n">3</div>
                        <div className="l">Countries</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
