import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
    {
        path: '/',
        title: 'FTPHub | BDIX Movie Servers, Live TV & FTP Server BD 2025',
        description: 'The premier resource for Bangladesh Internet peering. Discover the fastest BDIX movie servers, FTP portals, and Live TV links in Bangladesh.',
        keywords: 'ftphub, bdix movie server, ftp server bd, movie server list, bdix tester, circle ftp, icc ftp'
    },
    {
        path: '/movie-servers',
        title: 'BDIX Movie Servers & Portals 2025 | Fastest FTP Links',
        description: 'Explore the fastest BDIX movie servers and FTP portals in Bangladesh including Cinehub24, FTPBD, Mojaloss, and SamOnline.',
        keywords: 'movie server bd, bdix ftp list, cinehub24, ftpbd, mojaloss, samonline ftp, circle ftp'
    },
    {
        path: '/live-tv',
        title: 'BDIX Live TV Portals & FTP Server BD Live TV 2025',
        description: 'Stream live TV in Bangladesh with zero lag using ftp server bd live tv portals. Access ICC TV, ftp server live tv, Toffee, and Sportzfy through high-speed peering.',
        keywords: 'ftp server bd live tv, ftp server live tv, live tv ftp, bdix tv, icctv, dhakaflix, toffee live'
    },
    {
        path: '/tools',
        title: 'Bdix Tester Online & BDIX Network Tools',
        description: 'Optimize your connection with our collection of bdix tester online tools, IP lookup tools, and ISP detectors. Designed for high-performance ROI in Bangladesh.',
        keywords: 'bdix tester online, bdix tester, ip lookup bd, server search, network tools, ftp troubleshooting'
    },
    {
        path: '/guides',
        title: 'BDIX Guides & Network Setup Tutorials',
        description: 'Learn how to configure your router for BDIX, use IDM, bypass bandwidth limits, and troubleshoot FTP connections.',
        keywords: 'how to use bdix, idm bdix setup, bypass ftp limits, router config bdix, ftp troubleshooting bd'
    },
    {
        path: '/guides/what-is-bdix',
        title: 'What is BDIX? | Bangladesh Internet Exchange Guide',
        description: 'A comprehensive guide to understanding BDIX, local peering, and why it provides blazing fast speeds for FTP servers and streaming.',
        keywords: 'what is bdix, bdix meaning, local peering bangladesh, ixp bd'
    },
    {
        path: '/guides/how-to-connect',
        title: 'How to Connect to FTP Servers | Step-by-Step Guide',
        description: 'Learn how to access BDIX movie servers using your browser, VLC media player, or dedicated FTP clients like FileZilla.',
        keywords: 'how to connect ftp, access movie server, ftp vlc guide'
    },
    {
        path: '/guides/ftp-client-guide',
        title: 'Best FTP Clients 2025 for BDIX Users',
        description: 'Reviewing the top FTP clients for Bangladesh: FileZilla vs WinSCP vs Cyberduck. Optimize your download speeds.',
        keywords: 'best ftp client, filezilla bd, winscp guide'
    },
    {
        path: '/guides/network-troubleshooting',
        title: 'Speed Optimization & Network Troubleshooting',
        description: 'Fix slow BDIX speeds and troubleshoot connection issues with local FTP servers and media portals.',
        keywords: 'fix slow bdix, ftp connection error, speed up ftp'
    },
    {
        path: '/guides/secure-browsing',
        title: 'Safe File Transfers & Secure Browsing in Bangladesh',
        description: 'How to stay safe while using open network directories and BDIX FTP servers. Privacy and security tips.',
        keywords: 'secure ftp, anonymous browsing bd, safe file transfer'
    },
    {
        path: '/isp/icc',
        title: 'ICC FTP Server BD | Movie Server List 2025',
        description: 'Official icc ftp server list for Bangladesh. Access high-speed icc movie server portals, live TV, and BDIX peering links with 1Gbps speed. Verified 2025 guide.',
        keywords: 'icc ftp server bd, icc ftp server, icc ftp server list, icc movie server, bdix server'
    },
    {
        path: '/isp/circle',
        title: 'Circle FTP Server | http circleftp net guide',
        description: 'Official index of circle ftp server at http circleftp net. Access circle ftp live tv and movies with ultra low latency.',
        keywords: 'http circleftp net, circle ftp live tv, circle ftp server, circle ftp'
    },
    {
        path: '/isp/samonline',
        title: 'SamOnline FTP and Movie Directory',
        description: 'Discover the SamOnline BDIX FTP servers and resources. Blazing fast downloads and lag-free streaming.',
        keywords: 'samonline ftp, sam ftp, dhakaflix, samonline bdix'
    },
    {
        path: '/ip/10.16.100.244',
        title: '10.16.100.244 | ICC FTP Server BD Media Portal',
        description: 'Official connection guide for ICC FTP Server 10.16.100.244. Access the premier movie and media portal for ICC Communication subscribers in Bangladesh.',
        keywords: '10.16.100.244, bdix ip, ftp server ip, local gateway, 10.16.1oo.244, icc ftp server bd'
    },
    {
        path: '/ip/15.1.1.1',
        title: '15.1.1.1 | Circle Network FTP & Live TV Portal',
        description: 'Access 15.1.1.1 Circle Network FTP and movie server. High-speed local peering guide for Circle Network subscribers in Bangladesh.',
        keywords: '15.1.1.1, bdix ip, 15.1.1.1 circle network, circle network 15.1.1.1'
    }
];

const distPath = path.resolve(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
    console.error('index.html not found in dist. Make sure to run vite build first.');
    process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf-8');

routes.forEach(route => {
    const routeDir = path.join(distPath, route.path.substring(1));
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }

    let modifiedHtml = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
    modifiedHtml = modifiedHtml.replace(/<meta name="description"[\s\S]*?>/, `<meta name="description" content="${route.description}" />`);
    modifiedHtml = modifiedHtml.replace(/<meta name="keywords"[\s\S]*?>/, `<meta name="keywords" content="${route.keywords}" />`);
    modifiedHtml = modifiedHtml.replace(/<meta property="og:title"[\s\S]*?>/, `<meta property="og:title" content="${route.title}" />`);
    modifiedHtml = modifiedHtml.replace(/<meta property="og:description"[\s\S]*?>/, `<meta property="og:description" content="${route.description}" />`);
    modifiedHtml = modifiedHtml.replace(/<meta property="og:url"[\s\S]*?>/, `<meta property="og:url" content="https://iccftpserver.online${route.path}" />`);
    modifiedHtml = modifiedHtml.replace(/<meta name="twitter:title"[\s\S]*?>/, `<meta name="twitter:title" content="${route.title}" />`);
    modifiedHtml = modifiedHtml.replace(/<meta name="twitter:description"[\s\S]*?>/, `<meta name="twitter:description" content="${route.description}" />`);
    modifiedHtml = modifiedHtml.replace(/<link rel="canonical"[\s\S]*?>/, `<link rel="canonical" href="https://iccftpserver.online${route.path}" />`);

    // Inject barebones SEO content into #root so non-JS crawlers see SOME content
    const baseContent = `<div id="root">
        <div style="padding: 40px; background: #020617; color: #fff; min-height: 100vh; font-family: sans-serif;">
            <h1>${route.title}</h1>
            <p>${route.description}</p>
            <p>Loading application content...</p>
        </div>
    </div>`;
    modifiedHtml = modifiedHtml.replace(/<div id="root"><\/div>/, baseContent);


    fs.writeFileSync(path.join(routeDir, 'index.html'), modifiedHtml);
    console.log(`Generated HTML for ${route.path}`);
});
