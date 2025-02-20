import React, { useState, useEffect } from 'react';

const GlitchTransition = ({ children, trigger }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);

  useEffect(() => {
    const handleTransition = async () => {
      setIsTransitioning(true);
      
      await new Promise(resolve => setTimeout(resolve, 250));
      setDisplayedChildren(children);
      
      await new Promise(resolve => setTimeout(resolve, 50));
      setIsTransitioning(false);
    };

    handleTransition();
  }, [trigger, children]);

  const lineStyles = [
    { height: 'h-3', color: 'bg-fuchsia-400', opacity: 'opacity-70' },
    { height: 'h-3', color: 'bg-fuchsia-600', opacity: 'opacity-80' },
    { height: 'h-4', color: 'bg-pink', opacity: 'opacity-90' },
    { height: 'h-4', color: 'bg-fuchsia-500', opacity: 'opacity-60' },
    { height: 'h-5', color: 'bg-pink', opacity: 'opacity-75' }
  ];

  const widthStyles = [
    'w-1/2',
    'w-1/3',
    'w-1/3',
    'w-1/4',
    'w-2/3',
    'w-full',
  ];

  const animationStyles = [
    'animate-line-shift',
    'animate-line-shift',
    'animate-line-jump',
    'animate-line-jump',
  ];

  return (
    <>
      <div>
        {displayedChildren}
      </div>

      {isTransitioning && (
        <div className="absolute inset-0 z-50 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => {
              const style = lineStyles[Math.floor(Math.random() * lineStyles.length)];
              const width = widthStyles[Math.floor(Math.random() * widthStyles.length)];
              const animation = animationStyles[Math.floor(Math.random() * animationStyles.length)];
              const isRightAligned = Math.random() > 0.5;
              
              return (
                <div 
                  key={i}
                  className={`absolute ${style.height} ${style.color} ${style.opacity} ${width} ${animation}`}
                  style={{
                    top: `${(i * 10)}%`,
                    right: isRightAligned ? '0' : 'auto',
                    left: isRightAligned ? 'auto' : '0',
                    animationDelay: `${i * 15}ms`,
                    animationDuration: '100ms'
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default GlitchTransition;