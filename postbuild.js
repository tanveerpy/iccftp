import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
    {
        path: '/movie-servers',
        title: 'BDIX Movie Servers & Portals 2025 | Fastest FTP Links',
        description: 'Explore the fastest BDIX movie servers and FTP portals in Bangladesh including Cinehub24, FTPBD, Mojaloss, and SamOnline.',
        keywords: 'movie server bd, bdix ftp list, cinehub24, ftpbd, mojaloss, samonline ftp, circle ftp'
    },
    {
        path: '/live-tv',
        title: 'BDIX Live TV Portals 2025 | ICC, Sam, Toffee, Bioscope',
        description: 'Stream live TV in Bangladesh with zero lag using BDIX portals. Access ICC TV, SamOnline DhakaFlix, Toffee, and Sportzfy through high-speed local peering.',
        keywords: 'live tv ftp, bdix tv, icctv, dhakaflix, toffee live, bioscope live tv, sportzfy tv bd'
    },
    {
        path: '/tools',
        title: 'Advanced BDIX Network Tools & Analytical Utilities',
        description: 'Optimize your connection with our collection of BDIX speed testers, IP lookup tools, and ISP detectors. Designed for high-performance ROI in Bangladesh.',
        keywords: 'bdix tester, ip lookup bd, server search, network tools, ftp troubleshooting'
    },
    {
        path: '/guides',
        title: 'BDIX Guides & Network Setup Tutorials',
        description: 'Learn how to configure your router for BDIX, use IDM, bypass bandwidth limits, and troubleshoot FTP connections.',
        keywords: 'how to use bdix, idm bdix setup, bypass ftp limits, router config bdix, ftp troubleshooting bd'
    },
    {
        path: '/isp/icc',
        title: 'ICC Communication FTP & Media Portals',
        description: 'Access ICC Communication media servers, Live TV, and FTP hubs for high-speed streaming.',
        keywords: 'icc ftp, icc communication bd, icc live tv, icc movies, icc media server'
    },
    {
        path: '/isp/circle',
        title: 'Circle Network FTP & Emby Hub',
        description: 'Connect to Circle Network FTP, movie directory, and Emby servers. Maximize your entertainment with direct BDIX connectivity.',
        keywords: 'circle ftp, circle network bd, circle emby, circle media portal'
    },
    {
        path: '/isp/samonline',
        title: 'SamOnline FTP and Movie Directory',
        description: 'Discover the SamOnline BDIX FTP servers and resources. Blazing fast downloads and lag-free streaming.',
        keywords: 'samonline ftp, sam ftp, dhakaflix, samonline bdix'
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
