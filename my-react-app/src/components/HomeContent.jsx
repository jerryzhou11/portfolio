import CRTText from './CRTText.jsx';


function HomeContent({isEnabled = true}){

    return(
        <div className="w-full px-2">
            <div className="text-3xl sm:text-4xl md:text-5xl">
                <CRTText isEnabled={isEnabled}>
                    Hi! I'm Jerry.
                </CRTText>
            </div>
            <div className="mt-8 sm:mt-12 md:mt-20 text-xl sm:text-2xl md:text-3xl">
                <CRTText.Span isEnabled={isEnabled}> Press </CRTText.Span>
                <CRTText.Span color="neon" className="text-neon" isEnabled={isEnabled}> START </CRTText.Span>
            </div>
        </div>
    );
}

export default HomeContent
