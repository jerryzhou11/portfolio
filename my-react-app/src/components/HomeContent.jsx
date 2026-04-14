import CRTText from './CRTText.jsx';

function HomeContent({isEnabled = true}){
    return(
        <div className="w-full px-2">
            <div className="text-3xl sm:text-4xl md:text-5xl">
                <CRTText isEnabled={isEnabled}>
                    Hi! I'm Jerry.
                </CRTText>
            </div>
            <div className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl">
                <CRTText isEnabled={isEnabled}>
                    I like to make cool things for people.
                </CRTText>
            </div>
            <div className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl text-gray-400">
                <CRTText.Span isEnabled={isEnabled}>
                    Games. Web experiences. Stories. Poetry.
                </CRTText.Span>
            </div>
            <div className="mt-8 sm:mt-10 md:mt-14 text-xl sm:text-2xl md:text-3xl">
                <CRTText.Span isEnabled={isEnabled}> Press </CRTText.Span>
                <CRTText.Span color="neon" className="text-neon" isEnabled={isEnabled}> START </CRTText.Span>
            </div>
        </div>
    );
}

export default HomeContent
