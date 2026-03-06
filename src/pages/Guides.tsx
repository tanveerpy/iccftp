import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, FileText, HelpCircle, Lock } from 'lucide-react';
import SEO from '../components/SEO';

const guides = [
    { id: 'what-is-bdix', title: 'What is BDIX?', category: 'Basics', desc: 'Understanding the Bangladesh Internet Exchange and how it powers local routing.', icon: BookOpen },
    { id: 'how-to-connect', title: 'How to Access FTP Servers', category: 'Tutorial', desc: 'Step-by-step guide to connecting via Browser, VLC, or dedicated clients.', icon: ChevronRight },
    { id: 'ftp-client-guide', title: 'Best FTP Clients 2025', category: 'software', desc: 'Reviewing FileZilla, WinSCP, and Cyberduck for BDIX users.', icon: FileText },
    { id: 'network-troubleshooting', title: 'Speed Optimization Tips', category: 'Advanced', desc: 'How to maximize your 1Gbps BDIX port for faster downloads.', icon: HelpCircle },
    { id: 'secure-browsing', title: 'Safe File Transfers', category: 'Security', desc: 'Protecting your privacy when using open network directories.', icon: Lock },
];

const Guides = () => {
    return (
        <div className="max-w-[1200px] mx-auto pb-20 px-6 pt-10">
            <SEO
                title="BDIX & FTP Knowledge Base | Connection Guides & Tutorials"
                description="Master BDIX network protocols with our expert guides. Learn how to connect to FTP servers, optimize 1Gbps speeds, and secure your local file transfers."
                keywords="bdix guide, how to connect ftp, ftp client bd, speed optimization, bangladesh internet exchange"
            />
            <div className="mb-16">
                <h1 className="text-5xl font-black text-white tracking-tighter mb-4">Educational Resource Center</h1>
                <p className="text-slate-500 text-lg">Master local network protocols and file delivery concepts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map(guide => (
                    <Link key={guide.id} to={`/guides/${guide.id}`} className="group p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] hover:bg-slate-800 transition-all border-l-4 border-l-primary/10 hover:border-l-primary block">
                        <div className="flex justify-between items-start mb-6">
                            <span className="px-3 py-1 bg-white/5 text-[10px] uppercase font-black text-slate-400 tracking-widest rounded-lg">{guide.category}</span>
                            <guide.icon className="w-5 h-5 text-slate-500 group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{guide.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">{guide.desc}</p>
                        <span className="text-xs font-black text-white uppercase tracking-widest group-hover:underline">Read Full Article →</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Guides;
