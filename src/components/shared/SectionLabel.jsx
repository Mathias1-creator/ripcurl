import React from 'react';

export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`text-gold text-xs font-body uppercase tracking-[4px] mb-4 ${className}`}>
      {children}
    </p>
  );
}