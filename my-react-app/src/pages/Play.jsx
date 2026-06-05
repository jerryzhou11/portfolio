import CRTScanlines from '../components/CRTScanlines.jsx';
import FuzzyOverlay from '../components/FuzzyOverlay.jsx';
import RotateHint from '../components/RotateHint.jsx';
import GameWorld from '../game/GameWorld.jsx';

// Top-down RPG gallery shown on the arcade machine's screen. The game canvas
// is framed inside the same purple cabinet used on the home page (with the
// fuzzy CRT noise on top); scanlines ride over everything.
function Play({ enableEffects = true }) {
  return (
    <CRTScanlines isEnabled={enableEffects}>
      <RotateHint />
      <div className="min-h-screen w-full flex items-center justify-center overflow-hidden px-2 sm:px-4">
        <div className="relative flex items-center justify-center rounded-3xl bg-purple border-2 border-black overflow-hidden h-[70vh] sm:h-[80vh] max-h-[85vh] sm:max-h-[90vh] w-full max-w-[95vw] sm:max-w-[800px] p-2 sm:p-4 md:p-6 lg:p-8">
          <GameWorld enableEffects={enableEffects} />
          <FuzzyOverlay isEnabled={enableEffects} />
        </div>
      </div>
    </CRTScanlines>
  );
}

export default Play;
