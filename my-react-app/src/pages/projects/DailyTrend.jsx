import React from 'react';
import CRTText from '../../components/CRTText';
import CRTScanlines from '../../components/CRTScanlines';
import CRTLink from '../../components/CRTLink';
import DetailHeader from '../../components/DetailHeader';

function DailyTrend({ enableEffects }) {
  return (
    <CRTScanlines isEnabled={enableEffects}>
      <div className="min-h-screen bg-black font-pixelify text-white text-left px-6 py-10 max-w-2xl mx-auto">

        <DetailHeader enableEffects={enableEffects} backLink="/interactions" />

        <CRTText as="h1" className="text-3xl sm:text-4xl font-bold mb-6" isEnabled={enableEffects}>
          The Daily Trend
        </CRTText>

        <CRTText as="p" className="text-sm sm:text-base mb-4" isEnabled={enableEffects}>
          Young people find traditional news dry and heavy — but they spend hours on TikTok and Instagram. The Daily Trend is a news-powered gaming platform built around a simple premise: what if the daily news habit was ten minutes of gameplay instead?
        </CRTText>

        <CRTText as="h2" className="text-xl sm:text-2xl font-bold mb-3 mt-8" isEnabled={enableEffects}>
          The Daily Trend Game
        </CRTText>
        <CRTText as="p" className="text-sm sm:text-base mb-4" isEnabled={enableEffects}>
          Players guess today's hottest trending topic from progressive headline clues across 8 categories — Technology, Business, Entertainment, Law, Politics, Sports, Climate, and more. Wordle-style letter cells, 5 max attempts, with bonus clues revealed on wrong guesses. After the answer is revealed, an AI-generated news story provides full context with quotes and sources.
        </CRTText>

        <CRTText as="h2" className="text-xl sm:text-2xl font-bold mb-3 mt-8" isEnabled={enableEffects}>
          News Connections
        </CRTText>
        <CRTText as="p" className="text-sm sm:text-base mb-4" isEnabled={enableEffects}>
          A competitive player-versus-player word-chain game where players link proper nouns that co-appear in real news coverage. Each player takes 30-second turns building a chain, with AI-powered validation ensuring every link is backed by a verifiable news article. Supports online play via match codes with real-time state synchronization.
        </CRTText>

        <CRTText as="h2" className="text-xl sm:text-2xl font-bold mb-3 mt-8" isEnabled={enableEffects}>
          My Role
        </CRTText>
        <CRTText as="p" className="text-sm sm:text-base mb-6" isEnabled={enableEffects}>
          Team of 6. I led user research and game design, and handled the technical development alongside one other teammate.
        </CRTText>

        <CRTLink enableEffects={enableEffects} link="https://news-connections.lovable.app/">
          Play The Daily Trend →
        </CRTLink>

      </div>
    </CRTScanlines>
  );
}

export default DailyTrend;
