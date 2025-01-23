import About from '../pages/About.jsx'

function HomePage(){

    return(
        <a className="block w-full" href="/about">
            <div className="flex justify-center items-center rounded-3xl bg-purple border-2 h-[80vh] border-black max-w-[800px] m-auto">
                <div className="top-40 text-white font-pixelify">
                    <div className="text-5xl">
                        Hi! I'm Jerry.
                    </div>
                    <div className="mt-20 text-3xl">
                        Press
                        <span className="text-neon"> START</span>
                    </div>
                </div>
            </div>
        </a>
        
    );
}

export default HomePage
