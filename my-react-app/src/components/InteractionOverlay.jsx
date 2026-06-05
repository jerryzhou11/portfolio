import React from 'react';
import CRTText from './CRTText.jsx';

// In-world popup shown when the player interacts with a piece of work.
// Minimal text, big PLAY button straight to the real thing.
export default function InteractionOverlay({ data, onClose, enableEffects = true }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="relative z-10 w-full max-w-md rounded-2xl border-2 border-neon bg-purple/95 p-7 sm:p-8 text-center font-pixelify animate-overlay-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {data.thumb && (
          <img
            src={data.thumb}
            alt=""
            className="mx-auto mb-5 h-24 sm:h-28 w-auto"
            style={{ imageRendering: 'pixelated' }}
          />
        )}
        <div className="text-3xl sm:text-4xl mb-3">
          <CRTText isEnabled={enableEffects}>{data.title}</CRTText>
        </div>
        {data.blurb && (
          <div className="text-lg sm:text-xl text-gray-200 mb-7 leading-relaxed">
            <CRTText.Span isEnabled={enableEffects}>{data.blurb}</CRTText.Span>
          </div>
        )}
        {data.href ? (
          <a
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-4 rounded-xl bg-neon text-black text-2xl font-bold hover:bg-pink hover:text-white transition-colors"
          >
            {data.playLabel || 'PLAY ▶'}
          </a>
        ) : (
          // No link (e.g. the welcome sign): the button just dismisses the overlay.
          <button
            onClick={onClose}
            className="inline-block px-9 py-4 rounded-xl bg-neon text-black text-2xl font-bold hover:bg-pink hover:text-white transition-colors"
          >
            {data.playLabel || 'OK'}
          </button>
        )}
        {data.href && (
          <button
            onClick={onClose}
            className="block mx-auto mt-6 text-sm text-gray-400 hover:text-neon transition-colors"
          >
            close ✕
          </button>
        )}
      </div>

      <style>{`
        @keyframes overlayPop { from { opacity: 0; transform: scale(0.92) } to { opacity: 1; transform: scale(1) } }
        .animate-overlay-pop { animation: overlayPop 160ms ease-out; }
      `}</style>
    </div>
  );
}
