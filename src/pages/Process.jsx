import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import ScrollReveal from '../components/shared/ScrollReveal';

const STAGES = [
  {
    number: '01',
    title: 'Preliminary Design & Conceptualization',
    price: 'Conceptual Design Plans — Starting at $1,000',
    description:
      'The first stage is about translating your vision into a clear and functional design concept. We work together to understand your needs, analyse the site, and develop a comprehensive design direction that guides the entire project.',
    deliverables: [
      'Initial consultation & site analysis — measurements, photos, sun/shade patterns, soil, existing structures',
      'Site Analysis Documentation — scaled PDF drawings of current site conditions',
      'Conceptual Design Plan — general layout showing patios, walkways, garden beds, and larger trees',
      'Try before you plant. Use our digital libraries to virtually place and preview plants in your landscape before you buy or dig.',
    ],
  },
  {
    number: '02',
    title: 'Detailed Design & Final Master Plan',
    price: 'Final Build-Ready Documents — $3,000–$5,000',
    description:
      'Building upon the approved preliminary design, this stage finalises all the details necessary for professional installation and contractor bidding.',
    deliverables: [
      'Final Master Plan — scaled drawing specifying all hardscape and planting area dimensions',
      'Planting Plan — specific plants with location, quantity, size, and care instructions',
      'Material Selection & Specifications — pavers, decking, retaining walls, and more',
      'One round of revisions to ensure the design fully meets your expectations',
    ],
  },
];

export default function Process() {
  return (
    <>
      <PageHeader
        heading="Our Process"
        subtext="A transparent, two-stage design process — from first concept to contractor-ready plans."
        bgClass="bg-forest"
      />

      {/* Stages */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="space-y-20">
            {STAGES.map((stage, i) => (
              <ScrollReveal key={stage.number} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start border-t border-charcoal/10 pt-12">
                  {/* Left */}
                  <div>
                    <p className="font-heading text-7xl text-gold/30 leading-none mb-2">{stage.number}</p>
                    <h2 className="font-heading text-2xl lg:text-3xl text-charcoal leading-tight mb-4">
                      {stage.title}
                    </h2>
                    <div className="inline-block bg-forest text-cream font-body text-lg px-5 py-2 mb-2">
                      {stage.price}
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <p className="font-body text-charcoal/70 leading-relaxed mb-8">{stage.description}</p>
                    <ul className="space-y-4">
                      {stage.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 font-body text-sm text-charcoal/60">
                          <span className="text-gold mt-0.5 shrink-0">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Total Investment */}
          <ScrollReveal delay={0.3}>
            <div className="mt-20 border-t border-charcoal/10 pt-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <p className="text-gold text-xs font-body uppercase tracking-[4px] mb-2">Total Investment</p>
                <p className="font-heading text-3xl lg:text-4xl text-charcoal leading-snug">Conceptual Design Plans — Starting at $1,000</p>
                <p className="font-heading text-3xl lg:text-4xl text-charcoal leading-snug mt-1">Final Build-Ready Documents — $3,000–$5,000</p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 px-10 py-4 bg-sage text-cream font-body text-sm tracking-wide hover:bg-sage/80 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-gold text-xs font-body uppercase tracking-[4px] mb-4">What you walk away with</p>
            <h2 className="font-heading text-4xl lg:text-5xl text-cream mb-10">
              Everything you need to build your dream garden.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-body text-cream/60 leading-relaxed max-w-2xl">
              The final design package from Stage 2 is all you need to get quotes from contractors and begin the installation process — a complete set of scaled, bid-ready drawings with full plant lists, material specifications, and one round of revisions included.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}