import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Lock } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BrowserMockupProps {
    url: string;
    image?: string;
    title: string;
    isMobile: boolean;
    className?: string;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
    url,
    image,
    title,
    isMobile,
    className
}) => {
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        setLoading(true);
        setLoadError(false);
        setRefreshKey(prev => prev + 1);
    };

    return (
        <motion.div
            initial={false}
            animate={{
                width: isMobile ? '375px' : '100%',
                maxWidth: '100%'
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={cn(
                "relative flex flex-col rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700/50 mx-auto",
                "h-[300px] sm:h-[400px] md:h-[500px]",
                className
            )}
        >
            {/* Browser Toolbar */}
            <div className="flex items-center gap-4 px-4 py-3 bg-slate-800/80 backdrop-blur border-b border-slate-700/50">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>

                {/* Address Bar */}
                <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-slate-950/50 rounded-lg border border-slate-700/50 text-xs text-slate-400 font-mono">
                    <Lock className="w-3 h-3" />
                    <span className="truncate flex-1">{url.replace(/^https?:\/\//, '')}</span>
                    <button
                        onClick={handleRefresh}
                        className="hover:text-white transition-colors p-0.5 rounded-full hover:bg-slate-800"
                    >
                        <RefreshCw className={cn("w-3 h-3", loading && "animate-spin")} />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative bg-white w-full h-full overflow-hidden">
                {/* Iframe for Live Preview */}
                {!loadError && (
                    <iframe
                        key={refreshKey}
                        src={url}
                        title={title}
                        className="w-full h-full border-0"
                        onLoad={() => setLoading(false)}
                        onError={() => {
                            setLoadError(true);
                            setLoading(false);
                        }}
                        // Sandbox permissions for security, but allow necessary features
                        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                    />
                )}

                {/* Loading Overlay */}
                {loading && !loadError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                            <p className="text-xs text-slate-500 font-medium">Loading preview...</p>
                        </div>
                    </div>
                )}

                {/* Fallback Image / Error State */}
                {loadError && (
                    <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                        {image ? (
                            <img src={image} alt={title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="text-center p-6">
                                <p className="text-slate-400 mb-2">Preview unavailable</p>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline text-sm"
                                >
                                    Open {title} in new tab
                                </a>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};
