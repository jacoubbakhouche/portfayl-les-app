import { Link, Outlet } from 'react-router-dom';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';

export function Layout() {
    return (
        <div className="min-h-screen bg-black text-slate-200 selection:bg-blue-500/30 font-sans">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="container mx-auto px-6 py-8 md:py-12">
                    <nav className="flex justify-between items-center">
                        <Link
                            to="/"
                            className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                        >
                            Yakoub Bakhouche
                        </Link>
                        <div className="flex gap-4 items-center">
                            <Link
                                to="/works"
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                Works Gallery
                            </Link>
                            <a
                                href="/#contact"
                                className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium backdrop-blur-sm hidden sm:block"
                            >
                                Contact Me
                            </a>
                        </div>
                    </nav>
                </header>

                <main className="flex-grow container mx-auto px-6 space-y-16 md:space-y-32">
                    <Outlet />
                </main>

                <footer className="container mx-auto px-6 border-t border-slate-800 py-12 flex flex-col items-center gap-8 mt-auto">
                    <div className="flex items-center gap-8 text-slate-400">
                        <a href="https://github.com/jacoubbakhouche" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/jacoubbakhouche/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="https://www.facebook.com/jacoub.bakhouche/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="mailto:jacoubbakhouche@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
                    </div>
                    <p className="text-slate-500 text-sm">© 2026 Yakoub Bakhouche. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

