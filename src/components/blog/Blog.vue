<template>
  <v-container>
    <div>
      <h3>Thoughts</h3>
    </div>
    <tag-selector :tags="allTags" v-model="selectedTags"></tag-selector>
    <v-list three-line subheader>
      <v-list-item v-for="post in posts" :key="post.filename" v-if="shouldShowPost(post.tags)">
        <v-list-tile :to="'/blog/' + slugify(post.title)" :router="true">
          <v-list-tile-content>
            <v-list-tile-title>{{ post.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ post.date }}</v-list-tile-sub-title>
            <tag-list :tags="post.tags"></tag-list>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider/>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { PostList, Slugify } from './posts/index.js'
import TagList from '@/components/common/TagList'
import TagSelector from '@/components/common/TagSelector'

export default {
  components: { TagList, TagSelector },
  data: function () {
    return {
      posts: PostList,
      selectedTags: []
    }
  },
  methods: {
    slugify: Slugify,
    shouldShowPost: function (tags) {
      return this.selectedTags.filter(function (tag) {
        return tags.indexOf(tag) > -1
      }).length > 0 || this.selectedTags.length === 0
    }
  },
  computed: {
    allTags: function () {
      var tags = {}
      for (var post of this.posts) {
        for (var tag of post.tags) {
          tags[tag] = tags[tags] + 1 || 1
        }
      }
      return tags
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 15px;
}
.list > li.list__item {
  margin-top: 16px;
}
</style>
