import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import ScrollReveal from '../components/shared/ScrollReveal';

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream pt-20">

      {/* ── Hero Banner ───────────────────────────────────── */}
      <div className="bg-forest py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-gold text-xs font-body uppercase tracking-[4px] mb-4">Get in Touch</p>
            <h1 className="font-heading text-5xl lg:text-7xl text-cream leading-tight mb-4">
              Let's Create Your<br />Dream Garden
            </h1>
            <div className="w-20 h-px bg-gold mt-6" />
          </ScrollReveal>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

          {/* Left — Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal>

              {/* Headshot */}
              <div className="flex flex-col items-start mb-12">
                <img
                  src="/images/6ab63ca55_IMG_77012.jpeg"
                  alt="Karl Rider"
                  className="object-cover mb-5"
                  style={{ width: 220, borderRadius: 8 }}
                />
                
                <p className="font-heading text-charcoal" style={{ fontSize: 22 }}>Karl Rider</p>
                <p className="font-body text-charcoal/40 text-xs uppercase tracking-widest mt-1">Principal Designer & Founder</p>
              </div>

              <p className="font-body text-charcoal/60 text-base leading-relaxed mb-10">
                Ready to transform your outdoor space? Reach out directly or fill out the form — Karl personally responds to every inquiry.
              </p>

              <div className="w-12 h-px bg-gold mb-10" />

              <div className="space-y-6 text-sm font-body">
                <a href="tel:8056991908" className="flex items-center gap-4 text-charcoal/70 hover:text-charcoal transition-colors">
                  <Phone size={18} className="text-sage flex-shrink-0" />
                  (805) 699-1908
                </a>
                <a href="mailto:karl@ripcurlgardens.com" className="flex items-center gap-4 text-charcoal/70 hover:text-charcoal transition-colors">
                  <Mail size={18} className="text-sage flex-shrink-0" />
                  karl@ripcurlgardens.com
                </a>
                <div className="flex items-center gap-4 text-charcoal/70">
                  <MapPin size={18} className="text-sage flex-shrink-0" />
                  38 Rip Curl Place, Goleta, CA
                </div>
                <div className="flex items-center gap-4 text-charcoal/70">
                  <Globe size={18} className="text-sage flex-shrink-0" />
                  Serving West &amp; East Coast
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.15}>
              <div className="mb-8">
                <p className="text-sage text-xs font-body uppercase tracking-[4px] mb-3">Start Your Project</p>
                <h2 className="font-heading text-3xl lg:text-4xl text-charcoal mb-2">Fill Out the Form Below</h2>
                <p className="font-body text-charcoal/50 text-sm">Tell us about your property and vision — we'll take it from there.</p>
              </div>

              <div className="bg-white rounded-sm shadow-sm border border-charcoal/5 overflow-hidden">
                {import.meta.env.VITE_PREVIEW_BUILD ?
                /* The shareable preview can't load third-party embeds, so the
                   Tally form is stood in for. The live site renders the iframe. */
                <div
                  className="flex flex-col items-center justify-center text-center px-8"
                  style={{ minHeight: 720 }}>
                    <p className="text-sage text-xs font-body uppercase tracking-[4px] mb-3">Contact Form</p>
                    <h3 className="font-heading text-2xl text-charcoal mb-2">Live on the published site</h3>
                    <p className="font-body text-charcoal/50 text-sm max-w-xs">
                      The Tally form is embedded here. It's hidden in this preview because
                      shared previews can't load third-party embeds.
                    </p>
                  </div> :

                <iframe
                  src="https://tally.so/embed/EkMEdL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  style={{ minHeight: 720, border: 'none', display: 'block' }}
                  title="Contact Form" />
                }
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>);

}