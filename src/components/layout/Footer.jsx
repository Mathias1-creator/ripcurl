import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <img
              src="/images/80b339ccc_rip_curl_gardens_logo.png"
              alt="Rip Curl Gardens"
              className="h-14 w-auto mb-3"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-cream/60 font-body text-sm italic">
              Cultivating Beauty, Naturally
            </p>
            <div className="w-16 h-px bg-gold mt-6" />
          </div>

          {/* Navigation */}
          <div>
            <p className="text-gold text-xs font-body uppercase tracking-[3px] mb-6">
              Navigation
            </p>
            <div className="space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-cream/70 hover:text-cream transition-colors font-body text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold text-xs font-body uppercase tracking-[3px] mb-6">
              Contact
            </p>
            <div className="space-y-4 text-sm font-body">
              <a href="tel:8056991908" className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors">
                <Phone size={16} className="text-gold" />
                (805) 699-1908
              </a>
              <a href="mailto:karl@ripcurlgardens.com" className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors">
                <Mail size={16} className="text-gold" />
                karl@ripcurlgardens.com
              </a>
              <div className="flex items-center gap-3 text-cream/70">
                <MapPin size={16} className="text-gold flex-shrink-0" />
                38 Rip Curl Place, Goleta, CA
              </div>
              <p className="text-cream/70 text-sm font-body pl-7">CA Contractors License #1153391</p>

            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-16 pt-8 text-center">
          <p className="text-cream/40 text-xs font-body tracking-wide">
            © 2025 Rip Curl Gardens. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}