const PostList = [
  {
    title: 'My First Blog Post',
    filename: 'post1.md',
    date: '2017-04-12'
  }
]

// ---------------------------

function Slugify (title) {
  return title.replace(/[^a-z0-9]/gi, '-').toLowerCase()
}

function generatePostObject () {
  var obj = {}
  for (var post of PostList) {
    var slug = Slugify(post.title)
    obj[slug] = post
  }
  return obj
}

var PostObject = generatePostObject()

export { PostList, PostObject, Slugify }
