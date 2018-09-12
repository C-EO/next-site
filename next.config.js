const withMDX = require('@zeit/next-mdx')()
const { mapping: showcaseMapping } = require('./showcase-manifest')
const { mapping: blogMapping } = require('./blog-manifest')

module.exports = withMDX({
  exportPathMap(defaultPathMap) {
    for(const route of Object.keys(showcaseMapping)) {
      defaultPathMap[`/showcase/${route}`] = {page: '/showcase', query: {item: route, from: 'url'}}
    }
    for(const route of Object.keys(blogMapping)) {
      defaultPathMap[`/blog/${route}`] = {page: '/blog/posts', query: {post: route}}
    }
    return defaultPathMap
  }
})
