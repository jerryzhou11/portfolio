import React, { useState, useEffect } from 'react';

const GlitchTransition = ({ children, trigger, enableEffects=true}) => {
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [isGlitching, setIsGlitching] = useState(false);
  const [moveDirection, setMoveDirection] = useState('up');
  const [linePositions, setLinePositions] = useState([]);

  useEffect(() => {
    const handleTransition = async () => {
      setIsGlitching(true);
      setMoveDirection(Math.random() > 0.5 ? 'up' : 'down');
      
      const positions = Array.from({ length: 3 })
        .map(() => Math.floor(Math.random() * 80) + 10)
        .sort((a, b) => a - b);
      setLinePositions(positions);
      
      setDisplayedChildren(children);
      await new Promise(resolve => setTimeout(resolve, 400));
      setIsGlitching(false);
    };

    handleTransition();
  }, [trigger, children]);

  const StaticLine = ({ top, duration, delay }) => {
    const protrusions = Array.from({ length: 35 }).map((_, i) => ({
      width: Math.floor(Math.random() * 30 + 10),
      height: Math.floor(Math.random() * 5 + 2),
      offset: Math.floor(Math.random() * 12 - 6),
      position: Math.floor(Math.random() * 100),
      above: Math.random() > 0.5
    }));

    return (
      <div 
        className={`absolute w-full ${moveDirection === 'up' ? 'animate-static-up' : 'animate-static-down'}`}
        style={{
          top: `${top}%`,
          animationDelay: `${delay}ms`,
          animationDuration: `${duration}ms`,
        }}
      >
        <div className="absolute inset-x-0 h-3 bg-white">
          {protrusions.map((p, i) => (
            <div
              key={i}
              className="absolute bg-white"
              style={{
                width: `${p.width}px`,
                height: `${p.height}px`,
                left: `${p.position}%`,
                top: p.above ? `${-p.height - p.offset}px` : `${3 + p.offset}px`
              }}
            />
          ))}
        </div>
      </div>
    );
  };
  if(!enableEffects){
    return(
      <>
        {children}
      </>
    );
  }
  return (
    <>
      {/* Container for content and glitch effects */}
      <div className="relative">
        {/* Original content with opacity animation */}
        <div className={`transition-opacity duration-300 ${isGlitching ? 'opacity-60' : 'opacity-100'}`}>
          {displayedChildren}
        </div>

        {/* Glitch offset copies */}
        {isGlitching && (
          <>
            <div className="absolute inset-0 animate-glitch-copy-1">
              {displayedChildren}
            </div>
            <div className="absolute inset-0 animate-glitch-copy-2">
              {displayedChildren}
            </div>
            <div className="absolute inset-0 animate-glitch-copy-3">
              {displayedChildren}
            </div>
          </>
        )}
      </div>

      {/* Separate container for white lines */}
      {isGlitching && (
        <div className="absolute inset-0 z-50 rounded-3xl overflow-hidden">
          {linePositions.map((top, i) => {
            const duration = 150 + Math.floor(Math.random() * 200);
            return (
              <StaticLine
                key={i}
                top={top}
                duration={duration}
                delay={i * 15}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default GlitchTransition;