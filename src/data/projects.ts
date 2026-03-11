export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    url: string;
    image?: string;
    gradient: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: "unified-ai-workspace",
        title: "Unified AI Workspace",
        description: "A distraction-free environment offering AI-powered tools like Notes, Slides, Docs, and Chat in one place. Features conversational input for fast content creation and seamless workflows.",
        tags: ["AI Workspace", "Productivity", "SaaS", "UX Design"],
        url: "#",
        image: "/unified-ai.webp",
        gradient: "from-violet-500 to-fuchsia-400",
        featured: false
    },
    {
        id: "friidge-recipe-app",
        title: "Friidge | Personalized Recipe App",
        description: "A personalized recipe app that uses deep learning for recommendations. Features an 'AI Button' to scan or list available ingredients and suggests suitable recipes instantly.",
        tags: ["Deep Learning", "AI Recipe", "Mobile App", "UX Design"],
        url: "#",
        image: "/bergar.webp",
        gradient: "from-orange-500 to-amber-400",
        featured: false
    },
    {
        id: "futuristic-ai-dashboard",
        title: "Futuristic AI Dashboard",
        description: "A futuristic AI-powered dashboard UI designed for productivity, smart planning, and seamless collaboration. Features glassmorphic layout, task tracking, and conversational AI integration.",
        tags: ["AI UI", "Dashboard", "SaaS", "Productivity"],
        url: "#",
        image: "/okiii.webp",
        gradient: "from-blue-600 to-indigo-400",
        featured: false
    },
    {
        id: "guitar-learning-app",
        title: "Guitar Learning App",
        description: "A modern and engaging mobile interface designed for aspiring guitarists. personalized onboarding, tab-based class management (In Progress, Saved, Completed), and interactive video lessons with real-time tracking.",
        tags: ["Mobile Design", "Interactive", "Learning"],
        url: "#", // No live link provided, using hashtag as placeholder
        image: "/jacob-bakhouche.webp",
        gradient: "from-purple-600 to-blue-500",
        featured: false
    },
    {
        id: "mediso-doctor-management",
        title: "Mediso | Doctor Profile Management",
        description: "A comprehensive platform for healthcare teams to manage doctor profiles, streamline patient interactions, and monitor performance. Centralizes patient data, schedules, and communication.",
        tags: ["Healthcare", "Management", "Dashboard"],
        url: "#",
        image: "/mediso.webp",
        gradient: "from-emerald-500 to-teal-400",
        featured: false
    },
    {
        id: "saas-ai",
        title: "Pharmasssit | Smart Pharmacy Assistant",
        description: "An advanced RAG-powered pharmacy assistant that provides secure, accurate medication consultations. Built with SQL   for ultra-fast response times and zero-hallucination accuracy based on official medical databases.",
        tags: ["flutter", "dart", "SQL"],
        url: "https://amine-dz.vercel.app/",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-indigo-500 to-blue-400",
        featured: true
    },
    {
        id: "serve-me",
        title: "Serve Me",
        description: "Plateforme service provider win te9der tel9a les professionnels li ta7tajhom. Booking f wa9tou (Real-time), paiment securisé, w map interactive bach tchoof win rahom les services.",
        tags: ["Flutter", "Dart", "SQL"],
        url: "https://www.serveme-app.org/dashboard", // Placeholder
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2500&auto=format&fit=crop",
        gradient: "from-blue-400 to-cyan-300",
        featured: true
    },
    {
        id: "wi-go",
        title: "Wi Go",
        description: "App ta3 VTC kima inDrive",
        tags: ["Flutter", "Dart", "SQL"],
        url: "https://taxi-bay.vercel.app/customer/dashboard",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-purple-500 to-indigo-500",
        featured: true
    },
    {
        id: "nabda",
        title: "Nabda",
        description: "App ta3 pharmacie delivery, tawsil rapide l dwa dyalek. Tscanner l'ordonnance, tsuivie l livreur, w gestion d'inventaire sahal lel les pharmacies.",
        tags: ["Flutter", "Dart"],
        url: "https://mon-ange-mom-companion.vercel.app/", // Placeholder
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-emerald-400 to-teal-300",
        featured: true
    },
    {
        id: "laya-style",
        title: "Laya Style",
        description: "Store e-commerce modern speacial nsa. Fih app mobile bach tjerer l stock w les commandes en temps réel. Design chbab w user experience smooth.",
        tags: ["Flutter", "Dart"],
        url: "https://www.laya-style23.shop/",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2600&auto=format&fit=crop",
        gradient: "from-pink-400 to-rose-300",
        featured: true
    },
    {
        id: "tabibi-doclink",
        title: "Tabibi / DocLink DZ",
        description: "Plateforme digitale complete lel santé f dzair. Terbot les patients m3a les medecins direct. Recherche bel location (Geo-location), prise de rendez-vous facile, w dashboard complet lel tba.",
        tags: ["Flutter", "Dart"],
        url: "https://tabibi-five.vercel.app/login",
        image: "https://images.unsplash.com/photo-1576091160550-2187d80018fd?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-emerald-500 to-teal-400",
        featured: true
    },
    {
        id: "essenza-shopping",
        title: "ESSENZA Shopping",
        description: "ESSENZA Shopping is a premium e-commerce web application designed for a modern shopping experience. Featuring a clean, responsive interface, it allows users to browse products, manage their cart, and track orders with ease. Built with Dart, Flutter, and SQL, and powered by Supabase for real-time data and authentication, the platform offers a seamless and high-performance shopping journey from discovery to checkout.",
        tags: ["E-commerce", "Flutter", "DART", "SQL"],
        url: "https://la-rose-de-guelma.vercel.app/",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
        gradient: "from-rose-500 to-pink-400",
        featured: true
    }
];
