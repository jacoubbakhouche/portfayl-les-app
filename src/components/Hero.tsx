import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

            {/* Background Elements - Optimized for top-half cinematic focus */}
            <div className="absolute inset-x-0 top-0 h-[70vh] z-0 pointer-events-auto bg-black overflow-hidden">
                <spline-viewer
                    url="https://prod.spline.design/ZXg1vmZUpLQpxwPh/scene.splinecode"
                    className="w-full h-full absolute inset-0 scale-[1.3] md:scale-[1.5] origin-top translate-y-[-10%]"
                ></spline-viewer>
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-12 pointer-events-none mt-20 md:mt-32">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left space-y-8 pointer-events-auto">
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-blue-400 font-medium tracking-wider uppercase text-sm"
                        >
                            Hey there, I'm
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
                        >
                            Yakoub <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Bakhouche
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-slate-400 max-w-lg leading-relaxed"
                        >
                            I build exceptional and high-performance mobile and web applications with a focus on user experience and clean code.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <button className="group relative px-8 py-4 bg-white text-slate-950 font-bold tracking-wider uppercase overflow-hidden rounded-full transition-all hover:pr-12 w-full sm:w-auto">
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
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 pointer-events-auto mt-12 md:mt-0"
                >
                    <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">
                        <img
                            src="/avatar.png"
                            alt="Yakoub Bakhouche"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-4 border border-blue-500/20 rounded-full animate-pulse z-0" />
                </motion.div>
            </div>
        </section>
    );
};
