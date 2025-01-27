import React from 'react';


const CRTScanlines = ({ children, isEnabled = true }) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Scanlines Overlay */}
      {isEnabled && (
        <div className="fixed inset-0 pointer-events-none z-20" style={{ backgroundColor: 'transparent' }}>
          {/* Primary scanlines */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)',
              backgroundSize: '100% 4px',
              animation: 'scanlineMove 6s linear infinite',
              opacity: 0.3,
            }}
          />
          
          {/* Subtle static overlay */}
        </div>
      )}

      <style jsx="true">{`
        @keyframes scanlineMove {
          from { transform: translateY(0); }
          to { transform: translateY(4px); }
        }
      `}</style>
    </div>
  );
};

export default CRTScanlines;