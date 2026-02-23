import { ProjectCard } from './components/ProjectCard';
import { Hero } from './components/Hero';

function App() {
  const projects = [
    {
      title: "Docimon AI SaaS",
      description: "SaaS b data ha9i9iya ta3 docimon. Ay wehed yahtaj dwa w yhab yes9si 3lih, ma 3lih ghir yes9si l'AI w ymedlou l'dwa l'ansab lih directement.",
      tags: ["AI", "React", "SaaS"],
      url: "https://amine-dz.vercel.app/",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
      gradient: "from-indigo-500 to-blue-400"
    },
    {
      title: "Serve Me",
      description: "Plateforme service provider win te9der tel9a les professionnels li ta7tajhom. Booking f wa9tou (Real-time), paiment securisé, w map interactive bach tchoof win rahom les services.",
      tags: ["Flutter", "Dart", "cach"],
      url: "https://www.serveme-app.org/dashboard", // Placeholder
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2500&auto=format&fit=crop",
      gradient: "from-blue-400 to-cyan-300"
    },
    {
      title: "Wi Go",
      description: "App ta3 VTC kima inDrive, win l client howa li yproposer prix. System d'enchère win les chauffeurs ynegociw m3ak. Real-time tracking w securité tal3a.",
      tags: ["Flutter", "Dart", "Supabase"],
      url: "https://taxi-bay.vercel.app/customer/dashboard",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2940&auto=format&fit=crop",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Nabda",
      description: "App ta3 pharmacie delivery, tawsil rapide l dwa dyalek. Tscanner l'ordonnance, tsuivie l livreur, w gestion d'inventaire sahal lel les pharmacies.",
      tags: ["Flutter", "Dart"],
      url: "https://mon-ange-mom-companion.vercel.app/", // Placeholder
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop",
      gradient: "from-emerald-400 to-teal-300"
    },
    {
      title: "Laya Style",
      description: "Store e-commerce modern speacial nsa. Fih app mobile bach tjerer l stock w les commandes en temps réel. Design chbab w user experience smooth.",
      tags: ["Flutter", "Dart"],
      url: "https://www.laya-style23.shop/",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2600&auto=format&fit=crop",
      gradient: "from-pink-400 to-rose-300"
    },
    {
      title: "Tabibi / DocLink DZ",
      description: "Plateforme digitale complete lel santé f dzair. Terbot les patients m3a les medecins direct. Recherche bel location (Geo-location), prise de rendez-vous facile, w dashboard complet lel tba.",
      tags: ["Flutter", "Dart"],
      url: "https://tabibi-five.vercel.app/login",
      image: "https://images.unsplash.com/photo-1576091160550-2187d80018fd?q=80&w=2940&auto=format&fit=crop",
      gradient: "from-emerald-500 to-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <main className="container mx-auto px-6 py-8 md:py-12 space-y-16 md:space-y-32">
        <nav className="flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Yakoub Bakhouche
          </span>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium backdrop-blur-sm"
          >
            Contact Me
          </a>
        </nav>

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

        {/* Projects Section */}
        <section id="projects" className="space-y-32 pb-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-12 text-center text-slate-500">
          <p>© 2026 Yakoub Bakhouche. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;
