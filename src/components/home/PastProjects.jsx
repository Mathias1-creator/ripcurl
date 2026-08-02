import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import SectionLabel from '../shared/SectionLabel';

const PROJECTS = [
  {
    name: 'Montecito Estate Garden',
    details: '29 acres · French-inspired gardens · Mediterranean plant palette · Chaparral & oak woodland restoration',
    image: '/images/755c8580e_generated_a32881be.jpg',
  },
  {
    name: 'Rock Cobble Farm',
    details: '1,200 acres · Landscape design & installation · Greenhouse management · Capital projects oversight',
    image: '/images/25f85907b_generated_98119e97.jpg',
  },
  {
    name: 'Quaker Hill Native Plant Garden',
    details: '200 acres · Native woodland management · Large specimen tree installation · 7-person crew coordination',
    image: '/images/60cdb1323_generated_b1c87043.jpg',
  },
  {
    name: 'Meadowbrook Farm',
    details: '20 acres · Pennsylvania Horticultural Society · Philadelphia Flower Show displays',
    image: '/images/b90835902_generated_ac7206a8.jpg',
  },
];

export default function PastProjects() {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-heading text-4xl lg:text-6xl text-charcoal mb-16">
            A Legacy of Extraordinary Gardens
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="font-heading text-2xl lg:text-3xl text-cream mb-2">
                    {project.name}
                  </h3>
                  <p className="font-body text-cream/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    {project.details}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}