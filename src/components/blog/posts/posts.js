var postList = [
  {
    title: 'My First Blog Post',
    filename: 'post1.md',
    date: '2017-04-12'
  }
]

function slugify (title) {
  return title.replace(/[^a-z0-9]/gi, '-').toLowerCase()
}

function generatePostObject () {
  var obj = {}
  for (var post of postList) {
    var slug = slugify(post.title)
    obj[slug] = post
  }
  return obj
}

module.exports.postList = postList
module.exports.postObject = generatePostObject()
module.exports.slugify = slugify
