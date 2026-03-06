import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieServers from './pages/MovieServers';
import LiveTV from './pages/LiveTV';
import ISPHub from './pages/ISPHub';
import IPDetail from './pages/IPDetail';
import Tools from './pages/Tools';
import Guides from './pages/Guides';
import GuideArticle from './pages/GuideArticle';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-servers" element={<MovieServers />} />
          <Route path="/live-tv" element={<LiveTV />} />
          <Route path="/isp/:slug" element={<ISPHub />} />
          <Route path="/ip/:address" element={<IPDetail />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:toolId" element={<Tools />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideArticle />} />
        </Routes>

        <footer className="bg-slate-900 border-t border-white/5 py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
              <div>
                <div className="flex items-center gap-2 mb-8 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-white italic text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-all">F</div>
                  <span className="text-2xl font-black text-white tracking-tighter italic">FTPHub</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] font-medium">
                  The premier resource for <strong>Bangladesh Internet</strong> peering and <strong>FTP Serve</strong> discovery.
                </p>
              </div>
              <div>
                <h4 className="text-white font-black mb-8 italic uppercase tracking-widest text-xs">Popular Searches</h4>
                <ul className="space-y-4">
                  <li><Link to="/ip/10.16.100.244" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">ICC FTP Server</Link></li>
                  <li><Link to="/isp/circle" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">Circle FTP BDIX</Link></li>
                  <li><Link to="/isp/samonline" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">SamOnline 172.16.50.4</Link></li>
                  <li><Link to="/ip/103.106.238.74" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">Carnival FTP Server</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-black mb-8 italic uppercase tracking-widest text-xs">Node Directory</h4>
                <ul className="space-y-4">
                  <li><Link to="/movie-servers" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">Server3 FTPBD</Link></li>
                  <li><Link to="/" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">FTP Bangladesh</Link></li>
                  <li><Link to="/guides" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">BDIX Router Setup</Link></li>
                  <li><Link to="/" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">FTTP Server List</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-black mb-8 italic uppercase tracking-widest text-xs">Portals</h4>
                <ul className="space-y-4">
                  <li><a href="http://fmovies.fn" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">FMovies FN</a></li>
                  <li><a href="http://vision.futurenet.me" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">Vision Futurenet</a></li>
                  <li><a href="http://blinnwifi.net" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">Blinn WiFi Info</a></li>
                  <li><a href="http://netexpress-sport.blogspot.com" className="text-slate-500 hover:text-primary transition-colors text-sm font-bold">NetExpress Sport</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
