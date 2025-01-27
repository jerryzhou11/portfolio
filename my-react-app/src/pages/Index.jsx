import HomePage from '../components/HomePage.jsx'
import CRTScanlines from '../components/CRTScanlines.jsx';


function Index({enableEffects = true}){
    return(
        <CRTScanlines isEnabled={enableEffects}>
            <HomePage isEnabled={enableEffects}/>
        </CRTScanlines>
    );
}

export default Index