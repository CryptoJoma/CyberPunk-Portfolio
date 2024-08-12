const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://joma.dev' });

// Manually add URLs
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/projects', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });
sitemap.end();

// Write to file
streamToPromise(sitemap)
  .then(sm => fs.writeFileSync('./public/sitemap.xml', sm.toString(), 'utf8'))
  .then(() => console.log('Sitemap generated successfully!'))
  .catch(err => console.error('Error generating sitemap:', err));
