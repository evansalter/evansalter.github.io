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
          category: 'Google Cloud Platform',
          values: ['AppEngine', 'Compute Engine']
        },
        {
          category: 'Backend',
          values: ['Python', 'Go']
        },
        {
          category: 'Systems',
          values: ['C/C++', 'Java']
        },
        {
          category: 'Data',
          values: ['Cloud Datastore', 'SQL', 'BiqQuery', 'Elasticsearch']
        },
        {
          category: 'Mobile',
          values: ['iOS', 'Swift', 'Objective-C']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1, h3 {
  color: white;
}

.language-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  ul {
    padding: 15px;
    list-style: none;

    li {
      font-size: 25px;
    }
  }
}
</style>
