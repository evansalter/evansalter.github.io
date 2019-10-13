var postList = [
  {
    title: 'Processing 232 Photo Booth Photos',
    filename: 'photobooth-processing/photobooth-processing.md',
    tags: ['Programming', 'Photography'],
    date: '2019-10-13'
  },
  {
    title: 'My $0 Photo Booth Setup',
    filename: 'photobooth/photobooth.md',
    tags: ['Web', 'Programming', 'Photography'],
    date: '2019-10-13'
  },
  {
    title: 'Amazon Echo Dot Stereo Integration',
    filename: 'alexa-stereo/alexa-stereo.md',
    tags: ['Home Automation'],
    date: '2019-02-23'
  },
  {
    title: 'GitHub Pages and Single-Page Apps',
    filename: 'ghpages-spa.md',
    tags: ['Hosting', 'Web'],
    date: '2017-05-06'
  }
]

// ----------------------

function slugify (title) {
  return title
    .replace(/[^a-z0-9]/gi, '-')
    .replace(/-+/g, '-')
    .toLowerCase()
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
