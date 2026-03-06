import { Server as ServerIcon, AppWindow, Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServerCardProps {
    name: string;
    isp: string;
    url: string;
    status: 'online' | 'slow' | 'offline';
    speed?: string;
}

const ServerCard = ({ name, isp, url, status, speed }: ServerCardProps) => {
    const [copied, setCopied] = useState(false);

    // Convert url to route-friendly format
    const ipRoute = url.replace(/https?:\/\//g, '').replace(/\//g, '').replace(/\./g, '-');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const statusColors = {
        online: 'bg-green-500/10 text-green-500 border-green-500/20',
        slow: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        offline: 'bg-red-500/10 text-red-500 border-red-500/20',
    };

    return (
        <div className="group relative bg-card-bg border border-white/5 rounded-[2rem] p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />

            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    <ServerIcon className="text-primary w-5 h-5" />
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${statusColors[status]}`}>
                    {status}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{name}</h3>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                    <AppWindow className="w-3.5 h-3.5" />
                    {isp}
                </div>
            </div>

            <div className="space-y-4">
                <div className="relative group/input">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-400 group-hover/input:border-slate-700 transition-colors truncate pr-10">
                        {url}
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all active:scale-90"
                    >
                        {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                </div>

                <div className="flex items-center justify-between pt-2">
                    {speed && (
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            Speed: <span className="text-white">{speed}</span>
                        </div>
                    )}
                    <Link to={`/ip/${ipRoute}`} className="ml-auto text-xs font-black text-white hover:text-primary transition-colors flex items-center gap-1.5 uppercase tracking-widest group/btn">
                        View Details <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServerCard;
