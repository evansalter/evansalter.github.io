<template>
  <v-container>
    <div>
      <h3>Thoughts</h3>
    </div>
    <tag-selector :tags="allTags" v-model="selectedTags"></tag-selector>
    <div v-if="posts.length === 0" class="no-posts">
      <h4>Nothing here yet!</h4>
      <h5>Please check back later, or follow me on Twitter for updates</h5>
      <a href="https://twitter.com/_evansalter" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @_evansalter</a>
    </div>
    <v-list three-line subheader>
      <v-list-item v-for="post in posts" :key="post.filename" v-if="shouldShowPost(post.tags)" class="slide-and-fade-in">
        <v-list-tile :to="getPath(post.title)" :router="true">
          <v-list-tile-content>
            <v-list-tile-title>{{ post.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ post.date }}</v-list-tile-sub-title>
            <tag-list :tags="post.tags"></tag-list>
          </v-list-tile-content>
          <v-list-tile-action>
            <div>
              <icon name="comments-o"></icon>
              <span class="disqus-comment-count" :data-disqus-url="hostname + getPath(post.title)"></span>
            </div>
          </v-list-tile-action>
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
import '@/components/common/twitter.js'

export default {
  components: { TagList, TagSelector },
  data: function () {
    return {
      posts: PostList,
      selectedTags: []
    }
  },
  mounted: function () {
    if (window.DISQUSWIDGETS) {
      window.DISQUSWIDGETS.getCount({reset: true})
    }
  },
  watch: {
    selectedTags: function () {
      setTimeout(function () {
        window.DISQUSWIDGETS.getCount({reset: true})
      }, 1)
    }
  },
  methods: {
    slugify: Slugify,
    shouldShowPost: function (tags) {
      return this.selectedTags.filter(function (tag) {
        return tags.indexOf(tag) > -1
      }).length > 0 || this.selectedTags.length === 0
    },
    getPath: function (title) {
      return '/blog/' + this.slugify(title)
    }
  },
  computed: {
    hostname: function () {
      return window.location.href.split(window.location.pathname)[0]
    },
    allTags: function () {
      var tags = {}
      for (var post of this.posts) {
        if (post.tags) {
          for (var tag of post.tags) {
            tags[tag] = tags[tags] + 1 || 1
          }
        }
      }
      return tags
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/animation.scss";

h3 {
  margin-top: 15px;
}
.list {
  overflow: initial;
}
.list > li.list__item > a{
  height: 110px;
}
.no-posts {
  text-align: center;
}
</style>
