import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Tech Stack Marquee (Simplified) */}
            <div className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm -mx-6 sm:-mx-8 lg:-mx-12 mb-20">
                <div className="flex justify-center gap-12 lg:gap-20 text-slate-500 overflow-hidden px-6">
                    <div className="flex items-center gap-2"><span className="text-xl">🦋</span> Flutter</div>
                    <div className="flex items-center gap-2"><span className="text-xl">🎯</span> Dart</div>
                    <div className="flex items-center gap-2"><span className="text-xl">🐘</span> PHP</div>
                    <div className="flex items-center gap-2"><span className="text-xl">⚡</span> Vite</div>
                    <div className="flex items-center gap-2"><span className="text-xl">🗄️</span> Supabase</div>
                    <div className="flex items-center gap-2"><span className="text-xl">🎥</span> Framer Motion</div>
                </div>
            </div>

            <ProjectCarousel />

            {/* Projects Section */}
            <section id="projects" className="space-y-32 pb-32">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white">Featured Projects</h2>
                        <p className="text-slate-400 mt-2">A selection of my recent work</p>
                    </div>
                    <Link
                        to="/works"
                        className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 hidden sm:flex"
                    >
                        View Full Gallery →
                    </Link>
                </div>

                {projects.filter(p => p.featured).map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        reverse={index % 2 !== 0}
                    />
                ))}

                <div className="text-center pt-12 sm:hidden">
                    <Link
                        to="/works"
                        className="inline-flex px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 font-medium hover:bg-blue-500/20 transition-colors"
                    >
                        View Full Gallery
                    </Link>
                </div>
            </section>
        </>
    );
}
