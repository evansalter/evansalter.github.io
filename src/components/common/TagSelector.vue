<template>
  <v-container class="tag-container">
      <v-chip label
              v-for="([tag, count]) in sortedTags"
              :key="tag"
              @click.native="toggleTagSelected(tag)"
              :class="{ selected: selectedTags.indexOf(tag) > -1 }">
        {{ tag }} ({{ count }})
      </v-chip>
  </v-container>
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
.tag-container {
  text-align: center;
  margin-bottom: 15px;
  .chip {
    opacity: 0.5;
    box-shadow: none;
    &.selected {
      opacity: 1;
      box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
      outline: none;
    }
  }
}
</style>
