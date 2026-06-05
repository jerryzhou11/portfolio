import React, { useEffect, useState } from 'react';
import { isTouchDevice } from './DPad.jsx';

// On a touch device held in portrait, the cabinet is short and cramped. Nudge
// the visitor to turn the phone sideways for the full-width arcade view. Shown
// in the black margin above the cabinet; hides itself the moment it's landscape
// (or on any non-touch device, where orientation is moot).
export default function RotateHint() {
  const [portrait, setPortrait] = useState(false);

  useEffect(() => {
    if (!isTouchDevice()) return;
    const check = () => {
      const isPortrait =
        typeof window !== 'undefined' && window.matchMedia
          ? window.matchMedia('(orientation: portrait)').matches
          : window.innerHeight > window.innerWidth;
      setPortrait(isPortrait);
    };
    check();
    window.addEventListener('resize', check);
    window.addEventListener('orientationchange', check);
    return () => {
      window.removeEventListener('resize', check);
      window.removeEventListener('orientationchange', check);
    };
  }, []);

  if (!portrait) return null;

  return (
    <div className="fixed top-3 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <div className="flex items-center gap-2 rounded-full border border-neon/60 bg-black/80 px-5 py-2.5 text-neon font-pixelify text-sm sm:text-base shadow-lg">
        <span className="inline-block animate-spin-slow" aria-hidden>↻</span>
        Rotate your phone to landscape for the full view
      </div>
      <style>{`
        @keyframes spinSlow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        .animate-spin-slow { animation: spinSlow 2.4s linear infinite; }
      `}</style>
    </div>
  );
}
