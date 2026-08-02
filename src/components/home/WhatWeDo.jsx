import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';
import SectionLabel from '../shared/SectionLabel';

const SERVICES = [
  {
    num: '01',
    title: '3D Landscape Design',
    desc: 'We generate stunning 3D landscape design plans — bid-ready documents that empower clients to present to contractors with confidence. See your garden before a single plant goes in the ground.',
  },
  {
    num: '02',
    title: 'Water & Irrigation Planning',
    desc: 'Smart water use calculations, budgeting, and irrigation system planning grounded in WULCOS guidelines and 25 years of hands-on water management expertise.',
  },
  {
    num: '03',
    title: 'Habitat Restoration',
    desc: 'Native plant integration, invasive species management, wetland restoration, and fire risk mitigation — we restore land to its natural beauty while protecting your property.',
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <ScrollReveal>
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-heading text-4xl lg:text-6xl text-charcoal leading-tight mb-6">
              Transforming estates of all sizes, one garden at a time.
            </h2>
            <p className="font-body text-charcoal/60 leading-relaxed mb-8 max-w-md">
              At Rip Curl Gardens, we believe in creating and maintaining stunning outdoor spaces that blend seamlessly with nature. With over two decades of experience in estate management, landscape design, and horticulture, we bring unparalleled expertise to every project. From intricate garden designs to expansive wild-land restorations, our passion lies in transforming environments into vibrant, sustainable havens. Our approach combines strategic planning with a deep understanding of ecological principles, ensuring that your garden not only looks beautiful but also thrives. We specialize in designing, managing construction of, and maintaining diverse landscapes — including formal gardens, natural woodlands, orchards, and specialized plant collections. From 3D visualization to habitat restoration, we deliver estate-level landscape solutions that honor both your vision and the natural environment.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sage font-body text-sm tracking-wide hover:gap-4 transition-all duration-300"
            >
              View All Services <span>→</span>
            </Link>
          </ScrollReveal>

          {/* Right - Service Cards */}
          <div className="space-y-8">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.num} delay={i * 0.15}>
                <div className="relative border-l-2 border-gold pl-8 py-6 group hover:-translate-y-1 transition-transform duration-500">
                  <span className="absolute -left-4 top-0 font-heading text-8xl text-charcoal/5 leading-none select-none">
                    {service.num}
                  </span>
                  <p className="text-gold text-xs font-body uppercase tracking-[3px] mb-2">
                    {service.num}
                  </p>
                  <h3 className="font-heading text-2xl lg:text-3xl text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-charcoal/60 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}