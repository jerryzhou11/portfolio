import Footer from './Footer.jsx'
import FuzzyOverlay from '../components/FuzzyOverlay.jsx'
import { Link } from 'react-router-dom';


function ArcadeMachine({children, isEnabled = true, link}){
    if(link){
        return(
            <div>
                
                <Link to={link} className="block w-full" >
                    <div className="flex justify-center items-center rounded-3xl bg-purple border-2 h-[80vh] border-black max-w-[800px] m-auto relative overflow-hidden">
                        <div className="top-40 text-white font-pixelify">
                            {children}
                        </div>
                        <FuzzyOverlay isEnabled={isEnabled}/>
                    </div>
                </Link>
                <div className="text-gray-800"><Footer/></div>
            </div>
        );     
    }else{
        return(
            <div className="block w-full">
                <div className="flex justify-center items-center rounded-3xl bg-purple border-2 h-[80vh] border-black max-w-[800px] m-auto relative overflow-hidden">
                    <div className="top-40 text-white font-pixelify">
                        {children}
                    </div>
                    <FuzzyOverlay isEnabled={isEnabled}/>
                </div>
                <div className="text-gray-800"><Footer/></div>
            </div>
        );     
    }
    
}

export default ArcadeMachine
