import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Clock, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const articles: Record<string, any> = {
  'what-is-bdix': {
    title: 'The Ultimate Guide to BDIX: Architecture, Peering, and Performance',
    category: 'Basics',
    readTime: '12 min read',
    content: `
      <h2>The Genesis of Local Peering in Bangladesh</h2>
      <p>Bangladesh Internet Exchange, commonly known as BDIX, is the cornerstone of the modern digital landscape in Bangladesh. Established with the vision of localizing network traffic, BDIX operates as a high-performance peering point where local Internet Service Providers (ISPs), Content Delivery Networks (CDNs), and educational institutions interconnect their networks. Before the advent of BDIX, even a simple email sent from one person in Dhaka to another colleague in the same city had to travel across international undersea cables to peering points in Singapore, Europe, or the USA before returning to Bangladesh. This "hairpinning" of data resulted in high latency, increased costs for international bandwidth, and a subpar user experience.</p>
      
      <p>Today, BDIX serves over 3,500 institutions and ISPs, acting as a physical infrastructure layer that ensures local data stays local. By bypassing international gateways for internal routing, BDIX provides speeds that are often 10x to 100x faster than standard international internet speed. This guide dives deep into the technical architecture, history, and optimization techniques for BDIX-enabled networks.</p>

      <h2>The Technical Architecture of BDIX</h2>
      <p>Technically, BDIX is a Layer-2 network fabric. When an ISP connects to BDIX, they establish a physical link to one of the exchange's high-capacity switching nodes. These nodes are distributed across key strategic locations in Dhaka to ensure redundancy and high availability. Once connected, ISPs use the Border Gateway Protocol (BGP) to "advertise" their internal IP prefixes (routes) to other members of the exchange.</p>

      <p>When you attempt to access an IP address like 10.16.100.244 (a well-known ICC Media Server), your computer first sends a request to your ISP’s router. The router checks its BGP routing table. If the target IP belongs to a prefix advertised via BDIX, the router immediately switches the packet onto the BDIX fabric instead of sending it toward the international submarine cable (SMW-4 or SMW-5). This reduction in "hops" is what brings latency down from 200ms+ (international route) to a mere 2ms-10ms (BDIX route).</p>

      <p>The exchange infrastructure handles Terabits of data daily. For a network engineer, BDIX represents a massive distributed switch. The efficiency of this switch depends on "flat" networking. Instead of navigating through multiple tiers of global transit as hierarchical networks do, BDIX members exist on a relatively flat plane. This horizontal scaling is what allows a user in Chittagong to stream from a server in Dhaka with less than 15ms of delay, even during peak hours when international cables are congested.</p>

      <h3>Public vs. Private Peering</h3>
      <p>Within the BDIX ecosystem, peering is categorized into two main types: Multi-Lateral Peering (MLPA) and Bi-Lateral Peering (BLPA). In MLPA, once an ISP connects to the BDIX route server, they automatically exchange traffic with every other member of the exchange. This is the foundation of most "BDIX Speed" features offered by local broadband providers. BLPA, on the other hand, involves two specific networks deciding to exchange higher volumes of traffic directly over the exchange for even better performance or cost management.</p>

      <h2>The "BDIX Speed" Phenomenon</h2>
      <p>In the Bangladeshi market, "BDIX Speed" has become a major commercial differentiator. Most ISPs offer a tiered bandwidth model: a base speed for international sites like YouTube and Facebook and a significantly higher speed (e.g., 500 Mbps or 1 Gbps) for any data routed through BDIX. This allows for seamless high-definition movie streaming and instant file downloads using local FTP servers.</p>
      
      <p>It is important to understand that BDIX is not the internet itself. It is a shortcut. If your ISP advertisement claims "1Gbps BDIX Speed," it means that when you access a server physically located in Bangladesh and connected to BDIX, you can download files at that speed. However, your speed to a server in California will still be limited by your standard international plan.</p>

      <h2>The History and Evolution</h2>
      <p>BDIX didn't just appear overnight. It was born out of necessity in early 2004. At that time, Bangladesh was just beginning its journey into the global digital age. The pioneers at the Sustainable Development Networking Programme (SDNP) and a handful of visionary ISPs realized that the future of the internet in Bangladesh depended on independence. They started with a single switch and a few members. Today, that small experiment has scaled into a national utility that rivals the infrastructure of many developed nations.</p>

      <p>This history is important because it highlights the resilience of the Bangladeshi network. Even when the main submarine cable (SeaMeWe-4) developed faults in the past, local services like banking, government portals, and media servers remained operational for users across the country. This regional autonomy is the ultimate "insurance policy" for the nation's digital economy.</p>

      <h2>The Future: BDIX and the 100G Era</h2>
      <p>As Bangladesh moves toward its digital goals, BDIX is upgrading its infrastructure to support 100G peering ports. This massive capacity is essential for the growing demand of local cloud computing, IoT devices, and high-concurrency esports events. Localization is no longer just about downloading movies; it is about building a resilient, high-speed regional internet infrastructure that is independent of international cable faults.</p>

      <div class="p-10 bg-primary/5 border border-primary/20 rounded-[2rem] my-10">
         <h4 class="text-white font-black mb-4">Summary Checklist for BDIX Optimization:</h4>
         <ul className="space-y-3 text-slate-400">
            <li>✓ Verify your ISP has active peering at a BDIX node.</li>
            <li>✓ Use local IP addresses for direct server access to avoid DNS delays.</li>
            <li>✓ Avoid VPNs when using local portals as they reroute traffic internationally.</li>
            <li>✓ Check our <strong>BDIX Speed Tester</strong> to confirm your peering throughput.</li>
         </ul>
      </div>

      <p>BDIX has transformed from a small experimental project into a national utility. Understanding its layers and how to navigate its routes is the first step for any power user in the region. At FTPHub, we are committed to providing the most accurate, real-time data to help you stay connected to this critical network infrastructure.</p>
    `
  },
  'how-to-connect': {
    title: 'Mastering FTP Connections: A Technical Guide for BDIX Networks',
    category: 'Tutorial',
    readTime: '15 min read',
    content: `
      <h2>Introduction to File Transfer Protocol</h2>
      <p>The File Transfer Protocol (FTP) remains one of the most reliable and widely used methods for moving large volumes of data. In the context of Bangladeshi BDIX networks, FTP is the primary bridge between massive localized media repositories and the end-user. Whether you are attempting to access a Linux mirror, a software repository, or a 4K media portal, understanding how to configure your connection is the difference between a 100 Mbps experience and a 1 Gbps breakthrough.</p>
      
      <p>This guide provides an exhaustive technical breakdown of connecting to local FTP servers, optimizing your client settings for BDIX, and troubleshooting common authentication and routing hurdles.</p>

      <h2>Understanding the Three Modes of Access</h2>
      <p>Before you even open a client, you must decide which method of access suits your needs. There are three primary ways to interact with a BDIX FTP server:</p>

      <h3>1. Web-Based Browser Access (HTTP/HTTPS)</h3>
      <p>Most modern media portals wrap their file index in a glossy web interface. This is the most "user-friendly" method, allowing you to browse categories and use a built-in player. However, it is often limited by the browser's single-threaded download engine. For large files, relying on a browser can lead to corrupted downloads if the connection flickers.</p>

      <h3>2. Native Client Access (FTP/SFTP)</h3>
      <p>Using a dedicated client like FileZilla or WinSCP is the professional approach. These clients support multi-threaded transfers (downloading different parts of a file simultaneously) and download resumption. If you have a 1 Gbps connection, a multi-threaded client can saturate your line in ways a standard browser cannot.</p>

      <h3>3. Strategic Network Mapping (SMB/WebDAV)</h3>
      <p>For power users, mapping an FTP server as a local network drive in Windows or macOS is the peak of convenience. This allows you to treat the remote BDIX directory as if it were a physical hard drive plugged into your computer. While powerful, this requires specific middleware or advanced OS configuration.</p>

      <h2>Step-by-Step Configuration Guide</h2>
      <p>Let's walk through the setup process for a standard BDIX media portal connection using a dedicated client.</p>

      <h3>Phase 1: Identifying the Target Node</h3>
      <p>First, you need the correct access address. While many portals have domains, these often resolve to international IPs for users outside the network. To ensure BDIX routing, always try to use the internal IP address. You can find verified local IPs on our <strong>Home Page</strong>.</p>

      <h3>Phase 2: Client Installation & Settings</h3>
      <p>We recommend FileZilla for most users. Once installed, navigate to the "Site Manager." Create a new entry and enter the following baseline settings:</p>
      <ul>
        <li><strong>Host:</strong> The IP address of the server.</li>
        <li><strong>Encryption:</strong> "Only use plain FTP (insecure)" or "Require implicit FTP over TLS" depending on the server requirements.</li>
        <li><strong>Logon Type:</strong> Anonymous (for public portals) or Normal (if your ISP provided credentials).</li>
      </ul>

      <h3>Phase 3: The "Transfer Mode" Secret</h3>
      <p>One of the most common reasons for connection failure is the "Active vs. Passive" mode conflict. If your computer is behind a router, you <strong>MUST</strong> set your client to <strong>Passive Mode</strong>. Passive mode allows your client to initiate all connections, ensuring a smooth handshake with the BDIX portal through your local firewall.</p>

      <h2>Optimizing for Gigabit Speeds</h2>
      <p>If you have a high-speed fiber connection, default settings will bottle-neck your performance. To achieve true gigabit throughput on BDIX servers, implement these three tweaks:</p>

      <p><strong>1. Maximize Simultaneous Transfers:</strong> In FileZilla, set "Maximum simultaneous transfers" to 10. This allows the client to download up to 10 files (or parts of a file) at once, bypassing per-socket bandwidth limits.</p>
      
      <p><strong>2. Adjust Buffer Sizes:</strong> Increasing your TCP buffer size in your operating system can help maintain high-speed data flow over low-latency routes. Windows users can use tools like TCP Optimizer to set their MTU to 1500 for fiber.</p>

      <p><strong>3. Use Wired Ethernet:</strong> Never attempt high-speed BDIX transfers over 2.4GHz Wi-Fi. The interference in dense urban environments will cause packet loss. Always use a Cat6 Ethernet cable.</p>

      <h2>Conclusion</h2>
      <p>Accessing the vast world of BDIX media doesn’t have to be a game of trial and error. By using the right clients, understanding transfer modes, and following optimization best practices, you can transform your local network into a high-performance workstation.</p>
    `
  },
  'ftp-client-guide': {
    title: 'Top 5 FTP Clients for BDIX Performance in 2025',
    category: 'Software',
    readTime: '10 min read',
    content: `
      <h2>The Search for the Ultimate BDIX Scraper</h2>
      <p>The core of any media enthusiast's setup in Bangladesh is the FTP client. While browsers are fine for occasional streaming, they fail when you need to download a 100GB 4K library or a complex software repository. In this guide, we review the top-performing software for the BDIX ecosystem, focusing on speed, threading, and persistence.</p>

      <h3>1. FileZilla: The Industry Standard</h3>
      <p>FileZilla remains the undisputed king of FTP clients. It is open-source, fast, and incredibly reliable. Its core strength lies in its "Site Manager," where you can maintain a database of hundreds of BDIX IPs (ICC, Sam, Circle, etc.) without having to memorize them. Most importantly, FileZilla handles "Keep-Alive" packets perfectly, preventing you from being timed out of busy BDIX servers during idle periods.</p>

      <h3>2. WinSCP: The Power User's Choice</h3>
      <p>For Windows users, WinSCP offers a unique advantage: it doubles as a file manager. You can drag and drop files between your local PC and the remote server with an interface that mirrors Windows Explorer. It also features robust "Synchronize" functionality, allowing you to keep a local mirror of your favorite BDIX software repository up to date automatically.</p>

      <h3>3. Cyberduck: Elegance for macOS</h3>
      <p>Mac users often find FileZilla's UI a bit dated. Cyberduck provides a modern, Mac-native experience. Its standout feature is its ability to integrate with the macOS Finder. This makes browsing a BDIX movie server feel as natural as browsing your "Downloads" folder.</p>

      <h3>4. IDM (Internet Download Manager): The Speed Demon</h3>
      <p>While not a traditional FTP client, IDM is the secret weapon for BDIX users. It can intercept "http://" FTP portal links and apply its legendary 32-segment multi-threading. This is often the only way to squeeze 1 Gbps out of a server that has strict per-connection throttling. If speed is your only metric, IDM is essential.</p>

      <h3>5. Total Commander: The Legacy Legend</h3>
      <p>For those who prefer a keyboard-driven interface, Total Commander is unmatched. Its dual-pane view and powerful filtering allow you to navigate through a BDIX server with thousands of movies in seconds. It is lightweight, stable, and incredibly fast on older hardware.</p>

      <h2>Client Comparison Matrix</h2>
      <div className="overflow-x-auto my-10 border border-white/5 rounded-2xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 font-black text-white italic uppercase tracking-widest leading-loose">
            <tr>
              <th className="p-4">Feature</th>
              <th className="p-4">FileZilla</th>
              <th className="p-4">WinSCP</th>
              <th className="p-4">IDM</th>
            </tr>
          </thead>
          <tbody className="text-slate-400 divide-y divide-white/5">
            <tr><td className="p-4">Multi-Threading</td><td className="p-4 text-green-500 font-bold">Excellent</td><td className="p-4">Good</td><td className="p-4 text-primary font-bold">God-Like</td></tr>
            <tr><td className="p-4">Protocol Support</td><td className="p-4">FTP/SFTP/S3</td><td className="p-4">FTP/SFTP/WebDAV</td><td className="p-4">HTTP/FTP</td></tr>
            <tr><td className="p-4">OS Compatibility</td><td className="p-4">All</td><td className="p-4">Windows Only</td><td className="p-4">Windows Only</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Final Recommendation</h2>
      <p>Most users should start with <strong>FileZilla</strong> for its balance of features and stability. However, if you are strictly downloading from web-based portals like ICC Media, pairing your browser with <strong>IDM</strong> will yield the highest possible transfer rates. For the most immersive experience, use a client that supports directory-level recursion to discover hidden files in the vast BDIX network.</p>
    `
  },
  'network-troubleshooting': {
    title: 'Diagnostic Deep-Dive: Fixing Slow BDIX & FTP Speeds',
    category: 'Technical',
    readTime: '18 min read',
    content: `
      <h2>The Frustration of Buffer Bloat</h2>
      <p>Nothing is more frustrating than having a 50 Mbps plan but seeing 50 KBps download speeds on a popular BDIX server. Network bottlenecks in Bangladesh are often complex, involving local copper faults, peering disputes, or misinterpreted router settings. This guide provides a clinical approach to diagnosing and resolving these issues.</p>

      <h3>The MTR (My Traceroute) Protocol</h3>
      <p>When you report a slow speed to your ISP, the first thing they ask for is a "tracert." However, a standard traceroute is just a snapshot. To get real data, use an MTR tool. It runs a continuous traceroute, showing you exactly which "hop" in the network is dropping packets. If the lag happens inside your ISP’s network (the first 1-3 hops), the issue is on their end. If it happens at the BDIX exchange (usually hops 4-6), there is a peering congestion issue.</p>

      <h3>Detecting DNS Leaks</h3>
      <p>Many "slow BDIX" issues are actually DNS issues. If your router resolves a domain like "circleftp.net" to its global cloud IP instead of its local 10.x.x.x address, your traffic will go through the international line. Always check your "DNS Leak" status. We recommend using your ISP’s internal DNS to ensure you are guided to the most efficient BDIX route.</p>

      <h3>MTU and RWIN Optimization</h3>
      <p>Modern fiber connections require larger packets to be efficient. If your Maximum Transmission Unit (MTU) is set too low (e.g., 1400 instead of 1500), your data will be fragmented, leading to massive overhead and slow speeds. Use the command <code>netsh interface ipv4 show subinterfaces</code> in Windows to verify your MTU is at least 1492 for PPPoE or 1500 for direct Ethernet.</p>

      <h2>A Step-by-Step Fix for Routing Issues</h2>
      <p>If you can't access a specific server, follow this sequence:</p>
      <ol>
        <li>Clear your local DNS cache: <code>ipconfig /flushdns</code>.</li>
        <li>Check if the IP is blocked by your antivirus or firewall.</li>
        <li>Switch from Wi-Fi to Ethernet and re-test.</li>
        <li>Use our <strong>ISP Detector</strong> to see if you are actually on a BDIX-peered network.</li>
      </ol>

      <p>Remember, BDIX is a voluntary peering agreement. If your ISP is not paying their dues or has a routing conflict with a target network, the connection simply won't work at BDIX speeds. In these cases, contacting your ISP's support desk with your MTR logs is the only way to get a resolution.</p>
    `
  },
  'secure-browsing': {
    title: 'Privacy and Security on Open BDIX Portals',
    category: 'Security',
    readTime: '11 min read',
    content: `
      <h2>The Risks of the "Open" Network</h2>
      <p>BDIX and local FTP portals were designed for performance, not privacy. Most of these services run on "http://" (port 80) or "ftp" (port 21), which means your data is sent in plain text across your local network. While this is acceptable for watching a movie, it poses a risk if you are transmitting sensitive credentials or personal data. This guide outlines how to stay safe while navigating the local Bangladeshi internet ecosystem.</p>

      <h3>1. Use a Sandbox for Unverified Downloads</h3>
      <p>Open directories are prime targets for automated malware injection. A file named "Antivirus-Free.exe" on an open FTP directory is almost certainly a Trojan. If you must download specialized software, use the <strong>Windows Sandbox</strong> feature to run it in an isolated environment first. Never trust execution-level files from a public peering portal without verification.</p>

      <h3>2. Avoiding Credential Hijacking</h3>
      <p>Since the initial handshake on many FTP servers is unencrypted, a "man-in-the-middle" attacker on your local hub could theoretically see your login password. <strong>Never</strong> use the same password for a BDIX portal that you use for your primary email, bank, or social media. Treat BDIX logins as "disposable" credentials.</p>

      <h3>3. The VPN Conflict</h3>
      <p>Many users have a VPN (like NordVPN or Warp) active 24/7. This is a common mistake for BDIX users. A VPN creates a tunnel to a server in a different country, essentially turning off your BDIX access. If your VPN is on, your "BDIX speed" is disabled, and you will be routed through the international line, resulting in extremely slow performance on local portals. Always disable your VPN when accessing BDIX resources.</p>

      <h3>4. Browser Hardening</h3>
      <p>When browsing media portals, your browser might be exposed to malicious scripts or intrusive tracking pixels. We recommend using a browser like <strong>Brave</strong> or <strong>Firefox</strong> with the "uBlock Origin" extension. This blocks unwanted scripts that may be embedded in the unofficial web-frontends of some local servers.</p>

      <h2>Summary of Security Best Practices</h2>
      <ul className="list-disc pl-6 space-y-4 text-slate-400">
        <li><strong>Check the Protocol:</strong> Always look for the green padlock. If it's missing, consider your session "public."</li>
        <li><strong>Verify File Extensions:</strong> Movies should be .mp4, .mkv, or .avi. If you see .exe or .zip for a movie, delete it immediately.</li>
        <li><strong>Update your Router:</strong> Poorly secured home routers are the biggest security hole in Bangladesh. Ensure your WPA3 encryption is active and your admin password is changed from "admin/admin."</li>
      </ul>

      <p>Staying safe on the BDIX network is about common sense and technical vigilance. By following these simple rules, you can enjoy high-speed content without compromising your digital identity.</p>
    `
  }
};

const GuideArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles[slug || ''];

  if (!article) {
    return (
      <div className="max-w-[800px] mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-black text-white mb-6 italic">ARTICLE TRANSMISSION IN PROGRESS...</h1>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-10">
          <div className="h-full bg-primary animate-pulse w-3/4" />
        </div>
        <p className="text-slate-500 mb-10 text-lg">Our data architects are finalizing the technical specifications for this guide.</p>
        <Link to="/guides" className="bg-primary text-white font-black px-12 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all">RETURN TO HUB</Link>
      </div>
    );
  }

  return (
    <article className="max-w-[960px] mx-auto pb-40 px-6 pt-10">
      <SEO
        title={`${article.title} | Technical Guide`}
        description={`Master ${article.category.toLowerCase()} concepts with our expert guide: ${article.title}. Technical insights for BDIX network users.`}
        ogType="article"
        keywords={`${article.category}, bdix guide, ftp tutorial, bangladesh internet peering`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "author": {
            "@type": "Organization",
            "name": "FTPHub Engineering"
          },
          "publisher": {
            "@type": "Organization",
            "name": "FTPHub"
          }
        }}
      />
      <Link to="/guides" className="inline-flex items-center gap-2 text-slate-500 hover:text-white mb-10 transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/5 font-bold text-sm">
        <ArrowLeft className="w-4 h-4" /> All Technical Guides
      </Link>

      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="px-4 py-1 bg-primary/10 text-primary border border-primary/20 text-[10px] uppercase font-black tracking-widest rounded-lg">{article.category}</span>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1] mb-12 drop-shadow-2xl">{article.title}</h1>

        <div className="flex items-center justify-between py-8 border-y border-white/5">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-black text-white shadow-xl rotate-3">FH</div>
            <div>
              <div className="text-lg font-black text-white italic tracking-tight">FTPHub Engineering</div>
              <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Network Peering Division • 2025</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("URL Copied to clipboard!");
              }}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-slate-400 hover:text-white border border-white/5"
              title="Copy link to article"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="prose prose-invert prose-slate max-w-none 
          prose-h2:text-4xl prose-h2:font-black prose-h2:tracking-tighter prose-h2:text-white prose-h2:mt-24 prose-h2:mb-10 prose-h2:italic
          prose-h3:text-2xl prose-h3:font-black prose-h3:text-primary prose-h3:mt-12 prose-h3:tracking-tight
          prose-p:text-slate-400 prose-p:text-xl prose-p:leading-relaxed prose-p:mb-8
          prose-strong:text-white prose-strong:font-black
          prose-li:text-slate-400 prose-li:text-lg prose-li:mb-4
          prose-ul:my-8 prose-ol:my-8"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="mt-40 p-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-[4rem] border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[120px] -z-10 group-hover:scale-110 transition-transform duration-1000" />
        <h3 className="text-3xl font-black text-white mb-6 italic tracking-tighter uppercase">Mission Complete?</h3>
        <p className="text-slate-400 mb-12 text-xl max-w-lg leading-relaxed font-medium">Ready to put these industry insights into practice? Benchmark your peering performance or discover the fastest server nodes in the region.</p>
        <div className="flex flex-wrap gap-6">
          <Link to="/tools/bdix-tester" className="flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:rotate-2 hover:scale-105 transition-all shadow-2xl">
            <Zap className="w-6 h-6 fill-current" /> Initialize Tester
          </Link>
          <Link to="/movie-servers" className="flex items-center gap-3 bg-white/5 text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:-rotate-2 hover:bg-white/10 transition-all border border-white/10">
            Discover Portals
          </Link>
        </div>
      </div>
    </article>
  );
};

export default GuideArticle;
