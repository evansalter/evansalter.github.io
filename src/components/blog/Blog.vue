<template>
  <div class="desktop-page">
    <app-window title="Thoughts." icon="blog" heading="h1" close-to="/">
      <tag-selector :tags="allTags" v-model="selectedTags"></tag-selector>
      <div v-if="posts.length === 0" class="no-posts">
        <h2>Nothing here yet!</h2>
        <p>Please check back later, or follow me on Twitter for updates</p>
        <a href="https://twitter.com/_evansalter" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @_evansalter</a>
      </div>
      <ul v-else class="sunken post-list">
        <li v-for="post in visiblePosts" :key="post.filename">
          <router-link :to="getPath(post.title)">
            <desktop-icon name="document" :size="32"></desktop-icon>
            <div class="post-summary">
              <div class="post-title">{{ post.title }}</div>
              <div>{{ post.date }}</div>
              <tag-list :tags="post.tags"></tag-list>
            </div>
            <div class="post-comments">
              <icon name="comments-o"></icon>
              <span class="disqus-comment-count" :data-disqus-url="hostname + getPath(post.title)"></span>
            </div>
          </router-link>
        </li>
      </ul>
    </app-window>
  </div>
</template>

<script>
import { PostList, Slugify } from './posts/index.js'
import { Constants } from '@/constants'
import AppWindow from '@/components/desktop/AppWindow'
import DesktopIcon from '@/components/desktop/DesktopIcon'
import TagList from '@/components/common/TagList'
import TagSelector from '@/components/common/TagSelector'
import '@/components/common/twitter.js'

export default {
  components: { AppWindow, DesktopIcon, TagList, TagSelector },
  meta: function () {
    var description = 'A place to read about, and discuss, a wide variety of topics related to technology and software development.'
    return [
      { p: 'description', c: description },
      { p: 'og:site_name', c: 'Evan Salter' },
      { p: 'og:title', c: 'Blog | Evan Salter' },
      { p: 'og:description', c: description },
      { p: 'og:url', c: Constants.BASE_URL + '/blog' },
      { p: 'og:type', c: 'website' },
      { p: 'twitter:site', c: '@_evansalter' }
    ]
  },
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
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load()
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
    visiblePosts: function () {
      return this.posts.filter(post => this.shouldShowPost(post.tags))
    },
    hostname: function () {
      return window.location.href.split(window.location.pathname)[0]
    },
    allTags: function () {
      var tags = {}
      for (var post of this.posts) {
        if (post.tags) {
          for (var tag of post.tags) {
            tags[tag] = tags[tag] + 1 || 1
          }
        }
      }
      return tags
    }
  }
}
</script>

<style lang="scss" scoped>
.post-list {
  margin-top: calc(var(--px) * 8);
  padding: calc(var(--px) * 2);
  list-style: none;

  a {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-4);
    padding: var(--spacing-4);
    color: var(--color-black);
    text-decoration: none;

    &:hover, &:focus {
      background-color: var(--color-blue);
      color: var(--color-white);
      outline: var(--line) dotted var(--color-yellow);
      outline-offset: -2px;
    }
  }
}
.post-summary {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}
.post-title {
  font-weight: bold;
}
.no-posts {
  text-align: center;
  padding: var(--spacing-6);
}
</style>
