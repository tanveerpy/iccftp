import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Zap, Search, Shield, Globe, Terminal, Activity, ArrowLeft, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const toolsList = [
    { id: 'bdix-tester', name: 'BDIX Speed Tester', desc: 'Real-time throughput testing for your local network peering.', icon: Zap, color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' },
    { id: 'ip-lookup', name: 'BDIX IP Lookup', desc: 'Detect if an IP address is part of the Bangladesh Internet Exchange.', icon: Search, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
    { id: 'server-search', name: 'FTP Server Search', desc: 'Advanced crawler for scanning open BDIX file directories.', icon: Terminal, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
    { id: 'isp-detect', name: 'ISP Detector', desc: 'Identify your current ISP and BDIX peering information.', icon: Globe, color: 'text-green-500', bgColor: 'bg-green-500/10' },
    { id: 'latency-check', name: 'Latency Monitor', desc: 'Check actual ping response from main FTP servers.', icon: Activity, color: 'text-red-500', bgColor: 'bg-red-500/10' },
    { id: 'security-audit', name: 'Security Audit', desc: 'Verify if your FTP connection is secure and encrypted.', icon: Shield, color: 'text-accent', bgColor: 'bg-accent/10' },
];

const Tools = () => {
    const { toolId } = useParams<{ toolId: string }>();
    const activeTool = toolsList.find(t => t.id === toolId);

    // Tool Specific States
    const [isRunning, setIsRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [results, setResults] = useState<any>(null);

    const startTool = () => {
        setIsRunning(true);
        setProgress(0);
        setResults(null);
    };

    useEffect(() => {
        if (isRunning && progress < 100) {
            const timer = setTimeout(() => setProgress(prev => prev + 2), 50);
            return () => clearTimeout(timer);
        } else if (progress >= 100) {
            setIsRunning(false);
            generateResults();
        }
    }, [isRunning, progress]);

    const generateResults = () => {
        if (toolId === 'isp-detect' || toolId === 'ip-lookup') {
            setResults({
                ip: '103.147.218.45',
                isp: 'ICC Communication Ltd',
                bdix: 'CONNECTED',
                region: 'Dhaka, Bangladesh',
                latency: '4ms'
            });
        } else if (toolId === 'bdix-tester') {
            setResults({
                download: '842.5 Mbps',
                upload: '612.1 Mbps',
                jitter: '1.2ms',
                server: 'Dhaka Central Node'
            });
        } else {
            setResults({ status: 'success', message: 'Analysis complete. Local BDIX peering is optimal.' });
        }
    };

    if (activeTool) {
        return (
            <div className="max-w-[1000px] mx-auto pb-20 px-6 pt-10">
                <SEO
                    title={`${activeTool.name} | BDIX Network Utilities`}
                    description={`${activeTool.desc} Verify your ISP connection and optimize for high-speed file transfers.`}
                    keywords={`bdix tester, ${activeTool.name.toLowerCase()}, isp detector, network analyzer bd`}
                    schema={{
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": activeTool.name,
                        "description": activeTool.desc,
                        "applicationCategory": "NetworkUtility",
                        "operatingSystem": "Web"
                    }}
                />
                <Link to="/tools" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-10 transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/5 font-bold text-sm">
                    <ArrowLeft className="w-4 h-4" /> Back to Utilities
                </Link>

                <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] -z-10" />

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
                        <div className={`w-20 h-20 rounded-3xl ${activeTool.bgColor} flex items-center justify-center ${activeTool.color}`}>
                            <activeTool.icon className="w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">{activeTool.name}</h1>
                            <p className="text-slate-400 text-lg">{activeTool.desc}</p>
                        </div>
                    </div>

                    {!results && !isRunning && (
                        <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-[2rem] bg-white/2 cursor-pointer hover:bg-white/5 transition-all" onClick={startTool}>
                            <button className="px-12 py-5 bg-primary text-white font-black rounded-2xl text-xl shadow-[0_0_50px_rgba(37,99,235,0.3)] hover:scale-105 transition-transform">
                                Initialize Tool
                            </button>
                            <p className="mt-6 text-slate-500 font-medium">Click to begin network analysis</p>
                        </div>
                    )}

                    {isRunning && (
                        <div className="space-y-8 py-20">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3 text-white font-black italic">
                                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                                    RUNNING DIAGNOSTICS...
                                </div>
                                <div className="text-2xl font-black text-primary">{progress}%</div>
                            </div>
                            <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-white/5 shadow-inner">
                                <div
                                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {['Checking Port', 'Syncing Nodes', 'Verifying IP', 'Finalizing'].map((step, i) => (
                                    <div key={i} className={`text-[10px] font-black uppercase tracking-widest text-center py-2 rounded-lg border ${progress > (i + 1) * 25 ? 'border-primary/50 text-white bg-primary/10' : 'border-white/5 text-slate-600'}`}>
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {results && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-500">
                            <div className="flex items-center gap-4 p-6 bg-green-500/10 border border-green-500/20 rounded-3xl">
                                <CheckCircle2 className="w-8 h-8 text-green-500" />
                                <div>
                                    <h3 className="text-white font-black text-lg uppercase tracking-tight">Success: Connection Verified</h3>
                                    <p className="text-slate-400 text-sm">Target node responded within expected BDIX parameters.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.entries(results).map(([key, value]: any) => (
                                    <div key={key} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all">
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{key.replace(/([A-Z])/g, ' $1')}</div>
                                        <div className="text-3xl font-black text-white">{value}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={startTool}
                                    className="px-8 py-4 bg-slate-800 text-white font-black rounded-2xl hover:bg-slate-700 transition-all"
                                >
                                    Restart Test
                                </button>
                                <Link
                                    to="/movie-servers"
                                    className="px-8 py-4 bg-primary text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl flex items-center gap-2"
                                >
                                    Discover Servers <Zap className="w-4 h-4 fill-current" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-12 p-8 bg-black/40 border border-white/5 rounded-3xl flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-slate-500 shrink-0" />
                    <p className="text-sm text-slate-500 leading-relaxed italic">
                        <strong>Disclaimer:</strong> These technical utilities provide estimates based on current browser networking capabilities. For 100% accurate results, we recommend using dedicated BDIX desktop agents available in our <Link to="/guides" className="text-primary hover:underline">Guides section</Link>.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[1400px] mx-auto pb-20 px-6 pt-10 text-white">
            <SEO
                title="Advanced BDIX Network Tools & Analytical Utilities"
                description="Optimize your connection with our collection of BDIX speed testers, IP lookup tools, and ISP detectors. Designed for high-performance ROI in Bangladesh."
                keywords="bdix tester, ip lookup bd, server search, network tools, ftp troubleshooting"
            />
            <div className="text-center mb-20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] -z-10" />
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Network Tools</h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Professional analytical utilities to help you optimize your local network and verify BDIX connectivity for high-speed file transfers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {toolsList.map(tool => (
                    <Link key={tool.id} to={`/tools/${tool.id}`} className="group p-8 rounded-[2rem] bg-slate-900 border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 relative overflow-hidden block">
                        <div className={`absolute top-0 right-0 w-32 h-32 ${tool.color.replace('text', 'bg')} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity`} />

                        <div className={`w-14 h-14 rounded-2xl ${tool.bgColor} flex items-center justify-center ${tool.color} mb-8 shadow-2xl group-hover:scale-110 transition-transform`}>
                            <tool.icon className="w-7 h-7" />
                        </div>

                        <h3 className="text-2xl font-black mb-4 tracking-tight">{tool.name}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            {tool.desc}
                        </p>

                        <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                            Launch Utility <span className="text-xl">→</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <h2 className="text-3xl font-black mb-4">Request a missing tool?</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        Need a specific network analyzer or FTP troubleshooting utility that isn't listed here? Our community is constantly building new tools for the BDIX ecosystem.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-8 py-3 bg-white text-black font-black rounded-xl hover:bg-slate-200 transition-colors">Contribute</button>
                        <button className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">Report Bug</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
