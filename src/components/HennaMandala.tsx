import React from 'react';

interface HennaMandalaProps {
  className?: string;
}

export const HennaMandala: React.FC<HennaMandalaProps> = ({ className = 'w-24 h-24 text-[#D4AF37]' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      {/* Outer decorative ring */}
      <circle cx="50" cy="50" r="46" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
      <circle cx="50" cy="50" r="42" strokeWidth="1" opacity="0.8" />
      <circle cx="50" cy="50" r="38" strokeWidth="0.75" opacity="0.7" />

      {/* 8-Petal Outer Flower */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          {/* Main pointed petal */}
          <path
            d="M50 14 C44 26 42 34 50 38 C58 34 56 26 50 14 Z"
            strokeWidth="0.9"
            fill="rgba(212, 175, 55, 0.08)"
          />
          {/* Petal vein */}
          <line x1="50" y1="20" x2="50" y2="36" strokeWidth="0.6" opacity="0.7" />
          {/* Teardrop tip */}
          <circle cx="50" cy="10" r="1.5" fill="currentColor" />
          {/* Mini accent dots */}
          <circle cx="45" cy="28" r="0.8" fill="currentColor" opacity="0.7" />
          <circle cx="55" cy="28" r="0.8" fill="currentColor" opacity="0.7" />
        </g>
      ))}

      {/* Middle concentric ring */}
      <circle cx="50" cy="50" r="26" strokeWidth="1" opacity="0.9" />
      <circle cx="50" cy="50" r="23" strokeWidth="0.7" strokeDasharray="1.5 1.5" />

      {/* 8 Inner Scalloped Lotus Petals */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M50 26 C46 32 46 38 50 42 C54 38 54 32 50 26 Z"
            strokeWidth="0.8"
            fill="rgba(212, 175, 55, 0.12)"
          />
          <circle cx="50" cy="23" r="1.2" fill="currentColor" />
        </g>
      ))}

      {/* Inner Central Flower Core */}
      <circle cx="50" cy="50" r="14" strokeWidth="1" fill="rgba(6, 20, 52, 0.8)" />
      <circle cx="50" cy="50" r="9" strokeWidth="0.7" strokeDasharray="1 1" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />

      {/* Micro radiating rays from center */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="50"
          x2={50 + 8 * Math.cos((angle * Math.PI) / 180)}
          y2={50 + 8 * Math.sin((angle * Math.PI) / 180)}
          strokeWidth="0.5"
          opacity="0.8"
        />
      ))}
    </svg>
  );
};
