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
        className="relative z-10 w-full max-w-sm rounded-2xl border-2 border-neon bg-purple/95 p-6 text-center font-pixelify animate-overlay-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {data.thumb && (
          <img
            src={data.thumb}
            alt=""
            className="mx-auto mb-4 h-20 w-auto"
            style={{ imageRendering: 'pixelated' }}
          />
        )}
        <div className="text-2xl sm:text-3xl mb-2">
          <CRTText isEnabled={enableEffects}>{data.title}</CRTText>
        </div>
        {data.blurb && (
          <div className="text-sm sm:text-base text-gray-300 mb-6 leading-snug">
            <CRTText.Span isEnabled={enableEffects}>{data.blurb}</CRTText.Span>
          </div>
        )}
        <a
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-xl bg-neon text-black text-xl font-bold hover:bg-pink hover:text-white transition-colors"
        >
          {data.playLabel || 'PLAY ▶'}
        </a>
        <button
          onClick={onClose}
          className="block mx-auto mt-5 text-xs text-gray-400 hover:text-neon transition-colors"
        >
          close ✕
        </button>
      </div>

      <style>{`
        @keyframes overlayPop { from { opacity: 0; transform: scale(0.92) } to { opacity: 1; transform: scale(1) } }
        .animate-overlay-pop { animation: overlayPop 160ms ease-out; }
      `}</style>
    </div>
  );
}
