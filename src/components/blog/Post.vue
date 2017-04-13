<template>
  <v-container v-html="post"></v-container>
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
      return require('./posts/' + this.posts[this.slug].filename)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
