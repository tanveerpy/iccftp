import ServerCard from '../components/ServerCard';
import { Film, Info } from 'lucide-react';
import { SERVERS } from '../data/servers';

import SEO from '../components/SEO';

const MovieServers = () => {
    const movieServers = SERVERS.filter(s => s.category === 'movies');

    return (
        <div className="max-w-[1400px] mx-auto pb-20 px-6 pt-10">
            <SEO
                title="BDIX Movie Server List 2025 | Fast Streaming Portals"
                description="Browse our curated list of authorized BDIX movie servers in Bangladesh. Find the fastest streaming links for ICC, Circle, SamOnline, and more."
                keywords="movie server, bdix movie server, icc movie server, circle ftp movie, movie portal bd, live tv ftp"
            />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <div className="flex items-center gap-3 text-primary font-bold mb-2">
                        <Film className="w-5 h-5" />
                        <span className="uppercase tracking-widest text-xs">Media Directory</span>
                    </div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Movie & Media Servers</h1>
                    <p className="text-slate-400 mt-2 max-w-xl">
                        A comprehensive list of BDIX-connected movie servers. These resources are typically only accessible while connected to your local ISP network.
                    </p>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-sm">
                    <Info className="w-4 h-4" />
                    <span>Only reachable via BDIX-enabled networks</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {movieServers.map(server => (
                    <ServerCard key={server.url} {...server} />
                ))}
            </div>

            <div className="mt-16 p-8 bg-slate-800/40 rounded-3xl border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Why can't I access these servers?</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Most movie servers in Bangladesh use <strong>BDIX (Bangladesh Internet Exchange)</strong>. This means they are hosted within the country's local network infrastructure. If your ISP does not have a peering agreement with the specific server's host, or if you are using a VPN, you may not be able to connect.
                </p>
                <button className="text-primary font-bold text-sm hover:underline">Read the BDIX Troubleshooting Guide →</button>
            </div>
        </div>
    );
};

export default MovieServers;
