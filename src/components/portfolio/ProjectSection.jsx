import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

export default function ProjectSection({ name, location, acreage, description, bullets, image, imageAlt, imageLeft = false }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-24 border-b border-cream/10 last:border-0`}>
      <ScrollReveal className={imageLeft ? 'order-1' : 'order-1 lg:order-2'}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className={imageLeft ? 'order-2' : 'order-2 lg:order-1'}>
        <div className="w-12 h-px bg-gold mb-6" />
        <h3 className="font-heading text-3xl lg:text-4xl text-charcoal mb-2">{name}</h3>
        <p className="font-body text-charcoal/50 text-sm mb-6">
          {location} · {acreage}
        </p>
        <p className="font-body text-charcoal/70 leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 font-body text-sm text-charcoal/60">
              <span className="text-gold mt-0.5">—</span>
              {b}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </div>
  );
}