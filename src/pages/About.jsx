import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ScrollReveal from '../components/shared/ScrollReveal';
import StatsCounter from '../components/about/StatsCounter';
import ApproachCards from '../components/about/ApproachCards';

const ABOUT_IMAGE = '/images/c44cd8952_generated_26c40d4d.jpg';

export default function About() {
  return (
    <>
      <PageHeader
        heading="About Rip Curl Gardens"
        subtext="Where 25 years of expertise meets a passion for transforming land into living art."
        bgClass="bg-cream"
        light />
      

      {/* Story Section */}
      <section className="bg-cream pb-24 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/images/b3a0c91e8_landon-parenteau-7SUEBcb4qXU-unsplash.jpg"

                alt="Formal estate garden with reflecting pool at dusk"
                className="w-full h-full object-cover" />
                
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="w-12 h-px bg-gold mb-8" />
              <h2 className="font-heading text-4xl lg:text-5xl text-charcoal mb-8">
                Cultivating Beauty, Naturally
              </h2>
              <div className="space-y-6 font-body text-charcoal/70 leading-relaxed">
                <p>
                  Rip Curl Gardens is a premium landscape design consultancy founded by Karl Rider, bringing over 25 years of hands-on experience managing and designing estate-level properties across the West and East Coasts.
                </p>
                <p>
                  We believe every landscape should honor the natural environment while fulfilling our clients' vision for beauty, functionality, and long-term value — from French-inspired formal gardens to native habitat restorations.
                </p>
                <p>
                  Every project begins with a conversation. We visit your site, understand your goals, and develop a tailored proposal. From there, our design process translates the character of your land into a detailed plan covering design, implementation, and budget.
                </p>
                <p>
                  Throughout installation we remain closely involved, ensuring the work is executed with care and fidelity to the vision. Once complete, we provide as-built plans, irrigation guidance, and maintenance documentation so your landscape continues to thrive.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <StatsCounter />
      <ApproachCards />
    </>);

}