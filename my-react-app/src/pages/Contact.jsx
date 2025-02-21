import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import CRTLink from '../components/CRTLink.jsx';
import Resume from '../assets/Resume.pdf';
import InternalCRTLink from '../components/InternalCRTLink.jsx';

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
                <div className="text-4xl mt-10">
                    <CRTText isEnabled={enableEffects}>
                     Return to Projects:
                    </CRTText>
                </div>
                <div className="text-3xl mt-10 flex flex-row gap-10 justify-center">
                    <InternalCRTLink enableEffects={enableEffects} link="/interactions">Code</InternalCRTLink>
                    <InternalCRTLink enableEffects={enableEffects} link="/stories">Stories</InternalCRTLink>
                    <InternalCRTLink enableEffects={enableEffects} link="/art">Art</InternalCRTLink>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Contact