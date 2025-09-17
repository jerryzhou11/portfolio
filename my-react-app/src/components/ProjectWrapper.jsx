import CRTText from './CRTText.jsx';
import React, { useState } from 'react';

function ProjectWrapper({children, name, enableEffects=true, link}){
    const [isHovered, setIsHovered] = useState(false);

    return (
        //Outer container with fixed height
        <div className="flex flex-col items-center">
            
            <a className="flex flex-col items-center transform hover:brightness-150 hover:scale-105 sm:hover:scale-110 transition-transform duration-200" href={link} target="_blank" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <div className="text-base sm:text-lg md:text-xl h-5 sm:h-6 mb-2 sm:mb-4 text-center">
                    <div className={`${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <CRTText isEnabled={enableEffects}>
                           {name}
                        </CRTText>
                    </div>
                </div>
                {children}
            </a>
        </div>
    );
};

export default ProjectWrapper