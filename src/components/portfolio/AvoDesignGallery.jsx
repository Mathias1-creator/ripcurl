import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  {
    src: '/images/20d548d16_avo_design_plan_01.png',
    label: 'Site Softscape Reference Plan',
  },
  {
    src: '/images/e428e1768_avo_design_plan_02.png',
    label: 'Site Hardscape Reference Plan',
  },
  {
    src: '/images/9eb39c607_avo_design_plan_03.png',
    label: 'Site Irrigation Reference Plan',
  },
  {
    src: '/images/114de3984_avo_design_plan_04.png',
    label: 'Site Lighting Plan',
  },
  {
    src: '/images/77effbfa0_avo_design_plan_05.png',
    label: 'Site Tree Plan',
  },
];

export default function AvoDesignGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={i === IMAGES.length - 1 ? 'flex flex-col md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto' : 'flex flex-col'}
          >
            <div
              className="overflow-hidden rounded-sm shadow-xl cursor-pointer bg-cream"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full object-cover transition-all duration-500 hover:scale-[1.02] hover:brightness-90"
              />
            </div>
            <p className="text-xs font-body uppercase tracking-[2px] text-cream/40 mt-2 text-center">
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
                className="w-full object-contain max-h-[80vh] rounded-sm shadow-2xl bg-cream"
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
