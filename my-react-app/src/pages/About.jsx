import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import LizardLegacy from '../components/LizardLegacy.jsx';
import CRTText from '../components/CRTText.jsx';
import ProjectWrapper from '../components/ProjectWrapper.jsx';
import lizard from '../assets/lizard.gif'
import temp from '../assets/react.svg'


function About({enableEffects=true}){

    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                <div className="text-5xl">
                    <CRTText isEnabled={enableEffects}>
                       I'm a &nbsp;
                       <a href=""> 
                        <CRTText.Span color="neon" className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}> 
                            developer.
                         </CRTText.Span>
                        </a>
                    </CRTText>
                </div>
                <div className="mt-10 flex flex-row gap-20">
                    <ProjectWrapper name="Lizard's Legacy" enableEffects={enableEffects} link="https://stolenquotient2.itch.io/lizard-legacy">
                        <img src={lizard} alt="Lizard's Legacy" width="50"/>
                    </ProjectWrapper>
                    <ProjectWrapper name="News Redesign" enableEffects={enableEffects} link="">
                        <img src={temp} alt="Placeholder" width="70"/>
                    </ProjectWrapper>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default About
