import HomeContent from '../components/HomeContent.jsx'
import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';


function Index({enableEffects = true}){
    return(
        <div>
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects} link="/about">
                <HomeContent isEnabled={enableEffects}/>
            </ArcadeMachine>
        </CRTScanlines>
        </div>

    );
}

export default Index