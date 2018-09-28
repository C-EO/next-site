const fs = require('fs');
const path = require('path');
const RSS = require('rss');

const baseDir = path.join(__dirname, '..', 'blog');
const previewItems = fs
  .readdirSync(baseDir)
  .map(filename => path.join(baseDir, filename))
  .filter(filePath => {
    const st = fs.statSync(filePath);
    return st.isFile() && filePath.endsWith('-preview.mdx');
  })
  .map(filePath => {
    // Workaround to extract `meta` from MDX files
    const content = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const metaExport = content
      .split('\n\n')
      .map(block => block.trim())
      .filter(block => block.startsWith('export const meta'))[0];

    if (!metaExport) {
      throw new Error(`Cannot extract meta info from ${filePath}!`);
    }

    try {
      let metaString = metaExport.slice(metaExport.indexOf('{'));
      let meta = new Function('return ' + metaString)();
      return meta;
    } catch (err) {
      throw new Error(`Failed to parse ${filePath}: ${err.message}`);
    }
  });

function dateSortDesc(a, b) {
  const date1 = new Date(a.date);
  const date2 = new Date(b.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

module.exports.generate = () => {
  const feed = new RSS({
    title: 'Next.js Blog',
    site_url: 'https://nextjs.org',
    feed_url: 'https://nextjs.org/feed.xml'
  });

  previewItems.sort(dateSortDesc).map(meta => {
    feed.item({
      title: meta.title,
      guid: meta.link,
      url: meta.url,
      date: meta.date,
      description: meta.description
    });
  });

  return feed.xml({ indent: true });
};
