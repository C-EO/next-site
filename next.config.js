const withMDX = require('@zeit/next-mdx')({
  extension: /\.(md|mdx)?$/
})
const { mapping: showcaseMapping } = require('./showcase-manifest')

module.exports = withMDX({
  pageExtensions: ['jsx', 'js', 'mdx', 'md'],
  exportPathMap(defaultPathMap) {
    for(const route of Object.keys(showcaseMapping)) {
      defaultPathMap[`/showcase/${route}`] = {page: '/showcase', query: {item: route, from: 'url'}}
    }
    return defaultPathMap
  }
})
