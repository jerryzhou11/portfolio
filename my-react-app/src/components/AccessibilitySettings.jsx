import React, { createContext, useContext, useState } from 'react';

// Create context for accessibility settings
export const AccessibilityContext = createContext({
  effects: {
    crtEffect: true,
    textGlow: true,
    animations: true
  },
  toggleEffect: () => {},
});

// Provider component
export const AccessibilityProvider = ({ children }) => {
  const [effects, setEffects] = useState({
    crtEffect: true,
    textGlow: true,
    animations: true
  });

  const toggleEffect = (effectName) => {
    setEffects(prev => ({
      ...prev,
      [effectName]: !prev[effectName]
    }));
  };

  return (
    <AccessibilityContext.Provider value={{ effects, toggleEffect }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Settings UI Component
const AccessibilitySettings = ({ className = '' }) => {
  const { effects, toggleEffect } = useContext(AccessibilityContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        aria-label="Accessibility Settings"
      >
        Settings
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div className="fixed top-16 right-4 z-50 bg-gray-800 text-white rounded-lg shadow-lg p-4 min-w-[200px]">
          <h2 className="text-lg font-bold mb-4">Visual Settings</h2>
          
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span>CRT Effect</span>
              <input
                type="checkbox"
                checked={effects.crtEffect}
                onChange={() => toggleEffect('crtEffect')}
                className="w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between">
              <span>Text Glow</span>
              <input
                type="checkbox"
                checked={effects.textGlow}
                onChange={() => toggleEffect('textGlow')}
                className="w-4 h-4"
              />
            </label>

            <label className="flex items-center justify-between">
              <span>Animations</span>
              <input
                type="checkbox"
                checked={effects.animations}
                onChange={() => toggleEffect('animations')}
                className="w-4 h-4"
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilitySettings;