import { useParams } from 'react-router-dom';
import { SERVERS, ISPS } from '../data/servers';
import ServerCard from '../components/ServerCard';
import { Globe, Shield, Zap, Search, ChevronRight, Terminal } from 'lucide-react';
import SEO from '../components/SEO';

const ISPHub = () => {
    const { slug } = useParams<{ slug: string }>();
    const ispData = ISPS.find(i => i.slug === slug);
    const ispServers = SERVERS.filter(s => s.isp.toLowerCase().includes(slug?.toLowerCase() || ''));

    if (!ispData) {
        return <div className="text-center py-20 text-white">ISP not found.</div>;
    }

    return (
        <div className="max-w-[1400px] mx-auto pb-20 px-6 pt-10">
            <SEO
                title={ispData.slug === 'icc' ? "ICC FTP Server BD | Movie Server List 2025" : ispData.slug === 'circle' ? "Circle FTP Server | http circleftp net guide" : `${ispData.name} BDIX FTP & Movie Servers | Full List 2025`}
                description={ispData.slug === 'icc'
                    ? "Official icc ftp server list for Bangladesh. Access high-speed icc movie server portals, live TV, and BDIX peering links with 1Gbps speed. Verified 2025 guide."
                    : ispData.slug === 'circle' ? "Official index of circle ftp server at http circleftp net. Access circle ftp live tv and movies with ultra low latency." : `Official index of BDIX movie servers and FTP portals for ${ispData.name} subscribers. Find fast local peering links and troubleshooting tips for your network.`}
                keywords={ispData.slug === 'icc'
                    ? "icc ftp server bd, icc ftp server, icc ftp server list, icc movie server, bdix server"
                    : ispData.slug === 'circle' ? "http circleftp net, circle ftp live tv, circle ftp server, circle ftp" : `${ispData.name} ftp, ${ispData.name} login, bdix server, ftp server bd, local media portal`}

                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": `${ispData.name} Hub | FTPHub`,
                    "description": `Resources and server listings for ${ispData.name} network subscribers in Bangladesh.`,
                    "publisher": {
                        "@type": "Organization",
                        "name": "FTPHub"
                    }
                }}
            />
            <div className="bg-slate-900 rounded-[2.5rem] border border-white/5 p-8 md:p-16 mb-16 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 blur-[80px] -z-10" />

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-7xl font-black text-white shadow-2xl backdrop-blur-xl">
                        {ispData.logo}
                    </div>
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            Verified ISP Network
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">{ispData.name}</h1>
                        <p className="text-slate-400 text-lg max-w-2xl mb-8">
                            Optimization guide and verified server list for {ispData.name}. Access high-speed BDIX resources and local media portals directly from your network.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 px-4 py-2 rounded-xl text-sm text-slate-300">
                                <Zap className="w-4 h-4 text-yellow-500" /> BDIX Peering: Active
                            </div>
                            <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 px-4 py-2 rounded-xl text-sm text-slate-300">
                                <Shield className="w-4 h-4 text-green-500" /> Security: Verified
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
                <div className="space-y-10">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Available Servers</h2>
                        <div className="text-sm text-slate-500 font-bold">{ispServers.length} Resources Found</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {ispServers.map(server => (
                            <ServerCard key={server.id} {...server} />
                        ))}
                    </div>
                </div>

                <aside className="space-y-8">
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8">
                        {ispData.slug === 'icc' ? (
                            <>
                                <h3 className="text-xl font-bold text-white mb-6">ICC Quick Links</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'ICC Billing Portal', icon: Search, link: '#' },
                                        { name: 'ICC Login Page', icon: Globe, link: '#' },
                                        { name: 'ICC Broadband Info', icon: Zap, link: '#' },
                                        { name: 'ICC System TV', icon: Terminal, link: '#' },
                                        { name: 'ICC Server APK', icon: Zap, link: '#' },
                                        { name: 'ICC Support Ticket', icon: Shield, link: '#' },
                                        { name: 'ICC Cable Booking', icon: Zap, link: '#' },
                                    ].map(item => (
                                        <a key={item.name} href={item.link} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
                                            <div className="flex items-center gap-3">
                                                <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item.name}</span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: 'BD Customer Portal', icon: Search, link: '#' },
                                    { name: 'Customer Care Support', icon: Shield, link: '#' },
                                    { name: 'HelloTech Near Me', icon: Globe, link: '#' },
                                    { name: 'Fast Peering Setup', icon: Zap, link: '#' },
                                ].map(item => (
                                    <a key={item.name} href={item.link} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item.name}</span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-3xl">
                        <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4" /> Connection Tip
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Many users accidentally type <strong>10.16.1oo.244</strong> (using letters instead of zeros). Ensure you use <strong>10.16.100.244</strong> for a successful connection to the media server.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ISPHub;
