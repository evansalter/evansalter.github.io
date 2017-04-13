<template>
  <v-container class="post-container">
    <h3>{{ post.title }}</h3>
    <h6>{{ post.date }}</h6>
    <v-divider/>
    <div v-html="postContent"></div>
  </v-container>
</template>

<script>
import { PostObject } from './posts/index.js'

export default {
  props: ['slug'],
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

<style lang="scss" scoped>
.post-container {
  padding-top: 15px;
}
</style>
