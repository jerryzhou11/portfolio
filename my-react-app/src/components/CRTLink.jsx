import CRTText from './CRTText.jsx';

function CRTLink({children, enableEffects=true, link}){
    
    return <a href={link} target="_blank">
    <CRTText.Span color="neon"  className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}> 
        {children}
    </CRTText.Span>
    </a>
}

export default CRTLink