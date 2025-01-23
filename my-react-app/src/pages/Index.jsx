import About from './About.jsx'

function Index(){

    return(
        <a href="/about">
            <div className="rounded-lg bg-purple w-[520px] h-[520px] border-2 border-black">
                <div className="relative top-40 text-white font-pixelify">
                    <div className="text-5xl">
                        Hi! I'm Jerry.
                    </div>
                    <div className="relative top-10 text-3xl">
                        Press
                        <span className="text-neon"> START</span>
                    </div>
                </div>
            </div>
        </a>
        
    );
}

export default Index
