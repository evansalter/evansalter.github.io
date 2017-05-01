<template>
  <div>
    <h2>Languages and Frameworks</h2>
    <div class="language-container">
      <ul v-for="language in languages">
        <h4>{{ language.category }}</h4>
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
* {
  color: #2B3940;
}

h4 {
  font-weight: bold;
}

.language-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  @media(max-width: 575px) {
    & {
      flex-direction: column;
    }
  }

  ul {
    padding: 15px;
    list-style: none;

    li {
      font-size: 25px;
    }
  }
}
</style>
