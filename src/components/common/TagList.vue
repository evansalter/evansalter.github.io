<template>
  <div v-if="tags && tags.length > 0" class="tags">
    <v-chip label v-for="tag in tags" :key="tag">
      {{ tag }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'tag-list',
  props: ['tags']
}
</script>

<style lang="scss" scoped>
.technologies {
  display: inline-block;
}
</style>
