<template>
  <div class="desktop-page post-page">
    <app-window :title="post.title" icon="document" heading="h1" close-to="/blog">
      <div class="post-meta">
        <span>{{ post.date }}</span>
        <tag-list :tags="post.tags"></tag-list>
        <span><icon name="comments-o"></icon> <a class="comment-link" href="#disqus_thread"></a></span>
        <span class="sharing">Share: <sharing :url="postUrl" :title="post.title"></sharing></span>
      </div>
      <div class="sunken post-document">
        <article class="post-content" v-html="postContent"></article>
        <post-footer :url="postUrl" :title="post.title"></post-footer>
      </div>
    </app-window>
    <app-window title="Comments" icon="comments">
      <div class="sunken">
        <disqus></disqus>
      </div>
    </app-window>
  </div>
</template>

<script>
import 'highlight.js/styles/github.css'
import { PostObject } from './posts/index.js'
import { Constants } from '@/constants'
import AppWindow from '@/components/desktop/AppWindow'
import Disqus from './Disqus'
import PostFooter from './PostFooter'
import Sharing from '@/components/common/Sharing'
import TagList from '@/components/common/TagList'

const postFiles = import.meta.glob('./posts/**/*.md', { eager: true, import: 'default' })

export default {
  props: ['slug'],
  components: { AppWindow, Disqus, PostFooter, Sharing, TagList },
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
      return postFiles['./posts/' + this.post.filename]
    },
    postUrl: function () {
      return Constants.BASE_URL + window.location.pathname
    },
    postContentSnippet: function () {
      return document.getElementsByClassName('post-content')[0].innerText.slice(0, 50) + '...'
    }
  },
  head: {
    meta: function () {
      var metaTags = [
        { p: 'og:title', c: this.post.title },
        { p: 'og:description', c: this.postContentSnippet },
        { p: 'og:url', c: this.postUrl },
        { p: 'og:type', c: 'article' },
        { p: 'article:published_time', c: this.post.date },
        { p: 'article:author:first_name', c: 'Evan' },
        { p: 'article:author:last_name', c: 'Salter' },
        { p: 'article:author', c: 'https://twitter.com/_evansalter' },
        { p: 'twitter:site', c: '@_evansalter' }
      ]
      for (let tag of this.post.tags) {
        metaTags.push(
          { p: 'article:tag', c: tag }
        )
      }
      return metaTags
    }
  }
}
</script>

<style lang="scss">
.post-page {
  max-width: 820px;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-3) var(--spacing-5);
  padding-bottom: calc(var(--px) * 6);
}

.sharing {
  margin-left: auto;

  div {
    display: inline-block;
  }
}

.post-document {
  padding: var(--spacing-6);

  @media (max-width: 575px) {
    padding: var(--spacing-5);
  }
}

// Documents use a period serif rather than the pixel UI font, for readability
.post-content {
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  line-height: 1.5;

  h1, h2, h3, h4, h5, h6 {
    margin: 30px 0 15px;
    line-height: 1.2;
  }

  > :first-child {
    margin-top: 0;
  }

  p, table {
    margin-bottom: 1rem;
  }

  ol, ul {
    margin: 0 0 1rem 40px;
    padding: 0;
  }

  a > code {
    border: 1px solid var(--color-blue);
  }

  code, pre {
    font-family: "Courier New", Courier, monospace;
    font-size: 16px;
  }

  code {
    padding: 0 3px;
    background: var(--color-gray-100);
    overflow-wrap: anywhere;
  }

  pre {
    margin: 10px 0 1rem;
  }

  pre.hljs {
    padding: var(--spacing-4);
    overflow-x: auto;
    background: var(--color-white);
    box-shadow: var(--shadow-inner-1);

    code {
      padding: 0;
      background: none;
    }
  }

  // The markdown renderer nests its own <pre> inside another one
  pre pre.hljs {
    margin: 0;
  }

  img {
    height: auto;
  }

  hr {
    margin: 20px 0;
  }

  table {
    display: block;
    overflow-x: auto;
  }

  blockquote {
    margin: 0 0 1rem;
    padding-left: var(--spacing-5);
    border-left: 4px solid var(--color-gray-200);
  }
}
</style>
