import CRTText from '../components/CRTText.jsx';
import React, { useState } from 'react';
import lizard from '../assets/lizard.gif'

function LizardLegacy({enableEffects=true}){
    const [isHovered, setIsHovered] = useState(false);

    return (
        //Outer container with fixed height
        <div className="flex flex-col">
            
            <a className="flex flex-col items-center " href="https://stolenquotient2.itch.io/lizard-legacy" target="_blank" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <div className="text-xl h-6 mb-4 ">
                    <div className={`${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <CRTText isEnabled={enableEffects}>
                            Lizard's Legacy
                        </CRTText>
                    </div>
                </div>
                <div className="">
                    <img src={lizard} alt="Lizard's Legacy" width="50" height="73"/>
                </div>
            </a>
        </div>
    );
};

export default LizardLegacy