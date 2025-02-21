import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import CRTLink from '../components/CRTLink.jsx';
import Resume from '../assets/Resume.pdf';
function Contact({enableEffects=true}){
    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                 <div className="text-5xl">
                    <CRTText isEnabled={enableEffects}>
                        Learn more:
                    </CRTText>
                </div>
                <div className="text-3xl mt-10 flex flex-row gap-10 justify-center">
                    <CRTLink enableEffects={enableEffects} link={Resume}>Resume</CRTLink>
                    <CRTLink enableEffects={enableEffects} link="https://www.linkedin.com/in/jerryjiaruizhou/">LinkedIn</CRTLink>
                    <CRTLink enableEffects={enableEffects} link="https://github.com/jerryzhou11">GitHub</CRTLink>
                </div>
                <div className="text-3xl mt-10">
                    <a href="mailto:jerryzhou2027@u.northwestern.edu">
                        <CRTText.Span color="neon"  className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}> 
                            Email
                        </CRTText.Span>
                        </a>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Contact