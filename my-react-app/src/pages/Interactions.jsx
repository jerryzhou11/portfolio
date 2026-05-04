import CRTScanlines from '../components/CRTScanlines.jsx';
import ArcadeMachine from '../components/ArcadeMachine.jsx';
import CRTText from '../components/CRTText.jsx';
import ProjectWrapper from '../components/ProjectWrapper.jsx';
import lizard from '../assets/lizard.gif';
import stepcity from '../assets/stepcity.png';
import { Link } from 'react-router-dom';

// TODO: Add icon image for Step City (e.g. src/assets/stepcity.png)
// TODO: Add icon image for The Daily Trend (e.g. src/assets/dailytrend.png)

function PlaceholderIcon({ label }) {
    return (
        <div
            className="flex items-center justify-center border-2 text-xs font-bold"
            style={{
                width: '70px',
                height: '70px',
                borderColor: '#2DE2E6',
                color: '#2DE2E6',
                fontFamily: 'inherit',
            }}
        >
            {label}
        </div>
    );
}

function Interactions({enableEffects=true}){

    return(
        <CRTScanlines isEnabled={enableEffects}>
            <ArcadeMachine isEnabled={enableEffects}>
                <div className="w-full px-2">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <CRTText isEnabled={enableEffects}>
                            I design &nbsp;
                            <Link to="/stories">
                            <CRTText.Span color="neon" className="transition-colors duration-300  text-neon hover:text-pink underline" isEnabled={enableEffects}>
                                interactions.
                            </CRTText.Span>
                            </Link>
                        </CRTText>
                    </div>
                    <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-16 justify-center items-center sm:items-start">
                        <ProjectWrapper
                            name="Lizard's Legacy"
                            tagline="Action platformer — tiny lizard vs. colossal dragon"
                            enableEffects={enableEffects}
                            link="/projects/lizardlegacy"
                        >
                            <img src={lizard} alt="Animated lizard icon" width="50"/>
                        </ProjectWrapper>
                        <ProjectWrapper
                            name="Step City"
                            tagline="Mobile game prototype — turn daily steps into a city"
                            enableEffects={enableEffects}
                            link="/projects/stepcity"
                        >
                             <img src={stepcity} alt="Cartoon step city character" width="75"/>
                        </ProjectWrapper>
                        <ProjectWrapper
                            name="The Daily Trend"
                            tagline="News-powered game — make current events playable"
                            enableEffects={enableEffects}
                            link="/projects/dailytrend"
                        >
                            <PlaceholderIcon label="DT" />
                        </ProjectWrapper>
                    </div>
                </div>
            </ArcadeMachine>
        </CRTScanlines>
    );
}

export default Interactions;
