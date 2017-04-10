<template>
  <div>
    <h1>Languages and Frameworks</h1>
    <div class="language-container">
      <ul v-for="language in languages">
        <h3>{{ language.category }}</h3>
        <li v-for="value in language.values">
          {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'languages',
  data: () => {
    return {
      languages: [
        {
          category: 'Web Frontend',
          values: ['Javascript', 'Typescript', 'HTML', 'CSS', 'Angular2', 'Vue.js', 'KnockoutJS']
        },
        {
          category: 'Backend',
          values: ['Python', 'Go']
        },
        {
          category: 'Data',
          values: ['Cloud Datastore', 'SQL', 'BiqQuery', 'Elasticsearch']
        },
        {
          category: 'Google Cloud Platform',
          values: ['AppEngine', 'Compute Engine']
        }

      ]
    }
  }
}
</script>

<style scoped>
.language-container {
  display: flex;
  flex-flow: row wrap;
}
</style>
