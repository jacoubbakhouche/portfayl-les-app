import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

export function ProjectCarousel() {
    const exploratoryProjects = projects.filter(p => !p.featured);

    return (
        <section className="py-20 overflow-hidden bg-slate-950/50">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-100">More Explorations</h2>
                        <p className="text-slate-400 mt-2">Experimental UI/UX concepts and side projects</p>
                    </div>
                </div>
            </div>

            <div className="relative">
                {/* Horizontal Scroll Container */}
                <motion.div
                    className="flex gap-6 px-6"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Double the list for infinite-like marquee effect */}
                    {[...exploratoryProjects, ...exploratoryProjects].map((project, idx) => (
                        <Link
                            key={`${project.id}-${idx}`}
                            to={`/works/${project.id}`}
                            className="flex-shrink-0 w-80 group relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute inset-x-0 bottom-0 p-4">
                                <h3 className="text-lg font-bold text-slate-100 truncate">{project.title}</h3>
                                <div className="flex items-center gap-2 text-blue-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>View Details</span>
                                    <ExternalLink size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>

                {/* Gradient Fades for modern look */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
            </div>
        </section>
    );
}
