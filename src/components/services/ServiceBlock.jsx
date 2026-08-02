import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

export default function ServiceBlock({ title, description, bullets, image, imageAlt, imageCaption, bgClass, textClass, imageLeft = false }) {
  return (
    <section className={`${bgClass} py-24 lg:py-32`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          {/* Image */}
          <ScrollReveal className={imageLeft ? 'order-1' : 'order-1 lg:order-2'}>
            <div>
              <div className="overflow-hidden rounded-sm shadow-2xl border border-gold/40">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {imageCaption && (
                <p className="mt-3 text-xs font-body italic text-charcoal/40 text-center px-2">{imageCaption}</p>
              )}
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.2} className={imageLeft ? 'order-2' : 'order-2 lg:order-1'}>
            <h3 className={`font-heading text-3xl lg:text-5xl mb-6 ${textClass}`}>
              {title}
            </h3>
            <p className={`font-body leading-relaxed mb-8 ${textClass} opacity-70`}>
              {description}
            </p>
            <ul className="space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className={`flex items-start gap-3 font-body text-sm ${textClass} opacity-60`}>
                  <span className="text-gold mt-1">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}