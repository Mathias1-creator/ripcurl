import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

const POINTS = [
  'True 3D visualization — not AI generated',
  'Bid-ready contractor documents included',
  '25 years of estate-level expertise',
];

export default function Differentiator() {
  return (
    <section className="bg-forest py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="font-heading text-3xl lg:text-5xl text-cream italic leading-snug">
              "We show you the finished garden before construction begins — in full 3D, with the ability to change every element until it's exactly right."
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              {POINTS.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-gold" />
                  </div>
                  <p className="font-body text-cream/80 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}