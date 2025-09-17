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
                <div className="w-full px-2">
                    <div className="text-3xl sm:text-4xl md:text-5xl">
                        <CRTText isEnabled={enableEffects}>
                            Learn more:
                        </CRTText>
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-center items-center">
                        <CRTLink enableEffects={enableEffects} link={Resume}>Resume</CRTLink>
                        <CRTLink enableEffects={enableEffects} link="https://www.linkedin.com/in/jerryjiaruizhou/">LinkedIn</CRTLink>
                        <CRTLink enableEffects={enableEffects} link="https://github.com/jerryzhou11">GitHub</CRTLink>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl mt-6 sm:mt-8 md:mt-10">
                        <CRTText isEnabled={enableEffects}>
                         Return to Projects:
                        </CRTText>
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-center items-center">
                        <InternalCRTLink enableEffects={enableEffects} link="/interactions">Design</InternalCRTLink>
                        <InternalCRTLink enableEffects={enableEffects} link="/stories">Stories</InternalCRTLink>
                        <InternalCRTLink enableEffects={enableEffects} link="/art">Art</InternalCRTLink>
                    </div>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Contact