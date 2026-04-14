import React from 'react';
import CRTText from './CRTText.jsx';
import InternalCRTLink from './InternalCRTLink.jsx';

function DetailHeader({ enableEffects, backLink = "/interactions" }) {
    return (
        <div className="mb-8">
            {/* Neon accent line */}
            <div
                className="w-full mb-3"
                style={{
                    height: '2px',
                    backgroundColor: '#2DE2E6',
                    boxShadow: enableEffects
                        ? '0 0 6px #2DE2E6, 0 0 12px #2DE2E6'
                        : 'none',
                }}
            />
            {/* Wordmark + back link row */}
            <div className="flex items-center justify-between">
                <CRTText
                    as="span"
                    color="neon"
                    className="text-xs sm:text-sm tracking-widest uppercase"
                    isEnabled={enableEffects}
                >
                    Jerry Zhou
                </CRTText>
                <InternalCRTLink enableEffects={enableEffects} link={backLink}>
                    ← Back
                </InternalCRTLink>
            </div>
        </div>
    );
}

export default DetailHeader;
