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
}
