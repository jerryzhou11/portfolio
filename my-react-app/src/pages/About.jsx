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
                       I'm a <CRTText.Span color="neon" className="text-neon underline" isEnabled={enableEffects}> developer. </CRTText.Span>
                    </CRTText>
                </div>
                <div className="mt-10 flex flex-row gap-10">
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
