<template>
  <div>
    <h2>Languages and frameworks.</h2>
    <div class="language-container">
      <div v-for="language in languages">
        <div><h4>{{ language.category }}</h4></div>
        <span v-for="value in language.values">
          {{ value }}
        </span>
      </div>
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
          values: ['Angular', 'Vue.js', 'Typescript', 'SCSS', 'Webpack']
        },
        {
          category: 'Google Cloud Platform',
          values: ['Kubernetes Engine', 'App Engine', 'Compute Engine', 'Cloud SQL']
        },
        {
          category: 'Backend',
          values: ['Go', 'Python']
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

  flex-direction: column;

  div {

    padding-top: 10px;

    span {
      font-size: 25px;
      padding-right: 20px;
    }
  }
}
</style>
