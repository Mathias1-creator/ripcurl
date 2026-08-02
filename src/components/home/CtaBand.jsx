import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';

export default function CtaBand() {
  return (
    <section className="bg-sage py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl lg:text-5xl text-cream mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="font-body text-cream/70 text-lg mb-10">
            Contact us to discuss your project. Serving West &amp; East Coast.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-charcoal text-cream font-body text-sm tracking-wide hover:bg-charcoal/80 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}