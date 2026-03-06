import { Search, SunMoon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!search) return;

        // Smart routing logic
        if (/^(\d{1,3}\.){3}\d{1,3}$/.test(search)) {
            navigate(`/ip/${search.replace(/\./g, '-')}`);
        } else {
            // General search could go to home with a query or direct to an ISP
            navigate(`/?q=${encodeURIComponent(search)}`);
        }
        setSearch('');
    };

    return (
        <nav className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50" aria-label="Main Navigation">
            <Link to="/" className="flex items-center gap-2 group" title="FTPHub Home">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-black text-white group-hover:scale-110 transition-transform">F</div>
                <span className="text-xl font-bold tracking-tighter text-white">FTPHub</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                <Link to="/" className="hover:text-primary transition-colors" title="BDIX Server Directory">Home</Link>
                <Link to="/movie-servers" className="hover:text-primary transition-colors" title="BDIX Movie Portals">Movie Servers</Link>
                <Link to="/live-tv" className="hover:text-primary transition-colors" title="Live TV Services">Live TV</Link>
                <Link to="/guides" className="hover:text-primary transition-colors" title="Technical Guides">Guides</Link>
                <Link to="/tools" className="hover:text-primary transition-colors" title="BDIX Tools">Tools</Link>
            </div>

            <div className="flex items-center gap-4">
                <form onSubmit={handleSearch} className="relative hidden lg:block group" role="search">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-primary transition-colors" aria-hidden="true" />
                    <input
                        type="text"
                        placeholder="Search servers or IP..."
                        aria-label="Search servers or IP addresses"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-slate-900/50 border border-slate-700/50 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary w-64 focus:w-80 transition-all focus:ring-1 focus:ring-primary"
                    />
                </form>
                <button
                    className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    aria-label="Toggle Theme"
                    title="Toggle Theme"
                >
                    <SunMoon className="w-5 h-5" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
