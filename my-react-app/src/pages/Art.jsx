import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import { Link } from 'react-router-dom';
import ProjectWrapper from '../components/ProjectWrapper.jsx';
import quill from '../assets/quill.png';
import poetrycollection from '../assets/CreatorsParadise.pdf';

function Art({enableEffects=true}){
    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                <div className="w-full px-2">
                    <div className="text-3xl sm:text-4xl md:text-5xl">
                        <CRTText isEnabled={enableEffects}>
                            I write, &nbsp;
                            <Link to="/contact">
                                <CRTText.Span color="neon" className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}> 
                                    art?
                                </CRTText.Span>
                            </Link>
                        </CRTText>
                    </div>
                    <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
                        <ProjectWrapper name="My poetry collection" enableEffects={enableEffects} link={poetrycollection}>
                            <img src={quill} alt="Quill Icon" width="80"/>
                        </ProjectWrapper>
                    </div>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Art
                            </CRTText.Span>
                        </Link>
                    </CRTText>
                </div>
                <div className="mt-10 flex flex-row gap-10 justify-center">
                    <ProjectWrapper name="My poetry collection" enableEffects={enableEffects} link={poetrycollection}>
                        <img src={quill} alt="Quill Icon" width="80"/>
                    </ProjectWrapper>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Art