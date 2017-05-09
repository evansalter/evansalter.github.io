<template>
  <v-container>
    <div>
      <h3>Projects.</h3>
      <h5>What I've been keeping myself busy with.</h5>
    </div>
    <tag-selector :tags="allTags" v-model="selectedTags"></tag-selector>
    <project-card v-for="(project, index) in projects"
                  :key="project.name"
                  :index="index"
                  :project="project"
                  class="slide-and-fade-in"
                  v-if="shouldShowProject(project.technologies)">
    </project-card>
  </v-container>
</template>

<script>
import ProjectCard from './ProjectCard'
import TagSelector from '@/components/common/TagSelector'
import { Constants } from '@/constants'

export default {
  components: {
    ProjectCard,
    TagSelector
  },
  meta: function () {
    var description = 'A quick look at some of my projects.'
    return [
      { p: 'description', c: description },
      { p: 'og:site_name', c: 'Evan Salter' },
      { p: 'og:title', c: 'Projects | Evan Salter' },
      { p: 'og:description', c: description },
      { p: 'og:url', c: Constants.BASE_URL + '/projects' },
      { p: 'og:type', c: 'website' },
      { p: 'twitter:site', c: '@_evansalter' }
    ]
  },
  data: () => {
    return {
      selectedTags: [],
      projects: [
        {
          name: 'webpack-static-site-generator ',
          description: 'A Webpack plugin to generate a static site from your single-page app.',
          technologies: ['Javascript', 'Webpack', 'Web'],
          links: [
            { name: 'Github', url: 'https://github.com/esalter-va/webpack-static-site-generator', icon: 'github' },
            { name: 'npm', url: 'https://www.npmjs.com/package/webpack-static-site-generator' }
          ]
        },
        {
          name: 'Roll Up Tracker',
          image: require('../../assets/projects/roll-up-tracker.jpg'),
          description: 'A web and iOS app to track your Roll Up The Rim To Win progress.',
          technologies: ['Angular2', 'Typescript', 'Python', 'iOS', 'Swift', 'Web'],
          links: [
            { name: 'Website', url: 'https://www.rolluptracker.com', icon: 'globe' },
            { name: 'App Store', url: 'http://appstore.com/rolluptracker', icon: 'mobile' }
          ]
        },
        {
          name: 'Scrobblin\' With Friends',
          image: require('../../assets/projects/scrobblin-with-friends.png'),
          description: 'A simple Vue.js web app to see what your friends are listening to.',
          technologies: ['Vue.js', 'Web'],
          links: [
            { name: 'GitHub', url: 'https://github.com/esalter-va/scrobblin-friends', icon: 'github' },
            { name: 'Website', url: 'https://www.scrobblin-friends.appspot.com', icon: 'globe' }
          ]
        },
        {
          name: 'vim-checklist',
          image: require('../../assets/projects/vim-checklist.gif'),
          description: 'A Vim plugin to simplify creating and using Markdown checklists.',
          technologies: ['Vim'],
          links: [
            { name: 'GitHub', url: 'https://github.com/esalter-va/vim-checklist', icon: 'github' },
            { name: 'Vim Awesome', url: 'http://vimawesome.com/plugin/vim-checklist' }
          ]
        },
        {
          name: 'Chromescape Navigator',
          description: 'A silly Chrome Extension that displays the Netscape Navigator or IE throbber when loading pages, for nostalgia purposes.',
          technologies: ['Javascript', 'Chrome Extension', 'Web'],
          links: [
            { name: 'GitHub', url: 'https://github.com/esalter-va/chromescape-navigator', icon: 'github' },
            { name: 'Chrome Web Store', url: 'https://chrome.google.com/webstore/detail/chromescape-navigator/ocjjknbofcggmblgmlpfpmhccojaecnp', icon: 'chrome' }
          ]
        }
      ]
    }
  },
  computed: {
    allTags: function () {
      var tags = {}
      for (var project of this.projects) {
        for (var technology of project.technologies) {
          tags[technology] = tags[technology] + 1 || 1
        }
      }
      return tags
    }
  },
  methods: {
    shouldShowProject: function (tags) {
      return this.selectedTags.filter(function (tag) {
        return tags.indexOf(tag) > -1
      }).length > 0 || this.selectedTags.length === 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/animation.scss";

.card {
  margin-bottom: 25px;
  &:nth-child(2) {
    margin-top: 25px;
  }
}

h3 {
  margin-top: 15px;
}
</style>
