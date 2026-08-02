import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';
import SectionLabel from '../shared/SectionLabel';

// Image 1 — Front right perspective render (Straits Side)
const RENDER_RIGHT = '/images/e96e97beb_Screenshot2026-05-16at100105AM.jpg';
// Image 2 — Softscape reference plan (Straits Side)
const SOFTSCAPE_PLAN = '/images/8ff80c98d_Screenshot2026-05-16at100126AM.jpg';

export default function DesignShowcase() {
  return (
    <section className="bg-charcoal py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel className="text-center">Our Difference</SectionLabel>
            <h2 className="font-heading text-4xl lg:text-6xl text-cream mb-6">
              See Your Garden Before It's Built
            </h2>
            <p className="font-body text-sage text-lg leading-relaxed">
              Our 3D modeling lets you visualize every plant, hardscape element, and site furnishing — and change anything until it's exactly right.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* Front right perspective render */}
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
              <img src="/images/f65e9ac0e_Screenshot2026-05-16at100143AM.jpg"

              alt="Straits Side — front right perspective 3D render"
              className="w-full h-full object-cover object-[center_35%] hover:scale-105 transition-transform duration-700" />
              
            </div>
            {/* Front left perspective render — crop to bottom half of image */}
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
              <img
                src={RENDER_RIGHT}
                alt="Straits Side — front left perspective 3D render"
                className="w-full h-full object-cover object-[center_75%] hover:scale-105 transition-transform duration-700" />
              
            </div>
            {/* Softscape plan */}
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl border border-gold/40">
              <img
                src={SOFTSCAPE_PLAN}
                alt="Straits Side — softscape reference plan with plant list"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <p className="font-heading text-xl lg:text-2xl text-cream/80 italic mb-8">
              We have used AI to generate images to retain confidentiality of our clients. Embrace AI to spark the creative process, we can translate these visions to reality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-gold font-body text-sm tracking-wide hover:gap-4 transition-all duration-300 border-b border-gold/30 pb-1">
              
              Start Your Design <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>);

}