import CRTText from './CRTText.jsx';


function HomeContent({isEnabled = true}){

    return(
        <div>
            <div className="text-5xl">
                <CRTText isEnabled={isEnabled}>
                    Hi! I'm Jerry.
                </CRTText>
            </div>
            <div className="mt-20 text-3xl">
                <CRTText.Span isEnabled={isEnabled}> Press </CRTText.Span>
                <CRTText.Span color="neon" className="text-neon" isEnabled={isEnabled}> START </CRTText.Span>
            </div>
        </div>
    );
}

export default HomeContent
