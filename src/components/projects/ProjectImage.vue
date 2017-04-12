<template>
  <v-card-row v-if="img" :img="img" height="100%"></v-card-row>
</template>

<script>
export default {
  name: 'project-image',
  props: ['img']
}
</script>
