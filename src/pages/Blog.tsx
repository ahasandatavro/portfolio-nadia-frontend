import React from 'react'
import blackHole from "../assets/videos/blackhole.webm";
import StarsCanvas from "@/components/StarBackground";
function Blog() {
    return (
        <div className="relative w-full bg-black ">
            {/* Video Background */}
            <div className="rotate-180 min-h-screen absolute left-0 w-full z-10">
                {/* Video */}
                <video autoPlay muted loop className="w-full relative object-cover ">
                    <source src={blackHole} type="video/webm" />
                    <source src="fallback.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Black Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85 " />
            </div>
            <StarsCanvas />
            <div className='relative z-20 max-w-6xl  mx-auto flex flex-col items-center justify-center min-h-screen'>
                <h1 className='text-white'>Welcome to my blog</h1>
            </div>
        </div>
    )
}

export default Blog
