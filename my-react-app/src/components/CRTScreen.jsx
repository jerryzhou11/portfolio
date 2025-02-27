import React from 'react';

function CRTScreen({ children }) {
  return (
    <div className="relative w-full h-full">
      {/* SVG Border Container - absolute positioning to overlay the border */}
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 800" 
        preserveAspectRatio="none"
      >
        <defs>
          <mask id="screen-mask">
            <path
              d="
                M 100 50
                C 100 50, 200 0, 500 0
                C 800 0, 900 50, 900 50
                C 900 50, 1000 150, 1000 400
                C 1000 650, 900 750, 900 750
                C 900 750, 800 800, 500 800
                C 200 800, 100 750, 100 750
                C 100 750, 0 650, 0 400
                C 0 150, 100 50, 100 50
                Z
              "
              fill="white"
            />
          </mask>
        </defs>
        
        {/* Border shape with more pronounced curve */}
        <path
          d="
            M 100 50
            C 100 50, 200 0, 500 0
            C 800 0, 900 50, 900 50
            C 900 50, 1000 150, 1000 400
            C 1000 650, 900 750, 900 750
            C 900 750, 800 800, 500 800
            C 200 800, 100 750, 100 750
            C 100 750, 0 650, 0 400
            C 0 150, 100 50, 100 50
            Z
          "
          className="fill-black"
        />
        
        {/* Content area */}
        <foreignObject x="50" y="50" width="900" height="700" mask="url(#screen-mask)">
          <div className="w-full h-full bg-purple">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}

export default CRTScreen;