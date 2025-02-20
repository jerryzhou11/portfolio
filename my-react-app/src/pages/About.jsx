import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import ProjectWrapper from '../components/ProjectWrapper.jsx';
import lizard from '../assets/lizard.gif'
import temp from '../assets/react.svg'
import { Link } from 'react-router-dom';

function About({enableEffects=true}){

    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                <div className="text-5xl">
                    <CRTText isEnabled={enableEffects}>
                       I design &nbsp;
                       <Link to="/stories">
                        <CRTText.Span color="neon" className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}> 
                            interactions.
                         </CRTText.Span>
                        </Link>
                    </CRTText>
                </div>
                <div className="mt-10 flex flex-row gap-20 justify-center">
                    <ProjectWrapper name="Lizard's Legacy" enableEffects={enableEffects} link="https://stolenquotient2.itch.io/lizard-legacy">
                        <img src={lizard} alt="Lizard's Legacy" width="50"/>
                    </ProjectWrapper>
                    <ProjectWrapper name="Coming Soon!" enableEffects={enableEffects} link="">
                        <img src={temp} alt="Placeholder" width="70"/>
                    </ProjectWrapper>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default About
