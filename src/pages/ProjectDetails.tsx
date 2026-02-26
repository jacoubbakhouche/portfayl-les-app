import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';
import { AnimatedProjectImage } from '../components/AnimatedProjectImage';

export function ProjectDetails() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/works" replace />;
    }

    return (
        <div className="pb-32">
            {/* Navigation */}
            <Link
                to="/works"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors mb-8 md:mb-12 group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Gallery
            </Link>

            <div className="space-y-12 md:space-y-20">
                {/* Header */}
                <div className="space-y-6 text-center md:text-left max-w-4xl mx-auto">
                    <div className={cn(
                        "inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wider uppercase bg-gradient-to-r text-transparent bg-clip-text",
                        project.gradient
                    )}>
                        Project Details
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tight">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-4 py-2 bg-slate-800/60 border border-slate-700 rounded-full text-slate-300 text-sm font-medium flex items-center gap-2"
                            >
                                <Code2 size={14} className="text-blue-400/70" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-slate-900 border border-slate-800 shadow-2xl relative group">
                    <AnimatedProjectImage src={project.image || ''} alt={project.title} />
                </div>

                {/* Content & Links */}
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-slate-200">About the Project</h2>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-slate-200 mb-4">Live Demo</h3>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-colors shadow-lg active:scale-95"
                            >
                                Visit Website
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
