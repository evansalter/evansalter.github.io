<template>
  <v-container>
    <div>
      <h3>Projects</h3>
      <h5>Here's what I've been keeping myself busy with</h5>
    </div>
    <tag-selector :tags="allTags" v-model="selectedTags"></tag-selector>
    <project-card v-for="(project, index) in projects"
                  :key="project.name"
                  :index="index"
                  :project="project"
                  v-if="shouldShowProject(project.technologies)">
    </project-card>
  </v-container>
</template>

<script>
import ProjectCard from './ProjectCard'
import TagSelector from '@/components/common/TagSelector'

export default {
  components: {
    ProjectCard,
    TagSelector
  },
  data: () => {
    return {
      selectedTags: [],
      projects: [
        {
          name: 'Roll Up Tracker',
          image: require('../../assets/projects/roll-up-tracker.jpg'),
          description: 'A web and iOS app to track your Roll Up The Rim To Win progress.',
          technologies: ['Angular2', 'Typescript', 'Python', 'iOS', 'Swift'],
          links: [
            { name: 'Website', url: 'https://www.rolluptracker.com' },
            { name: 'App Store', url: 'http://appstore.com/rolluptracker' }
          ]
        },
        {
          name: 'Another project',
          description: '',
          technologies: ['Angular2', 'Python', 'iOS', 'Swift'],
          links: [
            { name: 'Website', url: 'https://www.rolluptracker.com' },
            { name: 'App Store', url: 'http://appstore.com/rolluptracker' }
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
