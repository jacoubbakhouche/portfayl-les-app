import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-2"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif italic text-slate-300/80 tracking-tighter">
                            Hey, there
                        </h2>
                        <div className="h-1 w-16 md:w-24 bg-blue-500 mx-auto md:mx-0 rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-9xl font-impact tracking-tighter uppercase gradient-text leading-[0.9]">
                            I AM <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                YAKOUB
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-3xl font-light text-slate-400 tracking-widest uppercase">
                            Android/iOS application developer
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center gap-6 pt-8"
                    >
                        <button className="group relative px-8 py-4 bg-white text-slate-950 font-bold tracking-wider uppercase overflow-hidden rounded-full transition-all hover:pr-12">
                            <span className="relative z-10">Available for work</span>
                            <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                        </button>

                        <div className="flex items-center gap-6 text-slate-400">
                            <a href="https://github.com/jacoubbakhouche" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
                            <a href="https://www.linkedin.com/in/jacoubbakhouche/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                            <a href="https://www.facebook.com/jacoub.bakhouche/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={24} /></a>
                            <a href="mailto:jacoubbakhouche@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
                        </div>
                    </motion.div>

                </div>

                {/* Right Image Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                >
                    <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/5 shadow-2xl shadow-blue-500/10">
                        {/* Placeholder for User Image */}
                        <img
                            src="/avatar.png"
                            alt="Yakoub Bakhouche"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 border border-white/10 rounded-full animate-spin-slow" />
                    <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-blue-500/20 rounded-full" />
                </motion.div>

            </div>
        </section>
    );
};
