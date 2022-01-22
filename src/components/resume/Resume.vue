<template>
  <div class="resume-container">
    <resume-intro></resume-intro>
    <h2>Work Experience</h2>
    <work-experience></work-experience>
  </div>
</template>

<script>
import Intro from './Intro.vue'
import WorkExperience from './WorkExperience.vue'

export default {
  components: {
    'resume-intro': Intro,
    WorkExperience
  }
}
</script>

<style lang="scss" scoped>
.resume-container {
  display: flex;
  flex-direction: column;
}
</style>
