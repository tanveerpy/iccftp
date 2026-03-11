export interface Server {
    id: string;
    name: string;
    isp: string;
    url: string;
    status: 'online' | 'slow' | 'offline';
    speed?: string;
    category: 'movies' | 'ftp' | 'tv' | 'tools';
    description?: string;
    features?: string[];
}

export const SERVERS: Server[] = [
    // ICC Communication
    { id: 'icc-media', name: 'icc ftp server movie', isp: 'ICC', url: 'http://10.16.100.244/', status: 'online', speed: '1 Gbps', category: 'movies', description: 'Premier icc ftp movie server and media portal for ICC subscribers.' },
    { id: 'icc-tv', name: 'ICC Live TV', isp: 'ICC', url: 'http://10.16.100.244/livetv.php', status: 'online', speed: '100 Mbps', category: 'tv' },
    { id: 'icc-ftp-2', name: 'icc ftp server bd', isp: 'ICC', url: 'http://10.16.100.2/', status: 'slow', speed: '500 Mbps', category: 'ftp', description: 'Fast icc ftp server link for dedicated peering.' },
    { id: 'icc-portal', name: 'icc ftp server', isp: 'ICC', url: 'http://icc.com.bd', status: 'online', category: 'tools' },

    // Circle Network
    { id: 'circle-ftp', name: 'circle ftp server', isp: 'Circle', url: 'http://circleftp.net/', status: 'online', speed: '1 Gbps', category: 'movies', description: 'Main circle ftp server at http circleftp net.' },
    { id: 'circle-local', name: '15.1.1.1 circle network', isp: 'Circle', url: 'http://15.1.1.1/', status: 'online', category: 'ftp' },
    { id: 'circle-ftp-2', name: 'Circle FTP 2', isp: 'Circle', url: 'http://ftp2.circleftp.net/', status: 'online', category: 'ftp' },
    { id: 'circle-emby', name: 'circle ftp live tv & Emby', isp: 'Circle', url: 'http://emby.circleftp.net:8096', status: 'online', category: 'movies' },

    // SamOnline
    { id: 'sam-ftp', name: 'sam online ftp', isp: 'SamOnline', url: 'https://samftp.com', status: 'online', speed: '500 Mbps', category: 'movies' },
    { id: 'sam-local-1', name: 'SamOnline Local 1', isp: 'SamOnline', url: 'http://172.16.50.4', status: 'online', category: 'ftp' },
    { id: 'sam-tv-1', name: 'DhakaFlix TV 1', isp: 'SamOnline', url: 'http://172.16.50.22', status: 'online', category: 'tv' },

    // Link3
    { id: 'link3-cinehub', name: 'Cinehub24', isp: 'Link3', url: 'http://www.cinehub24.com', status: 'online', speed: '1 Gbps', category: 'movies' },
    { id: 'link3-ftpbd', name: 'ftp bd Main', isp: 'Link3', url: 'http://ftpbd.net', status: 'online', speed: '1 Gbps', category: 'movies' },
    { id: 'link3-discovery', name: 'Discovery FTP', isp: 'Link3', url: 'http://discoveryftp.net', status: 'online', category: 'movies' },

    // Amber IT
    { id: 'amber-binodon', name: 'BinodonMela', isp: 'Amber IT', url: 'http://binodonmela.net', status: 'online', speed: '1 Gbps', category: 'movies' },
    { id: 'amber-vdomela', name: 'VdoMela', isp: 'Amber IT', url: 'http://vdomela.com', status: 'online', category: 'movies' },

    // Carnival
    { id: 'carnival-ftp', name: 'Carnival FTP', isp: 'Carnival', url: 'http://103.106.238.74', status: 'online', category: 'movies' },

    // Dot Internet
    { id: 'dot-dflix', name: 'Dflix Server', isp: 'Dot Internet', url: 'http://ftp.dot.com.bd', status: 'online', category: 'movies' },

    // Additional Providers
    { id: 'natural-bd', name: 'NaturalBD', isp: 'NaturalBD', url: 'http://www.naturalbd.com', status: 'online', category: 'movies' },
    { id: 'ctg-fun', name: 'CTG Fun', isp: 'CTGMovies', url: 'http://media.ctgfun.com', status: 'online', category: 'movies' },
    { id: 'showtime-bd', name: 'ShowtimeBD', isp: 'MoonNet', url: 'http://showtimebd.com', status: 'online', category: 'movies' },
    { id: 'discovery-ftp', name: 'Discovery FTP', isp: 'Link3', url: 'http://discoveryftp.net', status: 'online', category: 'movies' },
    { id: 'nagordola', name: 'Nagordola', isp: 'Carnival', url: 'http://nagordola.com.bd', status: 'online', category: 'movies' },

    // Integrated Missing Keywords & Specific Portals
    { id: 'fmovies-fn', name: 'FMovies.fn (BDIX)', isp: 'Generic', url: 'http://fmovies.fn', status: 'online', category: 'movies', description: 'Massive movie directory accessible via local peering.' },
    { id: 'vision-futurenet', name: 'Vision FutureNet', isp: 'Generic', url: 'http://vision.futurenet.me', status: 'online', category: 'tv', description: 'High-speed live TV streaming portal.' },
    { id: 'netexpress-sport', name: 'NetExpress Sport', isp: 'Generic', url: 'http://netexpress-sport.blogspot.com', status: 'online', category: 'tv' },
    { id: 'iccms-edu', name: 'ICCMS Edu Portal', isp: 'ICC', url: 'http://www.iccms.edu.bd', status: 'online', category: 'tools', description: 'Institutional access and educational resources.' },
    { id: 'blinn-wifi', name: 'Blinn WiFi', isp: 'Generic', url: 'http://blinnwifi.net', status: 'online', category: 'tools' },
    { id: 'local-gateway-1', name: '10.16.1oo.244 (Typo Fix)', isp: 'Generic', url: 'http://10.16.100.244', status: 'online', category: 'ftp', description: 'Local network configuration and file sync.' },

    // Generic BDIX / Other
    { id: 'cinema-bazar', name: 'Cinema Bazar', isp: 'BDIX', url: 'http://103.81.104.98/', status: 'online', category: 'movies' },
    { id: 'mojaloss', name: 'Mojaloss Stream', isp: 'BDIX', url: 'https://www.mojaloss.stream', status: 'online', category: 'movies' },
    { id: 'moviehaat', name: 'Movie Haat', isp: 'BDIX', url: 'http://moviehaat.net', status: 'online', category: 'movies' },
    { id: 'moviebazar', name: 'MovieBazar', isp: 'BDIX', url: 'http://moviebazar.net', status: 'online', category: 'movies' },
];

