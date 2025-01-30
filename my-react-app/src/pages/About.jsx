import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import lizard from '../assets/lizard.gif'


function About({enableEffects=true}){

    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                <div className="text-5xl">
                    <CRTText isEnabled={enableEffects}>
                       I'm a <CRTText.Span color="neon" className="text-neon" isEnabled={enableEffects}> developer. </CRTText.Span>
                    </CRTText>
                </div>
                <div className="mt-20 flex flex-row">
                    <a className="flex flex-col justify-center items-center" href="https://stolenquotient2.itch.io/lizard-legacy" target="_blank">
                        <div className="text-xl">
                            <CRTText isEnabled={enableEffects}>
                                Lizard's Legacy
                            </CRTText>
                        </div>
                        <div className="mt-5">
                            <img src={lizard} alt="Lizard's Legacy" width="50" height="60"/>
                        </div>
                    </a>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default About
