import { Tv, PlayCircle, ExternalLink, Globe } from 'lucide-react';
import { TV_SERVICES } from '../data/servers';

import SEO from '../components/SEO';

const LiveTV = () => {
    return (
        <div className="max-w-[1400px] mx-auto pb-20 px-6 pt-10">
            <SEO
                title="BDIX Live TV Portals 2025 | ICC, Sam, Toffee, Bioscope"
                description="Stream live TV in Bangladesh with zero lag using BDIX portals. Access ICC TV, SamOnline DhakaFlix, Toffee, and Sportzfy through high-speed local peering."
                keywords="live tv ftp, bdix tv, icctv, dhakaflix, toffee live, bioscope live tv, sportzfy tv bd"
            />
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    <Tv className="w-3.5 h-3.5" />
                    <span>Real-time Streaming</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Live TV Portals</h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Access local and international TV channels through high-speed BDIX routing ports.
                    Optimized for lag-free streaming on Bangladeshi ISP networks.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {TV_SERVICES.map(service => (
                    <a
                        key={service.name}
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative overflow-hidden rounded-3xl p-6 h-44 flex flex-col items-start justify-between transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95 ${service.color}`}
                    >
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 pointer-events-none" />

                        <div className="flex w-full justify-between items-start relative z-10">
                            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                                <PlayCircle className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-black/20 rounded-lg text-[10px] uppercase font-black text-white/70 tracking-widest">
                                <Globe className="w-3 h-3" /> {service.isp}
                            </div>
                        </div>

                        <div className="relative z-10 w-full">
                            <span className="text-white font-black text-2xl tracking-tighter block mb-1 uppercase italic">{service.name}</span>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[10px] uppercase font-bold text-white/80">
                                Launch Portal <ExternalLink className="w-3 h-3" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl">
                    <h4 className="text-white font-bold text-lg mb-4">Streaming Requirements</h4>
                    <ul className="text-sm text-slate-400 space-y-3">
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Stable 5Mbps minimum connection recommended
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Local ISP (BDIX) connection for internal portals
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Latest browser (Chrome/Edge recommended)
                        </li>
                    </ul>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl">
                    <h4 className="text-white font-bold text-lg mb-4">Technical Note</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Some services like <strong>ICC-TV</strong> or <strong>OTV</strong> are only reachable if you are a customer of those specific networks. For general use from any Bangladeshi ISP, <strong>Toffee</strong> and <strong>Bioscope</strong> are the most reliable options.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LiveTV;
