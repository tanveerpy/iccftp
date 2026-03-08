import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ServerCard from '../components/ServerCard';
import { Filter, Star, History, Search } from 'lucide-react';
import { SERVERS, ISPS } from '../data/servers';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
    const [searchParams] = useSearchParams();
    const initialQuery = searchParams.get('q') || '';

    const [selectedISPs, setSelectedISPs] = useState<string[]>([]);
    const [onlineOnly, setOnlineOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [globalSearch, setGlobalSearch] = useState(initialQuery);
    const [displayCount, setDisplayCount] = useState(6);

    useEffect(() => {
        setGlobalSearch(searchParams.get('q') || '');
    }, [searchParams]);

    const toggleISP = (ispId: string) => {
        setSelectedISPs(prev =>
            prev.includes(ispId) ? prev.filter(i => i !== ispId) : [...prev, ispId]
        );
        setDisplayCount(6); // Reset on filter change
    };

    const filteredISPs = ISPS.filter(isp =>
        isp.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredServers = SERVERS.filter(server => {
        const ispMatch = selectedISPs.length === 0 || selectedISPs.includes(server.isp.toLowerCase());
        const statusMatch = !onlineOnly || server.status === 'online';
        const searchMatch = !globalSearch ||
            server.name.toLowerCase().includes(globalSearch.toLowerCase()) ||
            server.isp.toLowerCase().includes(globalSearch.toLowerCase());

        return ispMatch && statusMatch && searchMatch;
    });

    const featuredServers = filteredServers.slice(0, displayCount);

    return (
        <main className="max-w-[1400px] mx-auto pb-20">
            <SEO
                title="BDIX FTP Server List 2025 | ICC, SamOnline, Circle FTP Portals"
                description="The ultimate directory for Bangladesh BDIX FTP servers, movie portals, and live TV. Access ICC, Circle, SamOnline, and Amber IT localized services with 1Gbps speed."
                keywords="ftp server, bdix tester, icc ftp server, circle ftp, 10.16.100.244, samonline ftp, movie server bd"
            />
            <Hero />
            {/* Trending row below Hero section */}
            <section className="px-6 pb-10">
                <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase font-black tracking-widest text-slate-500">
                    <span className="text-primary italic">Trending:</span>
                    <Link to="/ip/10.16.100.244" className="hover:text-white transition-colors cursor-pointer">ICC FTP SERVER BD</Link>
                    <span className="w-1 h-1 bg-slate-800 rounded-full" />
                    <Link to="/ip/15.1.1.1" className="hover:text-white transition-colors cursor-pointer">15.1.1.1 Circle Network</Link>
                    <span className="w-1 h-1 bg-slate-800 rounded-full" />
                    <Link to="/movie-servers" className="hover:text-white transition-colors cursor-pointer">ICC Movie Server</Link>
                    <span className="w-1 h-1 bg-slate-800 rounded-full" />
                    <Link to="/?q=samonline" className="hover:text-white transition-colors cursor-pointer">Sam Online FTP</Link>
                    <span className="w-1 h-1 bg-slate-800 rounded-full" />
                    <Link to="/movie-servers" className="hover:text-white transition-colors cursor-pointer">ICC FTP Movie Server</Link>
                </div>
            </section>

            <div className="px-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
                {/* Sidebar */}
                <aside className="space-y-8 hidden lg:block">
                    <div className="bg-card-bg/30 border border-slate-700/50 rounded-[2rem] p-6">
                        <div className="flex items-center gap-2 mb-6 text-white font-bold">
                            <Filter className="w-4 h-4" />
                            <span>Network Filters</span>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 block">Service Provider</label>
                                <div className="relative mb-4">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                                    <input
                                        type="text"
                                        placeholder="Find ISP..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-primary transition-all text-white"
                                    />
                                </div>
                                <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                    {filteredISPs.map(isp => (
                                        <div key={isp.id} className="flex items-center justify-between group">
                                            <label className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white cursor-pointer transition-all">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedISPs.includes(isp.id)}
                                                    onChange={() => toggleISP(isp.id)}
                                                    className="w-4 h-4 rounded border-slate-700 bg-slate-900 checked:bg-primary transition-all cursor-pointer"
                                                />
                                                <span>{isp.name}</span>
                                            </label>
                                            <Link to={`/isp/${isp.slug}`} className="opacity-0 group-hover:opacity-100 text-[10px] font-black text-primary uppercase tracking-tighter hover:underline transition-opacity">
                                                Hub →
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-700/50">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={onlineOnly}
                                        onChange={() => {
                                            setOnlineOnly(!onlineOnly);
                                            setDisplayCount(6);
                                        }}
                                    />
                                    <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                                    <span className="ml-3 text-sm font-medium text-slate-300">Online only</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="p-1">
                        <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <History className="w-3.5 h-3.5" /> Recent Activity
                        </h4>
                        <div className="space-y-4">
                            {ISPS.slice(0, 3).map(isp => (
                                <Link key={isp.id} to={`/isp/${isp.slug}`} className="flex items-center gap-3 text-sm group cursor-pointer">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    <span className="text-slate-400 group-hover:text-white transition-colors">{isp.name} index updated</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            {selectedISPs.length > 0 ? 'Filtered Results' : 'Featured Servers'}
                        </h2>
                        <div className="text-sm text-slate-500">
                            Showing <span className="text-primary font-bold">{featuredServers.length}</span> of <span className="font-bold">{filteredServers.length}</span> resources
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {featuredServers.length > 0 ? (
                            featuredServers.map(server => (
                                <ServerCard key={server.id} {...server} />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center text-slate-500 border border-dashed border-slate-700 rounded-[2.5rem]">
                                No servers match your current filters.
                            </div>
                        )}
                    </div>

                    {filteredServers.length > displayCount && (
                        <div className="flex justify-center pt-10">
                            <button
                                onClick={() => setDisplayCount(prev => prev + 6)}
                                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg">
                                Load More Servers
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;
