<template>
  <fieldset class="tag-selector">
    <legend>Filter by tag</legend>
    <div class="tag-buttons">
      <button v-for="([tag, count]) in sortedTags"
              type="button"
              :key="tag"
              :class="{ 'is-active': isSelected(tag) }"
              :aria-pressed="String(isSelected(tag))"
              @click="toggleTagSelected(tag)">
        {{ tag }} ({{ count }})
      </button>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'tag-selector',
  props: ['tags'],
  data: function () {
    return {
      selectedTags: []
    }
  },
  computed: {
    sortedTags: function () {
      const tags = []
      for (const tag in this.tags) {
        tags.push([tag, this.tags[tag]])
      }
      return tags.sort((a, b) => b[1] - a[1])
    }
  },
  methods: {
    isSelected: function (tag) {
      return this.selectedTags.indexOf(tag) > -1
    },
    toggleTagSelected: function (tag) {
      var index = this.selectedTags.indexOf(tag)
      if (index < 0) {
        this.selectedTags.push(tag)
      } else {
        this.selectedTags.splice(index, 1)
      }
      this.$emit('input', this.selectedTags)
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--px) * 4);

  button:not(.tab) {
    // Keep a selected tag pressed in while it still has focus
    &.is-active:not(:active) {
      box-shadow: var(--shadow-default-button-active);
      background-color: var(--color-gray-100);
    }
  }
}
</style>
