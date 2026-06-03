import React, { useEffect, useState } from 'react';

// On-screen controls for touch devices. Writes straight into the same input
// ref the keyboard uses, so the engine doesn't care where input comes from.
// Detect touch broadly: a coarse primary pointer (real phones/tablets) OR a
// touch-capable device. The maxTouchPoints / ontouchstart checks also make
// Chrome DevTools device-mode (touch emulation) light up the controls.
function isTouchDevice() {
  if (typeof window === 'undefined') return false;
  const coarse = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  const touch =
    (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) ||
    'ontouchstart' in window;
  return coarse || touch;
}

export default function DPad({ inputRef }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(isTouchDevice());
  }, []);
  if (!show) return null;

  const set = (key, value) => (e) => {
    e.preventDefault();
    if (inputRef.current) inputRef.current[key] = value;
  };

  const press = (key) => ({
    onPointerDown: set(key, true),
    onPointerUp: set(key, false),
    onPointerLeave: set(key, false),
    onPointerCancel: set(key, false),
  });

  const btn =
    'select-none flex items-center justify-center rounded-lg border border-neon/70 bg-black/50 text-neon text-2xl active:bg-neon active:text-black';

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none">
      <div className="flex items-end justify-between p-4" style={{ touchAction: 'none' }}>
        {/* D-pad */}
        <div
          className="pointer-events-auto grid grid-cols-3 grid-rows-3 gap-1"
          style={{ width: 150, height: 150, touchAction: 'none' }}
        >
          <span />
          <button className={btn} {...press('up')}>▲</button>
          <span />
          <button className={btn} {...press('left')}>◀</button>
          <span />
          <button className={btn} {...press('right')}>▶</button>
          <span />
          <button className={btn} {...press('down')}>▼</button>
          <span />
        </div>

        {/* Interact button */}
        <button
          className={`pointer-events-auto font-bold ${btn}`}
          style={{ width: 76, height: 76, touchAction: 'none' }}
          {...press('interact')}
        >
          A
        </button>
      </div>
    </div>
  );
}
