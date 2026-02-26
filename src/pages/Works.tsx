import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Works() {
    return (
        <div className="space-y-12 pb-32">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
                    All Works
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl">
                    A complete gallery of my recent projects, featuring mobile and web applications built with modern technologies.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => !p.featured).map((project) => (
                    <Link
                        key={project.id}
                        to={`/works/${project.id}`}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                        {/* Project Image */}
                        <div className="absolute inset-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h2 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 2).map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-xs font-medium text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 2 && (
                                        <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-xs font-medium text-slate-300">
                                            +{project.tags.length - 2}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
