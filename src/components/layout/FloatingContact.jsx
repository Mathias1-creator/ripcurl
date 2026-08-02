import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function FloatingContact() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-forest text-cream rounded-full flex items-center justify-center shadow-2xl animate-gentle-pulse hover:scale-110 transition-transform duration-300"
      aria-label="Contact Karl Rider"
    >
      <Leaf size={22} />
    </Link>
  );
}