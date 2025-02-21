import {Link} from 'react-router-dom';
import CRTText from './CRTText.jsx';

function InternalCRTLink({children, enableEffects=true, link}){
    
    return <Link to ={link}>
        <CRTText.Span color="neon" className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}> 
            {children}
        </CRTText.Span>
    </Link>
}

export default InternalCRTLink;