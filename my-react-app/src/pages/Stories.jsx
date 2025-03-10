import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import { Link } from 'react-router-dom';
import ProjectWrapper from '../components/ProjectWrapper.jsx';
import news from '../assets/news.png';
import video from '../assets/video.png';

function Stories({enableEffects=true}){
    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                 <div className="text-5xl">
                    <CRTText isEnabled={enableEffects}>
                        I tell &nbsp;
                        <Link to="/art">
                            <CRTText.Span color="neon" className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}> 
                                stories.
                            </CRTText.Span>
                        </Link>
                    </CRTText>
                </div>
                <div className="mt-10 flex flex-row gap-20 justify-center">
                    <ProjectWrapper name="News Reporting" enableEffects={enableEffects} link="https://dailynorthwestern.com/2024/10/09/city/animal-records-vinyl-store-opens-in-evanston/">
                        <img src={news} alt="Newspaper Icon" width="70"/>
                    </ProjectWrapper>
                    <ProjectWrapper name="Video Journalism" enableEffects={enableEffects} link="https://www.youtube.com/playlist?list=PL_WrJLUaaNBcwWu6RRHy18aKSnK0z3Cwo">
                        <img src={video} alt="Camera Icon" width="70"/>
                    </ProjectWrapper>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Stories