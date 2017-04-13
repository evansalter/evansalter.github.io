<template>
  <v-container>
    <div class="header">
      <h3>Thoughts</h3>
    </div>
    <v-list two-line subheader>
      <v-list-item v-for="post in posts" :key="post.filename">
        <v-list-tile :to="'/blog/' + slugify(post.title)" :router="true">
          <v-list-tile-content>
            <v-list-tile-title>{{ post.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ post.date }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { PostList, Slugify } from './posts/index.js'

export default {
  data: function () {
    return {
      posts: PostList
    }
  },
  methods: {
    slugify: Slugify
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin-top: 25px;
}
</style>
