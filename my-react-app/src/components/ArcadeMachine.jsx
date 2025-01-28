import Footer from './Footer.jsx'
import FuzzyOverlay from '../components/FuzzyOverlay.jsx'


function ArcadeMachine({children, isEnabled = true, link}){

    return(
        <div>
            <a className="block w-full" href={link}>
                <div className="flex justify-center items-center rounded-3xl bg-purple border-2 h-[80vh] border-black max-w-[800px] m-auto relative overflow-hidden">
                    <div className="top-40 text-white font-pixelify">
                        {children}
                    </div>
                    <FuzzyOverlay isEnabled={isEnabled}/>
                </div>
            </a>
            <div className="text-gray-800"><Footer/></div>
        </div>
    );
}

export default ArcadeMachine
