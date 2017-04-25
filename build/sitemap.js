var posts = require('../src/components/blog/posts/posts.js')
var postObject = posts.postObject

const BASE_PATH = '/blog/'
var paths = new Set([
  '/',
  '/projects',
  '/blog'
])

module.exports = function () {
  for (var key in postObject) {
    var path = BASE_PATH + key
    paths.add(path)
  }
  return Array.from(paths);
}
