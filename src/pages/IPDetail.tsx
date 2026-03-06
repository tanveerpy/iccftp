import { useParams } from 'react-router-dom';
import { Terminal, Copy, ExternalLink, Network, Activity, HardDrive, Shield, Search, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const IPDetail = () => {
    const { address } = useParams<{ address: string }>();
    // Handle URL segments like 10-16-100-244
    const formattedIP = address?.replace(/-/g, '.');

    return (
        <div className="max-w-[1000px] mx-auto pb-20 px-6 pt-10">
            <SEO
                title={`${formattedIP} | BDIX IP Detail & Connection Guide`}
                description={`Technical specifications and optimization tips for connecting to ${formattedIP}. Verified BDIX peering for fast local access in Bangladesh.`}
                keywords={`${formattedIP}, bdix ip, ftp server ip, local gateway, ${formattedIP} login`}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": `IP Detail: ${formattedIP}`,
                    "description": `Detailed connection parameters for the BDIX node at ${formattedIP}.`
                }}
            />
            <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-slate-800/80 px-6 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Server Inspection Tool</span>
                    <div className="w-10" />
                </div>

                <div className="p-8 md:p-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <div className="flex items-center gap-3 text-accent font-bold mb-4">
                                <Network className="w-5 h-5" />
                                <span className="uppercase tracking-widest text-xs">Node Detail</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">{formattedIP}</h1>
                            <p className="text-slate-500 text-lg">BDIX Optimized Network Resource</p>
                        </div>

                        <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                            <ExternalLink className="w-5 h-5" /> Launch Server
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            { label: 'Latency', value: '2ms', icon: Activity, color: 'text-green-500' },
                            { label: 'Protocol', value: 'HTTP/FTP', icon: Terminal, color: 'text-blue-500' },
                            { label: 'Storage', value: 'Cloud-Net', icon: HardDrive, color: 'text-purple-500' }
                        ].map(stat => (
                            <div key={stat.label} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                                <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} />
                                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
                                <div className="text-2xl font-black text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-1.5 h-6 bg-primary rounded-full" /> Connection Details
                            </h2>
                            <div className="bg-black/40 rounded-3xl p-8 border border-white/5 overflow-x-auto">
                                <table className="w-full text-sm">
                                    <tbody className="divide-y divide-white/5">
                                        {[
                                            { key: 'IP Address', val: formattedIP },
                                            { key: 'Peering', val: 'BDIX Peering 1:1' },
                                            { key: 'Optimization', val: 'Fast-Path Routing' },
                                            { key: 'Status', val: 'Active (Production)' },
                                        ].map(row => (
                                            <tr key={row.key}>
                                                <td className="py-4 text-slate-500 font-bold pr-10">{row.key}</td>
                                                <td className="py-4 text-white font-mono">{row.val}</td>
                                                <td className="py-4 text-right">
                                                    <button className="p-2 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-colors">
                                                        <Copy className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Connection Tips</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-primary shrink-0" />
                                    <p className="text-sm text-slate-400">Ensure your <strong>Bangladesh Internet</strong> connection is BDIX-compliant for max speed.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <p className="text-sm text-slate-400">Use a high-performance <strong>FTP Serve</strong> client like FileZilla for multi-threaded downloads.</p>
                                </li>
                                <li className="flex items-start gap-3 text-red-400">
                                    <Search className="w-5 h-5 shrink-0" />
                                    <p className="text-xs italic leading-snug">Note: Avoid common IP entry errors like '10.16 100.244' or '100.216.344'. Correct IP is required for <strong>FTP Bangladesh</strong> peering.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 bg-blue-500/10 border border-blue-500/20 rounded-3xl">
                            <h4 className="text-blue-400 font-bold text-lg mb-3">Access Requirements</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                To reach <strong>{formattedIP}</strong> at maximum speed, ensure you are connected to a Bangladeshi ISP that supports BDIX. Direct access via IP is often faster than using domain aliases during peak hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IPDetail;
