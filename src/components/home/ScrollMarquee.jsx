import React from 'react';

const ITEMS = [
  '3D Landscape Design',
  'Estate Management',
  'Water Conservation',
  'Habitat Restoration',
  'Sustainable Practices',
  'Native Plants',
  'Irrigation Planning',
  'Garden Consultation',
];

export default function ScrollMarquee() {
  const content = ITEMS.map((item, i) => (
    <span key={i} className="flex items-center gap-6 whitespace-nowrap">
      <span className="text-cream/80 font-body text-sm tracking-[3px] uppercase">{item}</span>
      <span className="text-gold text-lg">·</span>
    </span>
  ));

  return (
    <div className="bg-charcoal py-5 overflow-hidden border-y border-gold/10">
      <div className="flex animate-marquee">
        <div className="flex items-center gap-6 pr-6">{content}</div>
        <div className="flex items-center gap-6 pr-6">{content}</div>
      </div>
    </div>
  );
}