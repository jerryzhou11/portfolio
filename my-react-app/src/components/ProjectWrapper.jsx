import CRTText from './CRTText.jsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectWrapper({children, name, tagline, enableEffects=true, link}){
    const [isHovered, setIsHovered] = useState(false);

    // Only treat as an internal React Router link if it starts with '/' and has no file extension
    const isInternal = link && link.startsWith('/') && !link.includes('.');

    const innerContent = (
        <>
            <div className="text-base sm:text-lg md:text-xl h-5 sm:h-6 mb-2 sm:mb-4 text-center">
                <div className={`transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <CRTText isEnabled={enableEffects}>
                        {name}
                    </CRTText>
                </div>
            </div>
            {children}
            {tagline && (
                <div className="mt-2 sm:mt-3 text-center" style={{minHeight: '2.5rem', maxWidth: '160px'}}>
                    <div className={`transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <CRTText isEnabled={enableEffects} className="text-xs sm:text-sm leading-tight">
                            {tagline}
                        </CRTText>
                    </div>
                </div>
            )}
        </>
    );

    const wrapperClass = "flex flex-col items-center transform hover:brightness-150 hover:scale-105 sm:hover:scale-110 transition-transform duration-200";

    return (
        <div
            className="flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isInternal ? (
                <Link to={link} className={wrapperClass}>
                    {innerContent}
                </Link>
            ) : (
                <a className={wrapperClass} href={link} target="_blank" rel="noopener noreferrer">
                    {innerContent}
                </a>
            )}
        </div>
    );
}

export default ProjectWrapper
