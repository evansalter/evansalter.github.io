<template>
  <div class="post-container">
    <h3>{{ post.title }}</h3>
    <h6>{{ post.date }}</h6>
    <icon name="comments-o"></icon> <a class="comment-link" href="#disqus_thread"></a>
    <span class="sharing">Share: <sharing :url="postUrl" :title="post.title"></sharing></span>
    <tag-list :tags="post.tags"></tag-list>
    <v-divider/>
    <div class="post-content" v-html="postContent"></div>
    <v-divider/>
    <disqus></disqus>
  </div>
</template>

<script>
import { PostObject } from './posts/index.js'
import Disqus from './Disqus'
import Sharing from '@/components/common/Sharing'
import TagList from '@/components/common/TagList'

export default {
  props: ['slug'],
  components: { Disqus, Sharing, TagList },
  data: function () {
    return {
      posts: PostObject
    }
  },
  mounted: function () {
    if (window.DISQUSWIDGETS) {
      window.DISQUSWIDGETS.getCount({reset: true})
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
    },
    postUrl: function () {
      return window.location.origin + window.location.pathname
    }
  }
}
</script>

<style lang="scss">
.post-container {
  max-width: 740px;
  margin: 0 auto;
  padding: 25px;

  .comment-link {
    text-decoration: none;
    font-size: 15px;
  }

  .post-content {
    margin-top: 15px;
    font-family: Georgia,Cambria,"Times New Roman",Times,serif;
    font-size: 21px;

    @for $i from 1 through 6 {
      h#{$i} {
        margin: 30px 0 15px 0;
      }
    }

    ol, ul {
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
.sharing {
  display: inline-block;
  float: right;
  div {
    vertical-align: text-top;
    display: inline-block;
  }
}
</style>
