import React, { useState } from 'react';

const CRTScanlines = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="relative min-h-screen w-full">
      {/* Your actual content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsEnabled(!isEnabled)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
      >
        {isEnabled ? 'Disable' : 'Enable'} CRT Effect
      </button>

      {/* Scanlines Overlay */}
      {isEnabled && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {/* Base CRT overlay with noise */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10 mix-blend-overlay" />
          
          {/* Enhanced horizontal scanlines */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.25) 50%)',
              backgroundSize: '100% 2px',
              animation: 'scanline 8s linear infinite',
            }}
          />
          
          {/* Additional scanline layer for more intensity */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15) 50%)',
              backgroundSize: '100% 4px',
              animation: 'scanline 12s linear infinite',
            }}
          />

          {/* Screen flicker effect */}
          <div 
            className="absolute inset-0 mix-blend-overlay opacity-20"
            style={{
              animation: 'flicker 0.15s infinite',
            }}
          />
        </div>
      )}

      <style jsx="true">{`
        @keyframes scanline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(4px);
          }
        }

        @keyframes flicker {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default CRTScanlines;