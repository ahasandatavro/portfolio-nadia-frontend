// HomePage.tsx
import { Welcome } from '../components/Welcome/Welcome';
import { Header } from "@/components/Header/Header";
import FooterCTA from './Footer';
import blackHole from "../assets/videos/blackhole.webm";
import StarsCanvas from "@/components/StarBackground";
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Review from './Review';
import Experience from './Experience';

export function HomePage() {
    return (
        <div className="relative w-full bg-black">
            {/* Video Background */}
            <div className="rotate-180 min-h-screen absolute left-0 w-full z-10">
                {/* Video */}
                <video autoPlay muted loop className="w-full object-cover opacity-80 min-h-screen">
                    <source src={blackHole} type="video/webm" />
                    <source src="fallback.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Black Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80" />
            </div>
            <StarsCanvas />
            <Header />
            <section id='home' >
                <Welcome />
            </section>
            <section id="about" className="overflow-hidden"><About /></section>
            <section id="skills" className="overflow-hidden"><Skills /></section>
            <section id="projects" className="overflow-hidden"><Projects /></section>
            <section id="experience" className="overflow-hidden"><Experience /></section>
            <section id="review" className="overflow-hidden"><Review /></section>
            <FooterCTA />
        </div>
    );
}
