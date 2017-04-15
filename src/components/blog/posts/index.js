const PostList = [
  {
    title: 'GitHub Pages and Single-Page Apps',
    filename: 'ghpages-spa.md',
    tags: ['Hosting', 'Web'],
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
