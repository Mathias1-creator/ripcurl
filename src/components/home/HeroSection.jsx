import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HERO_IMAGE = '/images/95b619e3b_Screenshot2026-06-02at91751PM.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left - Content */}
      <div className="relative z-10 w-full lg:w-[45%] bg-charcoal flex items-center px-8 lg:px-16 py-32 lg:py-0 min-h-[60vh] lg:min-h-screen">
        <div className="max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-6xl lg:text-7xl xl:text-8xl text-cream leading-[0.95] mb-6"
          >
            Where Vision
            <br />
            Meets Nature
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-48 h-px bg-gold origin-left mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-body text-lg text-cream/50 leading-relaxed mb-10 max-w-md"
          >
            3D landscape design plans and estate garden consultation backed by 25 years of expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link
              to="/portfolio"
              className="px-8 py-3.5 border border-cream/40 text-cream font-body text-sm tracking-wide hover:bg-cream/10 transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-sage text-cream font-body text-sm tracking-wide hover:bg-sage/80 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-cream/30 text-xs font-body uppercase tracking-[2px]"
          >
            <span>25 Years Experience</span>
            <span className="text-gold">·</span>
            <span>Estate Specialists</span>
            <span className="text-gold">·</span>
            <span>Sustainable Design</span>
          </motion.div>
        </div>
      </div>

      {/* Right - Image */}
      <div className="relative w-full lg:w-[55%] min-h-[50vh] lg:min-h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGE}
            alt="Straits Side — front perspective 3D landscape render by Rip Curl Gardens"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-charcoal/20" />
        </motion.div>
      </div>
    </section>
  );
}