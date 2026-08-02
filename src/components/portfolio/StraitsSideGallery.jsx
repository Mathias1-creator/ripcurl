import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  {
    src: '/images/4d9a77d18_Screenshot2026-06-01at113525AM.jpg',
    label: 'Cover Sheet & Materials Plan',
  },
  {
    src: '/images/30a03b388_Screenshot2026-06-01at113531AM.jpg',
    label: 'Site Softscape Reference Plan',
  },
  {
    src: '/images/8dcb1bb84_Screenshot2026-06-01at113536AM.jpg',
    label: 'Plant Key Plan',
  },
  {
    src: '/images/67e7dfbcb_Screenshot2026-06-01at113541AM.jpg',
    label: 'Trees Plan',
  },
  {
    src: '/images/0b5f9eb39_Screenshot2026-06-01at113547AM.jpg',
    label: 'Shrubs Plan',
  },
  {
    src: '/images/55df91f43_Screenshot2026-06-01at113553AM.jpg',
    label: 'Perennials Plan',
  },
  {
    src: '/images/a7777079f_Screenshot2026-06-01at113558AM.jpg',
    label: 'Bulbs Plan',
  },
  {
    src: '/images/bd96351bf_Screenshot2026-06-01at113603AM.jpg',
    label: 'Grasses & Grass-Like Plants',
  },
  {
    src: '/images/28e42e89d_Screenshot2026-06-01at113608AM.jpg',
    label: 'Softscape Key',
  },
  {
    src: '/images/d20ccc7be_Screenshot2026-06-01at113614AM.jpg',
    label: 'Front Perspectives',
  },
  {
    src: '/images/d866e89af_Screenshot2026-06-01at113620AM.jpg',
    label: 'Rear Perspectives',
  },
];

export default function StraitsSideGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {IMAGES.map((img, i) => (
          <div key={i} className="flex flex-col">
            <div
              className="overflow-hidden rounded-sm shadow-xl cursor-pointer"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full object-cover transition-all duration-500 hover:scale-[1.02] hover:brightness-75"
              />
            </div>
            <p className="text-xs font-body uppercase tracking-[2px] text-charcoal/50 mt-2 text-center">
              {img.label}
            </p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-4 lg:p-10"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="w-full object-contain max-h-[80vh] rounded-sm shadow-2xl"
              />
              <p className="text-center text-cream/60 text-xs font-body uppercase tracking-[2px] mt-4">
                {lightbox.label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}