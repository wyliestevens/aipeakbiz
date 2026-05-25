/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aipeakbiz.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/api/*'],
  transform: async (config, path) => {
    // Skip icon/asset files
    if (path.match(/\.(png|ico|jpg|jpeg|svg)$/)) return null;

    // Skip /en/ paths — English is served at root via middleware rewrite
    if (path.startsWith('/en/') || path === '/en') {
      const rootPath = path.replace(/^\/en/, '') || '/';
      return {
        loc: `https://www.aipeakbiz.com${rootPath}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: rootPath === '/' ? 1.0 : 0.7,
      };
    }

    // /es/ paths and any other paths pass through normally
    return {
      loc: `https://www.aipeakbiz.com${path}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
    };
  },
}
