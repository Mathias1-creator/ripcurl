import React from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

const TESTIMONIALS = [
  {
    quote: "Karl was an incredible partner in helping us design a planting plan for our gardens. He listened to our wants and plants we loved, was clear with us when he thought something wouldn't work, and produced a design in a very short timeframe reflecting what he heard from us. He came across as a deep expert in plants along with specifics about what would work best in a Pacific Northwest seaside climate with strong deer pressure. The professional software program he uses along with Google Maps, City and County parcel information as well as photos and videos from us in conjunction with a couple Zoom meetings made the process very seamless even from afar. The ease of working with Karl, his expertise, reliability, and his follow-up ability to do what he says he is going to do results in us recommending him to others with no reservation.",
    attribution: "Carin — Port Townsend, WA",
  },
  {
    quote: "I was a recent client of Karl and Rip Curl Gardens and I could not be more pleased with the results. Karl and his staff were prompt, professional, and very successful in providing me with the gardens of my dreams. With only sketchy outlines of what I envisioned, the selection of plants and their distribution on my property was exceptionally well done. Well over 100 plants were brought to my land and here, several months later, every one has not just survived but thrived, spread, many already sprouting offspring of their own, flowering and leafing out in abundance. I could not be more pleased with what Rip Curl Gardens provided for me, and at a very reasonable cost. I am also grateful for the follow-up service Karl provided making several after-planting visits to be sure all was well. That level of service seems so rare in the world of today and it is so refreshing to find it still exists. I cannot recommend Rip Curl Gardens more enthusiastically.",
    attribution: "Rob Lindsay — Santa Barbara, CA",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-forest py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <h2 className="font-heading text-4xl lg:text-5xl text-cream text-center mb-16">
            What Our Clients Say
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div
                className="p-10 border border-sage/30 rounded-sm"
                style={{
                  background: 'rgba(64, 145, 108, 0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <StarRow />
                <p className="font-heading text-lg italic text-cream/80 leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <p className="font-body text-gold text-xs uppercase tracking-[3px]">
                  {t.attribution}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}