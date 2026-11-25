<template>
  <div v-if="tags && tags.length > 0" class="tags">
    <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
  </div>
</template>

<script>
export default {
  name: 'tag-list',
  props: ['tags']
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
}
.tag {
  padding: 0 calc(var(--px) * 4);
  background-color: var(--color-gray-200);
  border: var(--line) solid var(--color-gray-300);
  color: var(--color-black);
}
</style>
