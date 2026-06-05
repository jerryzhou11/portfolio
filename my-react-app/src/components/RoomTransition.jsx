import React, { useMemo } from 'react';

// Room-swap glitch in the same CRT style as the site's GlitchTransition:
// white static lines with jagged protrusions sweep up/down while the room
// underneath cuts over. A subtle full-screen colour flash (cyan→magenta, the
// CRT RGB-split feel) rides along on top — kept low-opacity and brief so it
// reads as a quick pulse, not a jarring strobe. The flash only renders when
// CRT effects are on (the "Disable Effects" toggle); the line sweep always
// plays. Props: active (boolean), enableEffects (boolean).
export default function RoomTransition({ active, enableEffects = true }) {
  // Regenerate the random line layout each time a transition begins.
  const cfg = useMemo(() => {
    const dir = Math.random() > 0.5 ? 'up' : 'down';
    const tops = Array.from({ length: 3 }, () => Math.floor(Math.random() * 70) + 12).sort((a, b) => a - b);
    const lines = tops.map((top) => ({
      top,
      duration: 150 + Math.floor(Math.random() * 200),
      delay: Math.floor(Math.random() * 40),
      protrusions: Array.from({ length: 28 }, () => ({
        width: Math.floor(Math.random() * 280 + 10),
        height: Math.floor(Math.random() * 7 + 2),
        offset: Math.floor(Math.random() * 12 - 6),
        position: Math.floor(Math.random() * 100),
        above: Math.random() > 0.5,
      })),
    }));
    return { dir, lines };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active) return null;
  const { dir, lines } = cfg;
  const sweep = dir === 'up' ? 'animate-static-up' : 'animate-static-down';

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      {/* Subtle full-screen CRT colour flash, gated by the effects toggle. */}
      {enableEffects && (
        <div
          className="absolute inset-0 rt-flash"
          style={{
            background: 'linear-gradient(120deg, rgba(45,226,230,0.85), rgba(255,0,255,0.6))',
          }}
        />
      )}

      {/* White static line sweeps with jagged protrusions (the overlay strobe) */}
      {lines.map((ln, i) => (
        <div
          key={i}
          className={`absolute w-full ${sweep}`}
          style={{ top: `${ln.top}%`, animationDelay: `${ln.delay}ms`, animationDuration: `${ln.duration}ms` }}
        >
          <div className="absolute inset-x-0 h-3 bg-white opacity-60">
            {ln.protrusions.map((p, j) => (
              <div
                key={j}
                className="absolute bg-white opacity-50"
                style={{
                  width: `${p.width}px`,
                  height: `${p.height}px`,
                  left: `${p.position}%`,
                  top: p.above ? `${-p.height - p.offset}px` : `${3 + p.offset}px`,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes rtFlash {
          0%   { opacity: 0; }
          14%  { opacity: 0.2; }
          45%  { opacity: 0.06; }
          100% { opacity: 0; }
        }
        .rt-flash { animation: rtFlash 380ms ease-out forwards; }
      `}</style>
    </div>
  );
}
