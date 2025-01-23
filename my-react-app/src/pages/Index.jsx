import About from './About.jsx'

function Index(){

    return(
        <a href="/about">
            <div className="rounded-lg bg-purple w-[520px] h-[520px] border-2 border-black">
                <div className="flex items-center justify-center">
                    <div className="text-white text-4xl font-pixelify">
                        Hi! I'm Jerry.
                    </div>
                </div>
            </div>
        </a>
        
    );
}

export default Index
