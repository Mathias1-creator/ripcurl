import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function PageHeader({ heading, subtext, bgClass = 'bg-charcoal', light = false }) {
  return (
    <section className={`${bgClass} pt-32 pb-20 lg:pt-40 lg:pb-28`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h1 className={`font-heading text-5xl lg:text-7xl mb-6 ${light ? 'text-charcoal' : 'text-cream'}`}>{heading}</h1>
          <div className="w-20 h-px bg-gold mb-6" />
          <p className={`font-body text-lg max-w-2xl ${light ? 'text-charcoal/60' : 'text-cream/60'}`}>{subtext}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}