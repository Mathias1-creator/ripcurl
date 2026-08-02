import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  {
    src: '/images/447eb5bca_Screenshot2026-06-01at105236AM.jpg',
    label: 'Planting Concept Overview',
  },
  {
    src: '/images/df3d9ff29_Screenshot2026-06-01at105246AM.jpg',
    label: 'Site Hardscape Reference Plan',
  },
  {
    src: '/images/e97d34280_Screenshot2026-06-01at105318AM.jpg',
    label: 'Site Softscape Reference Plan',
  },
  {
    src: '/images/ac348a478_Screenshot2026-06-01at105328AM.jpg',
    label: '3D Perspective Renders',
  },
  {
    src: '/images/c05f4c43c_Screenshot2026-06-01at105339AM.jpg',
    label: 'Conceptual Irrigation Zone Layout',
  },
  {
    src: '/images/ab0ea7e27_Screenshot2026-06-01at105352AM.jpg',
    label: 'Irrigation As-Built Plan',
  },
  {
    src: '/images/09504b3b0_Screenshot2026-06-01at105401AM.jpg',
    label: 'Tree Overview Plan',
  },
  {
    src: '/images/c583a0112_Screenshot2026-06-01at105409AM.jpg',
    label: 'Tree Planting Perspectives',
  },
  {
    src: '/images/83b959928_Screenshot2026-06-01at105418AM.jpg',
    label: 'Under-Oak Planting Detail',
  },
  {
    src: '/images/fa51a4169_Screenshot2026-06-01at105426AM.jpg',
    label: 'Pool Planting Detail',
  },
];

export default function CreeksideGallery() {
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

      {/* Lightbox */}
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