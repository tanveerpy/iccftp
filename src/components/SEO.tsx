import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    canonical?: string;
    schema?: object;
}

const SEO = ({
    title = 'FTPHub | Bangladesh BDIX FTP & Movie Server Directory',
    description = 'Discovery official BDIX FTP servers, movie portals, and live TV services in Bangladesh. Fast local peering for ICC, Circle, SamOnline, and more.',
    keywords = 'ftp server, bdix tester, circle ftp, samonline ftp, icc ftp server, fftp server, movie portal bd, live tv ftp',
    ogImage = '/og-image.png',
    ogType = 'website',
    canonical = 'https://iccftpserver.online',
    schema
}: SEOProps) => {
    const siteName = 'FTPHub';
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

            {!schema && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": siteName,
                        "url": canonical,
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": `${canonical}/?q={search_term_string}`,
                            "query-input": "required name=search_term_string"
                        }
                    })}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
