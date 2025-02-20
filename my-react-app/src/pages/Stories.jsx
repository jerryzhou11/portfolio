import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import { Link } from 'react-router-dom';
import temp from '../assets/react.svg'
import ProjectWrapper from '../components/ProjectWrapper.jsx';

function Stories({enableEffects=true}){
    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                 <div className="text-5xl">
                    <CRTText isEnabled={enableEffects}>
                        I tell &nbsp;
                        <Link to="/">
                            <CRTText.Span color="neon" className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}> 
                                stories.
                            </CRTText.Span>
                        </Link>
                    </CRTText>
                </div>
                <div className="mt-10 flex flex-row gap-20 justify-center">
                    <ProjectWrapper name="News Reporting" enableEffects={enableEffects} link="https://stolenquotient2.itch.io/lizard-legacy">
                        <img src={temp} alt="Lizard Icon" width="70"/>
                    </ProjectWrapper>
                    <ProjectWrapper name="Video Stories" enableEffects={enableEffects} link="">
                        <img src={temp} alt="Placeholder" width="70"/>
                    </ProjectWrapper>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Stories