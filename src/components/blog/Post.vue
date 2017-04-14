<template>
  <div class="post-container">
    <h3>{{ post.title }}</h3>
    <h6>{{ post.date }}</h6>
    <v-divider/>
    <div class="post-content" v-html="postContent"></div>
    <v-divider/>
    <disqus></disqus>
  </div>
</template>

<script>
import { PostObject } from './posts/index.js'
import Disqus from './Disqus'

export default {
  props: ['slug'],
  components: { Disqus },
  data: function () {
    return {
      posts: PostObject
    }
  },
  computed: {
    post: function () {
      var post = this.posts[this.slug]
      if (post === undefined) {
        this.$router.replace('/blog')
      }
      return post
    },
    postContent: function () {
      return require('./posts/' + this.post.filename)
    }
  }
}
</script>

<style lang="scss">
.post-container {
  max-width: 740px;
  margin: 0 auto;
  padding: 25px;

  .post-content {
    margin-top: 15px;
    font-family: Georgia,Cambria,"Times New Roman",Times,serif;
    font-size: 21px;

    @for $i from 1 through 6 {
      h#{$i} {
        margin: 30px 0 15px 0;
      }
    }

    ol {
      margin-left: 20px;
    }

    pre > code {
      width: 100%;
      padding: 10px;
      margin: 10px 0;

      &:before, &:after {
        content: '';
      }
    }
  }
}
</style>
