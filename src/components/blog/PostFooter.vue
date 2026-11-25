<template>
  <div class="footer-container">
    <div class="fin">
      <hr/>
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
  margin-top: 40px;
}
.fin {
  width: 100%;
  text-align: center;
  font-size: 40px;
  line-height: 60px;
  font-family: "Times New Roman", Times, serif;
  font-style: oblique;
  &:after {
    content: '~ fin ~';
    display: inline-block;
    position: relative;
    top: -30px;
    background: white;
    padding: 0 10px;
  }
  hr {
    margin-top: 40px;
  }
}
ol {
  margin: 10px 0 0 25px;
  padding: 0;
  li {
    margin-bottom: 8px;
    iframe {
      vertical-align: text-bottom;
    }
  }
}
.sharing-links {
  display: inline-block;
}
</style>
