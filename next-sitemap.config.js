/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.iguazuurbanhotel.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.iguazuurbanhotel.com/server-sitemap-index.xml', // <= add here
    ]
  }
}