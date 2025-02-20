import CRTText from './CRTText.jsx';
import React, { useState } from 'react';

function ProjectWrapper({children, name, enableEffects=true, link}){
    const [isHovered, setIsHovered] = useState(false);

    return (
        //Outer container with fixed height
        <div className="flex flex-col">
            
            <a className="flex flex-col items-center transform hover:brightness-150 hover:scale-110" href={link} target="_blank" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <div className="text-xl h-6 mb-4 ">
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