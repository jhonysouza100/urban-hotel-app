/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://www.iguazuurbanhotel.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/login', '/verify', '/register'],
  alternateRefs: [
    {
      href: 'https://www.iguazuurbanhotel.com/pt',
      hreflang: 'pt',
    },
    {
      href: 'https://www.iguazuurbanhotel.com/en',
      hreflang: 'en',
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/login', '/verify', '/register'],
      },
    ],
  },
}