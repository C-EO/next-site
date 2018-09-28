const fs = require('fs');
const path = require('path');
const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@zeit/next-mdx')({
  options: {
    hastPlugins: [rehypePrism]
  }
});

const { mapping: showcaseMapping } = require('./showcase-manifest');
const { generate: generateRSS } = require('./lib/rss');
const webpack = require('webpack');

var config = {
  pageExtensions: ['jsx', 'js', 'mdx'],
  webpack: config => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /highlight\.js[\/\\]lib[\/\\]languages$/,
        new RegExp(`^./(${['javascript', 'json', 'xml'].join('|')})$`)
      )
    );
    return config;
  },
  exportPathMap(defaultPathMap, { dev, outDir }) {
    for (const route of Object.keys(showcaseMapping)) {
      defaultPathMap[`/showcase/${route}`] = {
        page: '/showcase',
        query: { item: route, from: 'url' }
      };
    }

    if (!dev) {
      fs.writeFileSync(path.join(outDir, 'feed.xml'), generateRSS());
      console.log(`\nRSS feed auto generated at ${outDir}/feed.xml\n`);
    }

    return defaultPathMap;
  }
};

if (process.env.BUNDLE_ANALYZE) {
  const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
  config = withBundleAnalyzer({
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
    },
    ...config
  });
}

module.exports = withMDX(config);
