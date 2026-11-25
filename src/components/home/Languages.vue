<template>
  <div class="language-container">
    <fieldset v-for="language in languages" :key="language.category">
      <legend>{{ language.category }}</legend>
      <ul>
        <li v-for="value in language.values" :key="value">{{ value }}</li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'languages',
  data: () => {
    return {
      languages: [
        {
          category: 'Backend',
          values: ['Ruby', 'Go', 'Python']
        },
        {
          category: 'Web Frontend',
          values: ['React', 'Vue.js', 'Typescript', 'SCSS']
        },
        {
          category: 'AWS',
          values: ['ECS', 'Lambda', 'S3', 'CloudWatch', 'RDS', 'OpenSearch']
        },
        {
          category: 'Frameworks',
          values: ['Rails', 'Sidekiq']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.language-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: calc(var(--px) * 8);
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--px) * 4) calc(var(--px) * 16);
  padding: 0;
  list-style: none;
}
</style>
