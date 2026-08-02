import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ServiceBlock from '../components/services/ServiceBlock';
import ScrollReveal from '../components/shared/ScrollReveal';

// Image 2 — Softscape colorful site plan (Straits Side client deliverable)
const DESIGN_IMAGE = '/images/8ff80c98d_Screenshot2026-05-16at100126AM.jpg';
const IRRIGATION_IMAGE = '/images/d6be0e94c_generated_10c41835.jpg';
const RESTORATION_IMAGE = '/images/9a259f0e5_generated_21e3b6e7.jpg';
const IRRIGATION_SCHEDULE_IMAGE = '/images/bb468d0ba_Screenshot2026-06-01at102608AM.jpg';

export default function Services() {
  return (
    <>
      <PageHeader
        heading="Our Services"
        subtext="Rip Curl Gardens offers a comprehensive suite of services, drawing on extensive experience in all aspects of landscape and garden management."
        bgClass="bg-charcoal"
      />

      <ServiceBlock
        title="3D Landscape Design & Consultation"
        description="From concept to completion, we design and manage installation of breathtaking natural and formal landscapes. Our deliverables are bid-ready documents that allow clients to present to multiple contractors with confidence — and visualize every hardscape element, plant selection, and site furnishing before breaking ground."
        bullets={[
          'Full 3D landscape modeling',
          'Plant material sourcing & selection',
          'Bid-ready contractor documents',
          'Hardscape & site furnishing visualization',
          'Ability to swap materials in real time',
          'Formal & natural garden design',
        ]}
        image={DESIGN_IMAGE}
        imageAlt="Straits Side softscape reference plan — a real Rip Curl Gardens client deliverable"
        imageCaption="A real client deliverable — full softscape plan with plant selection, quantities, and costing included."
        bgClass="bg-cream"
        textClass="text-charcoal"
        imageLeft={false}
      />

      {/* Design Package Deliverables Callout */}
      <section className="bg-cream border-t border-charcoal/10 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-gold text-xs font-body uppercase tracking-[4px] mb-3">What You Receive</p>
            <h3 className="font-heading text-3xl lg:text-4xl text-charcoal mb-3">Your Landscape Master Plan Package</h3>
            <p className="font-body text-charcoal/60 max-w-2xl mb-10 leading-relaxed">
              Every design engagement delivers a complete, professional package — giving you full clarity before a single hole is dug, and everything your contractor needs to price and execute the work.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Site Softscape Reference Plans',
                desc: 'Detailed, scaled layouts (1/8″ = 1′-0″) of your property\'s future greenery — precisely placed.',
              },
              {
                title: 'Comprehensive Plant Legends',
                desc: 'Precise botanical and common names, quantities, and specific varieties for every plant in the design.',
              },
              {
                title: 'Specialised Material Schedules',
                desc: 'Accurate area and volume calculations for turf, mulch, and garden beds to simplify contractor quotes.',
              },
              {
                title: 'Multi-Angle Perspectives',
                desc: 'Detailed sketches from front, rear, and side angles so you can visualise the finished result before work begins.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="border border-charcoal/10 p-6 bg-white/60">
                  <div className="w-6 h-px bg-gold mb-4" />
                  <h4 className="font-heading text-xl text-charcoal mb-2">{item.title}</h4>
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceBlock
        title="Water Use & Irrigation Planning"
        description="Smart irrigation isn't just about efficiency — it's about creating landscapes that thrive. We calculate water use budgets, design irrigation systems aligned with WULCOS guidelines, and implement conservation strategies that protect both your investment and the environment."
        bullets={[
          'Precision zone-by-zone flow rate analysis (GPM)',
          'Exact run-time calculations per zone',
          'Rainfall equivalency tracking (inches/week)',
          '12-month seasonal controller adjustment schedule',
          'Annual water budgeting & cost projections',
          'WULCOS-aligned conservation strategies',
        ]}
        image={IRRIGATION_IMAGE}
        imageAlt="Professional irrigation system in estate garden"
        bgClass="bg-charcoal"
        textClass="text-cream"
        imageLeft={true}
      />

      {/* Irrigation Schedule Sample Deliverable */}
      <section className="bg-charcoal py-16 lg:py-24 border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-gold text-xs font-body uppercase tracking-[4px] mb-3">Sample Deliverable</p>
            <h3 className="font-heading text-3xl lg:text-4xl text-cream mb-4">Client-Specific Irrigation Schedule</h3>
            <p className="font-body text-cream/60 max-w-2xl mb-10 leading-relaxed">
              Every irrigation design includes a personalised, zone-by-zone water use schedule — detailing flow rates, run times, monthly gallons, seasonal adjustments, and yearly cost. Clients walk away knowing exactly how their system should perform.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="border border-gold/20 rounded-sm shadow-2xl overflow-hidden">
              <img
                src={IRRIGATION_SCHEDULE_IMAGE}
                alt="Client-specific irrigation schedule showing zone flow rates, monthly usage, and seasonal adjustments"
                className="w-full object-cover"
              />
            </div>
            <p className="text-xs font-body italic text-cream/30 text-center mt-3">
              A real client deliverable — zone-by-zone water use, seasonal controller adjustments, and yearly cost included.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ServiceBlock
        title="Habitat Restoration & Sustainable Practices"
        description="We are committed to environmentally responsible methods. We restore land to ecological health using native plants, invasive species management, and proven restoration methods. From chaparral scrub to oak woodlands and wetlands, we bring expertise that few landscape firms can match."
        bullets={[
          'Native plant nursery & propagation',
          'Invasive species identification & removal',
          'Chaparral & oak woodland restoration',
          'Wetland restoration planning',
          'Fire risk mitigation & vegetation management',
          'Ecological balance planning',
        ]}
        image={RESTORATION_IMAGE}
        imageAlt="Native California habitat restoration"
        bgClass="bg-forest"
        textClass="text-cream"
        imageLeft={false}
      />
    </>
  );
}