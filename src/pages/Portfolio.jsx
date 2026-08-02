import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ProjectSection from '../components/portfolio/ProjectSection';
import ScrollReveal from '../components/shared/ScrollReveal';
import CreeksideGallery from '../components/portfolio/CreeksideGallery';
import StraitsSideGallery from '../components/portfolio/StraitsSideGallery';

const OTHER_PROJECTS = [
  {
    name: 'Montecito Estate Garden',
    location: 'Montecito, CA',
    acreage: '29 acres',
    description: 'Managed a team of 5 to maintain 7 acres of French-inspired gardens with a Mediterranean plant palette, and restored 10 acres of chaparral scrub and oak woodlands. Implemented smart irrigation systems and water conservation strategies.',
    bullets: [
      'French-inspired formal gardens',
      'Mediterranean plant palette',
      'Chaparral & oak woodland restoration',
      'Smart irrigation implementation',
    ],
    image: '/images/755c8580e_generated_a32881be.jpg',
    imageAlt: 'Montecito Estate formal gardens',
  },
  {
    name: 'Rock Cobble Farm',
    location: 'California',
    acreage: '1,200 acres',
    description: 'Oversaw capital projects as Landscape Manager in landscape design, installation, and maintenance, as well as comprehensive financial management. As Greenhouse Manager, maintained diverse plant collections and managed all aspects of greenhouse operations.',
    bullets: [
      'Landscape design & installation',
      'Capital projects oversight',
      'Greenhouse management',
      'Comprehensive financial management',
    ],
    image: '/images/25f85907b_generated_98119e97.jpg',
    imageAlt: 'Rock Cobble Farm expansive ranch landscape',
  },
  {
    name: 'Quaker Hill Native Plant Garden',
    location: 'East Coast',
    acreage: '200 acres',
    description: 'Managed and planted gardens and natural woodlands, with a crew of seven. Coordinated the purchase and installation of large specimen trees.',
    bullets: [
      'Native woodland management',
      'Large specimen tree installation',
      '7-person crew coordination',
      'Garden & natural areas planting',
    ],
    image: '/images/60cdb1323_generated_b1c87043.jpg',
    imageAlt: 'Quaker Hill native woodland garden',
  },
  {
    name: 'Meadowbrook Farm / Pennsylvania Horticultural Society',
    location: 'Pennsylvania',
    acreage: '20 acres',
    description: 'Focused on perennial production and the creation and maintenance of formal and natural display gardens. Forcing and displaying plant materials for the Philadelphia Flower Show.',
    bullets: [
      'Perennial production',
      'Formal & natural display gardens',
      'Philadelphia Flower Show displays',
      'Plant material forcing & display',
    ],
    image: '/images/b90835902_generated_ac7206a8.jpg',
    imageAlt: 'Meadowbrook Farm formal perennial gardens',
  },
];

export default function Portfolio() {
  return (
    <>
      <PageHeader
        heading="Our Work"
        subtext="Estate gardens, natural restorations, and design projects across the West and East Coast."
        bgClass="bg-forest"
      />

      {/* ── CREEKSIDE FEATURE PROJECT ─────────────────────── */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Project Label */}
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-gold text-xs font-body uppercase tracking-[4px] mb-3">Featured Project</p>
              <h2 className="font-heading text-4xl lg:text-6xl text-charcoal mb-2">
                Creekside Garden Design
              </h2>
              <p className="font-heading text-xl text-charcoal/50 italic">
                Goleta, CA — February 2026
              </p>
              <p className="font-body text-sm text-charcoal/40 mt-1">Designer: Karl Rider</p>
              <div className="w-20 h-px bg-gold mt-6" />
            </div>
          </ScrollReveal>

          {/* Project description */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mb-12">
              <p className="font-body text-charcoal/70 leading-relaxed text-lg">
                A complete residential landscape design for a property in Goleta, CA. Deliverables included a full native softscape reference plan with plant palette and costing, hardscape plan with pool surround and budget breakdown, conceptual irrigation zone layout with 17 zones, tree planting perspectives, pool planting details, and multiple 3D perspective renders — giving the client a complete picture of their finished garden before breaking ground.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'Full native softscape plan with plant legend and costing',
                  'Hardscape plan with pool surround layout',
                  '17-zone conceptual irrigation design',
                  '3D front and rear perspective renders',
                  'Tree planting perspectives',
                  'Pool and planting detail views',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 font-body text-sm text-charcoal/60">
                    <span className="text-gold mt-0.5">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Image Gallery */}
          <ScrollReveal delay={0.15}>
            <CreeksideGallery />
          </ScrollReveal>

        </div>
      </section>

      {/* Divider */}
      <div className="bg-charcoal h-px w-full opacity-10" />

      {/* ── CURRENT PROJECT IN PROGRESS ─────────────────────── */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-10">
              <p className="text-gold text-xs font-body uppercase tracking-[4px] mb-3">Currently in Design</p>
              <h2 className="font-heading text-4xl lg:text-6xl text-cream mb-2">Avo Garden</h2>
              <p className="font-heading text-xl text-cream/40 italic">Cumberland Drive — In Progress</p>
              <div className="w-20 h-px bg-gold mt-6" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-body text-cream/60 leading-relaxed text-lg max-w-3xl mb-10">
              Every great garden starts with a conversation. This client came to us with a clear vision — a modern, layered landscape balancing clean hardscape with lush planting, statement trees, and evening ambience. The mood board below captures the direction we're designing toward.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="overflow-hidden rounded-sm shadow-2xl">
              <img
                src="/images/8b969a4bb_Screenshot2026-06-01at112103AM.jpg"
                alt="Avo Garden mood board"
                className="w-full object-cover"
              />
            </div>
            <p className="text-xs font-body uppercase tracking-[2px] text-cream/30 mt-3 text-center">Client Mood Board — Design in Progress</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-charcoal h-px w-full opacity-10" />

      {/* ── STRAITS SIDE FEATURE PROJECT ─────────────────────── */}
      <section className="bg-cream py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-gold text-xs font-body uppercase tracking-[4px] mb-3">Featured Project</p>
              <h2 className="font-heading text-4xl lg:text-6xl text-charcoal mb-2">
                Straits Side Garden
              </h2>
              <p className="font-heading text-xl text-charcoal/50 italic">
                Port Townsend, WA
              </p>
              <p className="font-body text-sm text-charcoal/40 mt-1">Designer: Karl Rider</p>
              <div className="w-20 h-px bg-gold mt-6" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mb-12">
              <p className="font-body text-charcoal/70 leading-relaxed text-lg">
                A comprehensive residential landscape design for a rural property on the Strait of Juan de Fuca. Deliverables included a full softscape reference plan, layered planting sheets for trees, shrubs, perennials, bulbs, and grasses — each with annotated plant legends — plus a complete softscape key and multiple 3D perspective renders from front and rear.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'Cover sheet with landscape area & materials schedule',
                  'Layered planting plans: trees, shrubs, perennials, bulbs & grasses',
                  'Full softscape key with quantities and common names',
                  'Front & rear 3D perspective renders',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 font-body text-sm text-charcoal/60">
                    <span className="text-gold mt-0.5">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <StraitsSideGallery />
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-charcoal h-px w-full opacity-10" />

      {/* ── OTHER PROJECTS ───────────────────────────────────── */}
      <section className="bg-cream py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {OTHER_PROJECTS.map((project, i) => (
            <ProjectSection
              key={project.name}
              {...project}
              imageLeft={i % 2 === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}