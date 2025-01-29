import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';

function About({enableEffects=true}){

    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                <div className="text-5xl">
                    <CRTText isEnabled={enableEffects}>
                       I'm a <CRTText.Span color="neon" className="text-neon" isEnabled={enableEffects}> developer. </CRTText.Span>
                    </CRTText>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default About
