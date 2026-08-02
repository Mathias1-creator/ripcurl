import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ScrollMarquee from '../components/home/ScrollMarquee';
import WhatWeDo from '../components/home/WhatWeDo';
import DesignShowcase from '../components/home/DesignShowcase';
import PastProjects from '../components/home/PastProjects';
import Differentiator from '../components/home/Differentiator';
import CtaBand from '../components/home/CtaBand';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollMarquee />
      <WhatWeDo />
      <DesignShowcase />
      <PastProjects />
      <Differentiator />
      <Testimonials />
      <CtaBand />
    </>
  );
}