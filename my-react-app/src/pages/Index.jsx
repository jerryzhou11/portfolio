import HomeContent from '../components/HomeContent.jsx'
import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';


function Index({enableEffects = true}){
    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects} link="/about">
                <HomeContent isEnabled={enableEffects}/>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Index