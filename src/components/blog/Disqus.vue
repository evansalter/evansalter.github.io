<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  name: 'disqus',
  mounted: function () {
    var d = document
    var s = d.createElement('script')
    s.src = 'https://evansalter.disqus.com/embed.js'
    s.setAttribute('data-timestamp', +new Date())
    var el = d.head || d.body
    el.appendChild(s)
  }
}
</script>
