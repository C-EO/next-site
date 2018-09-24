const RSS = require('rss');

function importAll(r) {
  return r.keys().map(r);
}

const previewItems = importAll(
  require.context('../blog', false, /\-preview\.mdx$/)
);

function dateSortDesc(a, b) {
  const date1 = new Date(a.meta.date);
  const date2 = new Date(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

module.exports.generate = () => {
  const feed = new RSS({
    title: 'Next.js Blog',
    site_url: 'https://nextjs.org'
  });

  previewItems.sort(dateSortDesc).map(({ meta }, index) => {
    feed.item({
      title: meta.title,
      guid: meta.link,
      url: meta.url,
      date: meta.date
    });
  });

  return feed.xml({ indent: true });
};
