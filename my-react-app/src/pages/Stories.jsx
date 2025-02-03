import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import { Link } from 'react-router-dom';

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
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Stories