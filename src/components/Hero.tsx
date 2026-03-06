import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <div className="relative pt-12 pb-20 px-6 overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
                    Find Working <span className="text-primary italic">FTP Servers</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Browse high-speed ISP local network servers and BDIX resources across Bangladesh. Safe, fast, and verified.
                </p>

                <div className="relative max-w-2xl mx-auto mb-8">
                    <div className="absolute inset-0 bg-primary/20 blur-xl scale-95 opacity-50 transition-opacity" />
                    <form onSubmit={handleSearch} className="relative flex items-center bg-slate-900 border border-slate-700 rounded-2xl p-2 shadow-2xl focus-within:border-primary/50 transition-all">
                        <Search className="ml-4 w-6 h-6 text-slate-500" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Enter ISP name, IP (e... 10.16.x.x), or category"
                            className="w-full bg-transparent border-none px-4 py-3 text-white placeholder:text-slate-500 focus:ring-0 focus:outline-none text-lg"
                        />
                        <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95 shrink-0">
                            Search
                        </button>
                    </form>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
                    <span>Popular:</span>
                    <Link to="/isp/icc" className="px-3 py-1 rounded-full border border-slate-800 hover:border-slate-600 hover:text-white transition-all bg-slate-800/30">ICC FTP</Link>
                    <Link to="/isp/circle" className="px-3 py-1 rounded-full border border-slate-800 hover:border-slate-600 hover:text-white transition-all bg-slate-800/30">Circle FTP</Link>
                    <Link to="/tools/bdix-tester" className="px-3 py-1 rounded-full border border-slate-800 hover:border-slate-600 hover:text-white transition-all bg-slate-800/30">BDIX Tester</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
