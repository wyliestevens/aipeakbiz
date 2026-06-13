const highPriorityPages = ['/', '/es', '/pricing', '/free-assessment', '/about'];
const servicePaths = ['/ai-chatbot', '/ai-voice-assistant', '/missed-call-text-back', '/database-reactivation', '/ai-appointment-setter', '/reputation-management', '/website-design', '/ai-consulting'];
const comparePaths = ['/compare/ai-peak-biz-vs-podium', '/compare/ai-peak-biz-vs-ruby', '/compare/ai-peak-biz-vs-smith-ai'];
const toolPaths = ['/tools/missed-call-calculator'];
const legalPaths = ['/terms', '/privacy-policy', '/disclaimer'];

function getPriority(path) {
  const clean = path.replace(/^\/es/, '') || '/';
  if (clean === '/') return path.startsWith('/es') ? 0.9 : 1.0;
  if (servicePaths.some(s => clean === s)) return 0.9;
  if (['/pricing', '/free-assessment', '/about'].includes(clean)) return 0.8;
  if (clean.startsWith('/industries/')) return 0.8;
  if (comparePaths.includes(clean)) return 0.8;
  if (toolPaths.includes(clean)) return 0.8;
  if (legalPaths.includes(clean)) return 0.3;
  if (clean === '/blog') return 0.3;
  return 0.7;
}

function getChangefreq(path) {
  const clean = path.replace(/^\/es/, '') || '/';
  if (legalPaths.includes(clean)) return 'monthly';
  if (clean === '/blog' || clean.startsWith('/blog/')) return 'daily';
  return 'weekly';
}

async function getBabyLoveGrowthBlogPaths(config) {
  if (!process.env.BABYLOVEGROWTH_BLOG_API_KEY) return [];

  try {
    const response = await fetch('https://api.babylovegrowth.ai/api/integrations/v1/articles?limit=500&offset=0', {
      headers: {
        'X-API-Key': process.env.BABYLOVEGROWTH_BLOG_API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) return [];

    const articles = await response.json();
    if (!Array.isArray(articles)) return [];

    return articles
      .filter((article) => article && article.slug)
      .flatMap((article) => {
        const lastmod = article.updated_at || article.created_at || new Date().toISOString();
        return [
          { loc: `${config.siteUrl}/blog/${article.slug}`, lastmod, changefreq: 'daily', priority: 0.7 },
          { loc: `${config.siteUrl}/es/blog/${article.slug}`, lastmod, changefreq: 'daily', priority: 0.6 },
        ];
      });
  } catch (error) {
    console.warn('BabyLoveGrowth sitemap fetch failed', error);
    return [];
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aipeakbiz.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
  },
  exclude: ['/api/*'],
  additionalPaths: async (config) => getBabyLoveGrowthBlogPaths(config),
  transform: async (config, path) => {
    // Skip icon/asset files
    if (path.match(/\.(png|ico|jpg|jpeg|svg)$/)) return null;

    // Skip /en/ paths — English is served at root via middleware rewrite
    if (path.startsWith('/en/') || path === '/en') {
      const rootPath = path.replace(/^\/en/, '') || '/';
      return {
        loc: `https://www.aipeakbiz.com${rootPath}`,
        lastmod: new Date().toISOString(),
        changefreq: getChangefreq(rootPath),
        priority: getPriority(rootPath),
      };
    }

    // /es/ paths and any other paths pass through normally
    return {
      loc: `https://www.aipeakbiz.com${path}`,
      lastmod: new Date().toISOString(),
      changefreq: getChangefreq(path),
      priority: getPriority(path),
    };
  },
}
