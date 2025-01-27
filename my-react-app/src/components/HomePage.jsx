import About from '../pages/About.jsx'
import Footer from '../Footer.jsx'
import FuzzyOverlay from '../components/FuzzyOverlay.jsx'
import CRTText from '../components/CRTText.jsx';


function HomePage({isEnabled = true}){

    return(
        <div>
            
            <a className="block w-full" href="/about">
                <div className="flex justify-center items-center rounded-3xl bg-purple border-2 h-[80vh] border-black max-w-[800px] m-auto relative">
                    <div className="top-40 text-white font-pixelify">
                        <div className="text-5xl">
                        <CRTText>
                            Hi! I'm Jerry.
                        </CRTText>
                        </div>
                        <div className="mt-20 text-3xl">
                            <CRTText.Span> Press </CRTText.Span>
                            <CRTText.Span color="neon" className="text-neon"> START </CRTText.Span>
                        </div>
                    </div>
                    <FuzzyOverlay isEnabled={isEnabled}/>
                </div>
            </a>
            <div className="text-gray-800"><Footer/></div>
        </div>
    );
}

export default HomePage
