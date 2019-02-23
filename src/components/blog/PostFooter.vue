<template>
  <div class="footer-container">
    <div class="fin">
      <hr class="divider"/>
    </div>
    <div>
      <h3>What's next?</h3>
      <ol>
        <li>
          <a href="https://twitter.com/_evansalter" class="twitter-follow-button" data-show-count="false">Follow @_evansalter</a>
          for updates on new posts
        </li>
        <li>
          Share this post on social media:
          <sharing class="sharing-links" :url="url" :title="title"></sharing>
        </li>
        <li>Leave a comment below!</li>
      </ol>
    </div>
  </div>
</template>

<script>
import Sharing from '@/components/common/Sharing'

export default {
  name: 'post-footer',
  props: ['url', 'title'],
  components: { Sharing },
  mounted: function () {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-container {
  margin-bottom: 50px;
}
.fin {
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-family: serif;
  font-style: oblique;
  &:after {
    content: '~ fin ~';
    display: inline-block;
    position: relative;
    top: -34px;
    background: white;
    padding: 0 10px;
  }
  hr {
    margin-top: 40px;
  }
}
ol {
  list-style-position: hanging;
  margin-left: 25px;
  li {
    font-size: 20px;
    iframe {
      vertical-align: text-bottom;
    }
  }
}
.sharing-links {
  display: inline-block;
}
</style>
