var posts = require('../src/components/blog/posts/posts.js')
var postObject = posts.postObject

const BASE_PATH = '/blog/'
var paths = [
  '/',
  '/projects',
  '/blog'
]

module.exports = function () {
  for (var key in postObject) {
    var path = BASE_PATH + key
    paths.push(path)
  }
  return paths;
}
