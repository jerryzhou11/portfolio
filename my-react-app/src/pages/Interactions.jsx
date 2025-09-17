import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import ProjectWrapper from '../components/ProjectWrapper.jsx';
import lizard from '../assets/lizard.gif';
import leaf from '../assets/leaf.png';
import temp from '../assets/react.svg';
import { Link } from 'react-router-dom';

function Interactions({enableEffects=true}){

    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                <div className="w-full px-2">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <CRTText isEnabled={enableEffects}>
                            I design &nbsp;
                            <Link to="/stories">
                            <CRTText.Span color="neon" className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}> 
                                interactions.
                            </CRTText.Span>
                            </Link>
                        </CRTText>
                    </div>
                    <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-20 justify-center items-center">
                        <ProjectWrapper name="Lizard's Legacy" enableEffects={enableEffects} link="https://stolenquotient2.itch.io/lizard-legacy">
                            <img src={lizard} alt="Lizard Icon" width="50"/>
                        </ProjectWrapper>
                        <ProjectWrapper name="Plant Pals" enableEffects={enableEffects} link="https://www.plantpals.tech/">
                            <img src={leaf} alt="Leaf Icon" width="70"/>
                        </ProjectWrapper>
                    </div>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Interactions;