export const TV_SERVICES = [
    { name: 'BCIP-TV', url: 'http://bciptv.net/', color: 'bg-red-600', isp: 'Generic' },
    { name: 'BDIP-TV', url: 'http://tv.bdiptv.net/', color: 'bg-orange-600', isp: 'Generic' },
    { name: 'Toffee', url: 'https://toffeelive.com/', color: 'bg-yellow-600', isp: 'Public' },
    { name: 'Sportzfy TV', url: 'https://sportzfytvbd.com/', color: 'bg-green-600', isp: 'Public' },
    { name: 'Jagobd', url: 'http://www.jagobd.com/', color: 'bg-blue-600', isp: 'Public' },
    { name: 'Bioscope', url: 'https://www.bioscopelive.com/', color: 'bg-indigo-600', isp: 'Public' },
    { name: 'OTV', url: 'http://otv.ftpbd.net/', color: 'bg-purple-600', isp: 'Link3' },
    { name: 'ICC-TV', url: 'http://10.16.100.244/livetv.php', color: 'bg-pink-600', isp: 'ICC' },
    { name: 'DhakaFlix', url: 'http://172.16.50.22', color: 'bg-slate-700', isp: 'SamOnline' },
    { name: 'Alibaba IPTV', url: 'http://alibaba.iptv', color: 'bg-yellow-700', isp: 'Generic' },
    { name: 'BDFlix', url: 'http://bdflix.net', color: 'bg-indigo-700', isp: 'Public' },
];

export const ISPS = [
    { id: 'icc', name: 'ICC Communication', slug: 'icc', logo: 'F', color: 'blue' },
    { id: 'circle', name: 'Circle Network', slug: 'circle', logo: 'C', color: 'emerald' },
    { id: 'samonline', name: 'SamOnline', slug: 'samonline', logo: 'S', color: 'orange' },
    { id: 'link3', name: 'Link3 Technologies', slug: 'link3', logo: 'L', color: 'purple' },
    { id: 'amberit', name: 'Amber IT', slug: 'amber-it', logo: 'A', color: 'red' },
    { id: 'carnival', name: 'Carnival Internet', slug: 'carnival', logo: 'K', color: 'pink' },
    { id: 'dot-internet', name: 'Dot Internet', slug: 'dot-internet', logo: 'D', color: 'indigo' },
    { id: 'ctgmovies', name: 'CTGMovies (CTG Server Ltd)', slug: 'ctgmovies', logo: 'M', color: 'cyan' },
    { id: 'naturalbd', name: 'NaturalBD', slug: 'naturalbd', logo: 'N', color: 'green' },
];
