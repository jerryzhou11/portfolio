import React from 'react';
import CRTText from '../../components/CRTText';
import CRTScanlines from '../../components/CRTScanlines';
import CRTLink from '../../components/CRTLink';
import DetailHeader from '../../components/DetailHeader';

function LizardLegacy({ enableEffects }) {
  return (
    <CRTScanlines isEnabled={enableEffects}>
      <div className="min-h-screen bg-black font-pixelify text-white text-left px-6 py-10 max-w-2xl mx-auto">

        <DetailHeader enableEffects={enableEffects} backLink="/interactions" />

        <CRTText as="h1" className="text-3xl sm:text-4xl font-bold mb-6" isEnabled={enableEffects}>
          Lizard's Legacy
        </CRTText>

        <CRTText as="p" className="text-sm sm:text-base mb-4" isEnabled={enableEffects}>
          An action platformer built for a game jam on the theme "built to scale" — scale as in size, and scale as in the scales of a lizard.
        </CRTText>

        <CRTText as="p" className="text-sm sm:text-base mb-4" isEnabled={enableEffects}>
          You play as a tiny lizard fighting a colossal dragon, dodging fire breath, deadly claws, and wind attacks while striking at its weak points. Each generation of hero makes just a little more progress — wielding the same magic spear that tips the scales of time.
        </CRTText>

        <CRTText as="p" className="text-sm sm:text-base mb-6 italic" isEnabled={enableEffects}>
          "For millennia, a terrifying dragon has threatened the safety of the village. Today, the fallen hero's weapon has come to you, meaning it is your turn to fight back against the dragon, pierce its heart... and SAVE THE VILLA" — oh. you're dead. well then.
        </CRTText>

        <CRTText as="h2" className="text-xl sm:text-2xl font-bold mb-3 mt-8" isEnabled={enableEffects}>
          My Role
        </CRTText>
        <CRTText as="p" className="text-sm sm:text-base mb-6" isEnabled={enableEffects}>
          Project manager and programmer on a team of high school friends. I organized daily stand-ups, coordinated overall progress, and implemented the boss attack and projectile systems.
        </CRTText>

        <CRTText as="h2" className="text-xl sm:text-2xl font-bold mb-3 mt-8" isEnabled={enableEffects}>
          Built with
        </CRTText>
        <ul className="list-disc list-inside mb-8 text-sm sm:text-base">
          <li><CRTText.Span isEnabled={enableEffects}>Godot Engine</CRTText.Span></li>
          <li><CRTText.Span isEnabled={enableEffects}>GDScript</CRTText.Span></li>
        </ul>

        <CRTLink enableEffects={enableEffects} link="https://stolenquotient2.itch.io/lizard-legacy">
          Play on itch.io →
        </CRTLink>

      </div>
    </CRTScanlines>
  );
}

export default LizardLegacy;
