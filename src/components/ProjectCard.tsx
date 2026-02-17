import React, { useState } from 'react';
import { ExternalLink, Smartphone, Monitor, Code2 } from 'lucide-react';
import { BrowserMockup } from './ui/BrowserMockup';
import { cn } from '../lib/utils';

interface Project {
    title: string;
    description: string;
    tags: string[];
    url: string;
    image?: string;
    gradient: string;
}

interface ProjectCardProps {
    project: Project;
    reverse?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse = false }) => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <div className={cn(
            "flex flex-col gap-8 lg:gap-12 items-center py-8 md:py-16",
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
            {/* Visual Side (Mockup) */}
            <div className="w-full lg:w-3/5 flex flex-col items-center">
                <div className="w-full flex justify-center mb-6">
                    <div className="inline-flex bg-slate-800/50 p-1 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                        <button
                            onClick={() => setIsMobile(false)}
                            className={cn(
                                "p-2 rounded-md transition-all duration-300 flex items-center gap-2 text-sm font-medium",
                                !isMobile
                                    ? "bg-blue-500/20 text-blue-400 shadow-sm"
                                    : "text-slate-400 hover:text-slate-200"
                            )}
                        >
                            <Monitor size={18} />
                            <span className="hidden sm:inline">Desktop</span>
                        </button>
                        <button
                            onClick={() => setIsMobile(true)}
                            className={cn(
                                "p-2 rounded-md transition-all duration-300 flex items-center gap-2 text-sm font-medium",
                                isMobile
                                    ? "bg-purple-500/20 text-purple-400 shadow-sm"
                                    : "text-slate-400 hover:text-slate-200"
                            )}
                        >
                            <Smartphone size={18} />
                            <span className="hidden sm:inline">Mobile</span>
                        </button>
                    </div>
                </div>

                <div className="w-full flex justify-center perspective-1000">
                    <BrowserMockup
                        url={project.url}
                        image={project.image}
                        title={project.title}
                        isMobile={isMobile}
                        className="shadow-2xl shadow-blue-900/10"
                    />
                </div>
            </div>

            {/* Details Side */}
            <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                    <div className={cn(
                        "inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r text-transparent bg-clip-text",
                        project.gradient
                    )}>
                        Featured Project
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-100 tracking-tight">
                        {project.title}
                    </h3>

                    <p className="text-slate-400 text-lg leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="px-4 py-2 bg-slate-800/40 border border-slate-700/50 rounded-full text-slate-300 text-sm font-medium flex items-center gap-2 hover:bg-slate-800/60 transition-colors"
                        >
                            <Code2 size={14} className="text-blue-400/70" />
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="pt-4">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-full font-semibold hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 active:scale-95"
                    >
                        Visit Live Project
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};
