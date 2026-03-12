import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Gamepad2,
    Wind,
    Sparkles,
    Heart,
    ChevronLeft,
    Home,
    Clock,
    LayoutGrid,
    User,
    Share2,
    X,
    MessageSquare
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

// --- Types ---

interface GameItem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    actionText: string;
}

interface NameItem {
    id: string;
    name: string;
}

// --- Mock Data ---

const GAMES: GameItem[] = [
    {
        id: 'puzzle',
        title: '(Puzzle) لعبة التركيب',
        description: 'ركبي صور طفلك المستقبلي بهدوء',
        icon: <Gamepad2 className="w-6 h-6" />,
        color: 'text-pink-500',
        bgColor: 'bg-pink-100',
        actionText: 'العبي الآن'
    },
    {
        id: 'lucky-box',
        title: 'صندوق الحظ',
        description: 'افتحي الصندوق لتحصلي على رسالة ملهمة',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'text-rose-400',
        bgColor: 'bg-rose-100',
        actionText: 'افتحي'
    },
    {
        id: 'breathing',
        title: 'تمرين التنفس',
        description: '3 دقائق من الهدوء والسكينة',
        icon: <Wind className="w-6 h-6" />,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-100',
        actionText: 'ابدئي'
    }
];

const NAMES: NameItem[] = [
    { id: '1', name: 'أريج' },
    { id: '2', name: 'ليلى' },
    { id: '3', name: 'ياسمين' },
    { id: '4', name: 'مريم' },
    { id: '5', name: 'سارة' },
    { id: '6', name: 'نور' },
    { id: '7', name: 'تالا' },
    { id: '8', name: 'جود' },
];

// --- Components ---

const GameCard: React.FC<{ game: GameItem }> = ({ game }) => (
    <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-3xl p-5 flex items-center justify-between shadow-sm border border-slate-100 mb-4"
    >
        <div className="flex items-center gap-4 text-right flex-1 flex-row-reverse">
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0", game.bgColor, game.color)}>
                {game.icon}
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-lg">{game.title}</h3>
                <p className="text-slate-500 text-sm mt-0.5">{game.description}</p>
            </div>
        </div>
        <button className="mr-4 px-4 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors">
            {game.actionText}
        </button>
    </motion.div>
);

const NamesCarousel: React.FC<{ items: NameItem[]; onShare: (name: string) => void }> = ({ items, onShare }) => (
    <div className="flex gap-4 overflow-x-auto pb-4 px-1 scrollbar-hide snap-x flex-row-reverse">
        {items.map((item) => (
            <motion.div
                key={item.id}
                whileTap={{ scale: 0.95 }}
                className="shrink-0 w-24 h-24 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-2 relative snap-center"
            >
                <button
                    onClick={() => onShare(item.name)}
                    className="absolute top-2 left-2 p-1 text-slate-300 hover:text-rose-500 transition-colors"
                >
                    <Heart size={14} />
                </button>
                <User size={24} className="text-slate-400" />
                <span className="text-slate-800 font-bold text-sm">{item.name}</span>
            </motion.div>
        ))}
    </div>
);

const ShareModal: React.FC<{ isOpen: boolean; name: string; onClose: () => void }> = ({ isOpen, name, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl relative z-10"
                >
                    <div className="p-6 text-center">
                        <div className="flex justify-between items-center mb-6">
                            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <X size={20} className="text-slate-400" />
                            </button>
                            <h3 className="text-xl font-bold text-slate-800 underline decoration-pink-300 underline-offset-8">انشري للأُمّ</h3>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 mb-6 text-right border border-dashed border-slate-200">
                            <p className="text-slate-500 text-sm mb-2 font-medium">ماذا تريدين أن تكتبي فوق اسم "{name}"؟</p>
                            <textarea
                                className="w-full bg-transparent border-none focus:ring-0 text-slate-800 text-lg font-bold p-0 text-right h-24 placeholder:text-slate-300"
                                placeholder="اكتبي رسالتكِ هنا..."
                                autoFocus
                            />
                        </div>

                        <button className="w-full bg-slate-900 text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-transform active:scale-[0.98]">
                            <Share2 size={18} />
                            <span>شاركي الآن</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        )}
    </AnimatePresence>
);

// --- Main Screen ---

