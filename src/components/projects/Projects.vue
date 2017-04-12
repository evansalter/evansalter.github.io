<template>
  <v-container>
    <div>
      <h3>Projects</h3>
      <h5>Please take a second to explore some of the projects I have worked on.</h5>
    </div>
    <project-card v-for="(project, index) in projects" :key="project.name" :index="index" :project="project"></project-card>
  </v-container>
</template>

<script>
import ProjectCard from './ProjectCard'

export default {
  components: { ProjectCard },
  data: () => {
    return {
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
          // image: require('../../assets/projects/roll-up-tracker.png'),
          description: '',
          technologies: ['Angular2', 'Python', 'iOS', 'Swift'],
          links: [
            { name: 'Website', url: 'https://www.rolluptracker.com' },
            { name: 'App Store', url: 'http://appstore.com/rolluptracker' }
          ]
        }
      ]
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
