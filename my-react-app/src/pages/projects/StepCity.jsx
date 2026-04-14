import React from 'react';
import CRTText from '../../components/CRTText';
import CRTScanlines from '../../components/CRTScanlines';
import CRTLink from '../../components/CRTLink';
import DetailHeader from '../../components/DetailHeader';

function StepCity({ enableEffects }) {
  return (
    <CRTScanlines isEnabled={enableEffects}>
      <div className="min-h-screen bg-black font-pixelify text-white text-left px-6 py-10 max-w-2xl mx-auto">

        <DetailHeader enableEffects={enableEffects} backLink="/interactions" />

        <CRTText as="h1" className="text-3xl sm:text-4xl font-bold mb-6" isEnabled={enableEffects}>
          Step City
        </CRTText>

        <CRTText as="p" className="text-sm sm:text-base mb-4" isEnabled={enableEffects}>
          A mobile game prototype designed during Northwestern's Bay Area Immersion Program.
        </CRTText>

        <CRTText as="h2" className="text-xl sm:text-2xl font-bold mb-3 mt-8" isEnabled={enableEffects}>
          The Problem
        </CRTText>
        <CRTText as="p" className="text-sm sm:text-base mb-4" isEnabled={enableEffects}>
          People who struggle with consistent exercise are constrained by time. But they're more motivated when exercise is social, fun, and when they can see clear progress.
        </CRTText>
        <CRTText as="p" className="text-sm sm:text-base mb-6 italic" isEnabled={enableEffects}>
          How might we transform physical activity for young people from a time burden into a seamless, delightful experience with clear progression milestones?
        </CRTText>

        <CRTText as="h2" className="text-xl sm:text-2xl font-bold mb-3 mt-8" isEnabled={enableEffects}>
          The Solution
        </CRTText>
        <CRTText as="p" className="text-sm sm:text-base mb-4" isEnabled={enableEffects}>
          Inspired by town-building games like Clash of Clans, physical little libraries on street posts, and geocaching — Step City lets players collect resources and build an imaginary city by interacting with and exercising in the real world.
        </CRTText>

        <CRTText as="h2" className="text-xl sm:text-2xl font-bold mb-3 mt-8" isEnabled={enableEffects}>
          Built with
        </CRTText>
        <ul className="list-disc list-inside mb-8 text-sm sm:text-base">
          <li><CRTText.Span isEnabled={enableEffects}>Figma</CRTText.Span></li>
        </ul>

        <CRTLink enableEffects={enableEffects} link="https://www.figma.com/proto/p9Gn8oWKZ0nu94IfIhQDzE/Step-City">
          View prototype in Figma →
        </CRTLink>

      </div>
    </CRTScanlines>
  );
}

export default StepCity;
