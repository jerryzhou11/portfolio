import React from 'react';
import ArcadeMachine from '../../components/ArcadeMachine';
import CRTText from '../../components/CRTText';
import InternalCRTLink from '../../components/InternalCRTLink';

function LizardLegacy({ enableEffects }) {
  return (
    <ArcadeMachine isEnabled={enableEffects}>
      <div className="w-full px-2 sm:px-4 md:px-8">
        <CRTText isEnabled={enableEffects} className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
          Lizard's Legacy
        </CRTText>
        
        <div className="text-left mb-6 sm:mb-8 text-sm sm:text-base">
          <CRTText isEnabled={enableEffects} className="mb-2 sm:mb-4">
            {/* You can populate this content later */}
            Project description goes here...
          </CRTText>
          
          <CRTText isEnabled={enableEffects} className="mb-2 sm:mb-4">
            Technologies used:
          </CRTText>
          <ul className="list-disc list-inside mb-2 sm:mb-4">
            <li>
              <CRTText.Span isEnabled={enableEffects}>
                Godot Engine
              </CRTText.Span>
            </li>
            <li>
              <CRTText.Span isEnabled={enableEffects}>
                GDScript
              </CRTText.Span>
            </li>
          </ul>
        </div>

        <InternalCRTLink 
          enableEffects={enableEffects} 
          link="/interactions"
        >
          Back to Projects
        </InternalCRTLink>
      </div>
    </ArcadeMachine>
  );
}

export default LizardLegacy;
