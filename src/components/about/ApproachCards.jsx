import React from 'react';
import { Target, Gem, Leaf, Users } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

const APPROACHES = [
  {
    icon: Target,
    title: 'Strategic Planning',
    desc: 'A thoughtful plan sets the foundation for every project, shaped by your vision and the unique conditions of your property. We consider how the landscape will grow and evolve over time, not just how it looks on day one.',
  },
  {
    icon: Gem,
    title: 'Quality & Craftsmanship',
    desc: 'We approach every detail with care, from plant selection to installation, working with trusted partners to ensure the landscape is executed with precision and built to last.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Our work is guided by natural systems. We design with water use, soil health, and plant ecology in mind, creating landscapes that are resilient, balanced, and enduring.',
  },
  {
    icon: Users,
    title: 'Client Collaboration',
    desc: 'We see each project as a partnership. Through close communication and a shared vision, we create landscapes that feel personal, intentional, and deeply connected to how you live.',
  },
];

export default function ApproachCards() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p className="text-gold text-xs font-body uppercase tracking-[4px] mb-4 text-center">Our Approach</p>
          <h2 className="font-heading text-4xl lg:text-5xl text-charcoal text-center mb-16">
            How We Work
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {APPROACHES.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="bg-white p-8 border border-charcoal/5 hover:-translate-y-2 transition-transform duration-500">
                <item.icon size={28} className="text-sage mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="font-body text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}