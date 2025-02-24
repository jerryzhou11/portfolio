import FuzzyOverlay from '../components/FuzzyOverlay.jsx'
import { Link, useLocation } from 'react-router-dom';
import GlitchTransition from '../components/GlitchTransition.jsx';
import Clock from '../components/Clock.jsx';

function Machine({children, isEnabled}){
    return(
        <div className="block w-full overflow-hidden">
            <div className="flex justify-center items-center rounded-3xl bg-purple border-2 h-[80vh] border-black max-w-[800px] m-auto relative overflow-hidden">
                <GlitchTransition enableEffects={isEnabled} trigger={location.pathname}>
                    <div className="fixed top-20 left-[25%]">
                    </div>
                    <div className="top-40 text-white font-pixelify">
                            
                            {children}
                    </div>
                </GlitchTransition>
                <FuzzyOverlay isEnabled={isEnabled}/>
            </div>
        </div>
    );     
}
function ArcadeMachine({children, isEnabled = true, link}){
    const location = useLocation();

    if(link){
        return(
            <div>
                
                <Link to={link} className="block w-full" >
                    <Machine isEnabled={isEnabled}>
                        {children}
                    </Machine>
                </Link>
            </div>
        );     
    }else{
        return (
            <Machine isEnabled={isEnabled}>
                {children}
            </Machine>
        );
    }
    
}

export default ArcadeMachine
