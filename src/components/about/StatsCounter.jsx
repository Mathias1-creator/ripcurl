import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 4, suffix: '', label: 'Major Estate Projects' },
  { value: 2, suffix: '', label: 'Coasts Served' },
  { value: 100, suffix: '%', label: 'Client-Focused Approach' },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-heading text-5xl lg:text-7xl text-cream">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="font-body text-cream/50 text-sm mt-3 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}