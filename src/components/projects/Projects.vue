<template>
  <div class="desktop-page">
    <app-window title="Projects" icon="folder" heading="h1" close-to="/">
      <p>What I've been keeping myself busy with.</p>
      <tag-selector :tags="allTags" v-model="selectedTags"></tag-selector>
    </app-window>
    <project-card v-for="project in visibleProjects"
                  :key="project.name"
                  :project="project">
    </project-card>
  </div>
</template>

<script>
import AppWindow from '@/components/desktop/AppWindow'
import ProjectCard from './ProjectCard'
import TagSelector from '@/components/common/TagSelector'
import { Constants } from '@/constants'
import gataImage from '../../assets/projects/gata.png'
import rollUpTrackerImage from '../../assets/projects/roll-up-tracker.jpg'
import scrobblinImage from '../../assets/projects/scrobblin-with-friends.png'
import vimChecklistImage from '../../assets/projects/vim-checklist.gif'

export default {
  components: {
    AppWindow,
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
          name: 'gata | bookmarks made better',
          image: gataImage,
          description: 'A Chrome extension for creating dynamic web shortcuts',
          technologies: ['Javascript', 'Vue.js', 'Web', 'Chrome Extension'],
          links: [
            { name: 'Github', url: 'https://github.com/evansalter/gata', icon: 'github' },
            { name: 'Chrome Web Store', url: 'https://chrome.google.com/webstore/detail/gata/oidckhmhcapggoekanlbdgfckcjccphk', icon: 'chrome' },
            { name: 'Firefox Add-ons', url: 'https://addons.mozilla.org/en-CA/firefox/addon/gata/', icon: 'firefox' }
          ]
        },
        {
          name: 'webpack-static-site-generator',
          description: 'A Webpack plugin to generate a static site from your single-page app.',
          technologies: ['Javascript', 'Webpack', 'Web'],
          links: [
            { name: 'Github', url: 'https://github.com/evansalter/webpack-static-site-generator', icon: 'github' },
            { name: 'npm', url: 'https://www.npmjs.com/package/webpack-static-site-generator' }
          ]
        },
        {
          name: 'Roll Up Tracker',
          image: rollUpTrackerImage,
          description: 'A web and iOS app to track your Roll Up The Rim To Win progress.',
          technologies: ['Angular2', 'Typescript', 'Python', 'iOS', 'Swift', 'Web'],
          links: [
            { name: 'Website', url: 'https://www.rolluptracker.com', icon: 'globe' },
            { name: 'App Store', url: 'http://appstore.com/rolluptracker', icon: 'mobile' }
          ]
        },
        {
          name: 'Scrobblin\' With Friends',
          image: scrobblinImage,
          description: 'A simple Vue.js web app to see what your friends are listening to.',
          technologies: ['Vue.js', 'Web'],
          links: [
            { name: 'GitHub', url: 'https://github.com/evansalter/scrobblin-friends', icon: 'github' },
            { name: 'Website', url: 'https://www.scrobblin-friends.appspot.com', icon: 'globe' }
          ]
        },
        {
          name: 'vim-checklist',
          image: vimChecklistImage,
          description: 'A Vim plugin to simplify creating and using Markdown checklists.',
          technologies: ['Vim'],
          links: [
            { name: 'GitHub', url: 'https://github.com/evansalter/vim-checklist', icon: 'github' },
            { name: 'Vim Awesome', url: 'http://vimawesome.com/plugin/vim-checklist' }
          ]
        },
        {
          name: 'Chromescape Navigator',
          description: 'A silly Chrome Extension that displays the Netscape Navigator or IE throbber when loading pages, for nostalgia purposes.',
          technologies: ['Javascript', 'Chrome Extension', 'Web'],
          links: [
            { name: 'GitHub', url: 'https://github.com/evansalter/chromescape-navigator', icon: 'github' },
            { name: 'Chrome Web Store', url: 'https://chrome.google.com/webstore/detail/chromescape-navigator/ocjjknbofcggmblgmlpfpmhccojaecnp', icon: 'chrome' }
          ]
        }
      ]
    }
  },
  computed: {
    visibleProjects: function () {
      return this.projects.filter(project => this.shouldShowProject(project.technologies))
    },
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