export const NabdaScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'games' | 'care' | 'names'>('games');
    const [sharingName, setSharingName] = useState<string | null>(null);

    return (
        <div className="max-w-md mx-auto min-h-screen bg-[#FDFCFE] flex flex-col font-sans mb-32 rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 relative text-right" dir="rtl">

            {/* Status Bar Mockup */}
            <div className="h-10 w-full flex items-center justify-between px-8 text-[10px] font-bold text-slate-400">
                <span>9:41</span>
                <div className="flex gap-1.5">
                    <div className="w-3.5 h-2 rounded-[2px] border border-slate-300" />
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
            </div>

            {/* Header */}
            <header className="px-6 pt-2 pb-6 flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-all active:scale-95">
                        <Clock size={20} />
                    </button>
                    <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg relative overflow-hidden bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-xl">
                        T
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-400" />
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">نَـبـضـة</h1>
                    </div>
                    <p className="text-pink-400 text-sm font-medium mr-1.5">تسعة أشهر بأمان</p>
                </div>
            </header>

            {/* Title Section */}
            <div className="px-6 mb-8 flex items-center justify-between flex-row-reverse">
                <h2 className="text-4xl font-black text-slate-800">رفاهية</h2>
                <Link to="/works" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all group">
                    <ChevronLeft size={24} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Tabs */}
            <div className="px-6 flex gap-3 mb-8">
                {[
                    { id: 'care', label: 'عناية', icon: <Sparkles size={18} /> },
                    { id: 'games', label: 'ألعاب', icon: <Gamepad2 size={18} /> },
                    { id: 'names', label: 'الأسماء', icon: <User size={18} /> },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={cn(
                            "flex-1 py-3 px-4 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all text-sm",
                            activeTab === tab.id
                                ? "bg-pink-400 text-white shadow-md shadow-pink-200"
                                : "bg-white text-slate-400 border border-slate-100 hover:bg-slate-50"
                        )}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Content */}
            <main className="px-6 flex-1 max-h-[450px] overflow-y-auto scrollbar-hide">
                {activeTab === 'games' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        {GAMES.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </motion.div>
                )}

                {activeTab === 'names' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="mb-4 flex justify-between items-center flex-row-reverse">
                            <h3 className="font-bold text-slate-800">أشهر الأسماء</h3>
                            <button className="text-pink-400 text-xs font-bold px-3 py-1 bg-pink-50 rounded-full">عرض الكل</button>
                        </div>
                        <NamesCarousel items={NAMES} onShare={setSharingName} />

                        <div className="mt-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-3xl p-6 text-white text-right relative overflow-hidden shadow-xl shadow-pink-100">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-2">ساعدينا في الاختيار</h3>
                                <p className="text-white/80 text-sm leading-relaxed mb-4">اطلبي مساعدة من عائلتك وأصدقائك لاختيار اسم مولودك القادم بسهولة.</p>
                                <button className="bg-white text-pink-500 font-bold px-6 py-2 rounded-xl text-sm shadow-lg active:scale-95 transition-transform">بدء التصويت</button>
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <MessageSquare size={80} />
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'care' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 text-center"
                    >
                        <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">قسم العناية</h3>
                        <p className="text-slate-500 text-sm">هذا القسم قيد التطوير لتوفير أفضل النصائح الصحية لك ولطفلك.</p>
                    </motion.div>
                )}
            </main>

            {/* Bottom Nav Mockup */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-900 rounded-[24px] p-2 flex items-center justify-between shadow-2xl border border-white/5">
                    <div className="flex-1 flex justify-center py-2 text-slate-500 hover:text-white transition-colors cursor-pointer"><User size={20} /></div>
                    <div className="flex-1 flex justify-center py-2 text-slate-500 hover:text-white transition-colors cursor-pointer"><LayoutGrid size={20} /></div>
                    <div className="flex-1 flex justify-center py-2 text-slate-500 hover:text-white transition-colors cursor-pointer"><Clock size={20} /></div>
                    <div className="flex-1 flex justify-center py-2 shrink-0">
                        <div className="w-12 h-12 bg-white/10 rounded-[18px] flex items-center justify-center text-white"><Home size={20} /></div>
                    </div>
                </div>
            </div>

            {/* Share Modal */}
            <ShareModal
                isOpen={!!sharingName}
                name={sharingName || ''}
                onClose={() => setSharingName(null)}
            />
        </div>
    );
};
