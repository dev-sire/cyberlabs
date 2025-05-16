
import React, { useEffect, useState, useRef } from 'react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem = ({ value, label, suffix = '', delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const countedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countedRef.current) {
          setTimeout(() => {
            const duration = 2000;
            const startTime = Date.now();
            const countUp = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);
              setCount(Math.floor(progress * value));
              
              if (progress < 1) {
                requestAnimationFrame(countUp);
              } else {
                setCount(value);
                countedRef.current = true;
              }
            };
            requestAnimationFrame(countUp);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="flex items-center justify-center mb-2">
        <span className="text-4xl lg:text-5xl font-bold text-cyber-light">{count}</span>
        <span className="text-4xl lg:text-5xl font-bold text-cyber-purple ml-1">{suffix}</span>
      </div>
      <p className="text-cyber-light/70">{label}</p>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cyber-dark via-slate-900 to-cyber-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-cyber-light/70 max-w-xl mx-auto">
            Through our research and innovations, CyberLabs has made significant contributions to the field of cybersecurity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem value={42} label="Research Projects" delay={0} />
          <StatItem value={137} label="Publications" delay={200} />
          <StatItem value={28} label="Team Members" delay={400} />
          <StatItem value={15} label="Industry Partners" delay={600} />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
