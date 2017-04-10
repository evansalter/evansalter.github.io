<template>
  <v-nav nav-class="white">
    <router-link to="/" class="brand-logo" slot="logo">Evan Salter</router-link>
    <ul class="right">
      <li v-for="page in pages">
        <router-link :to="page.path">{{ page.name }}</router-link>
      </li>
    </ul>
    <v-side-nav id="side" slot="side-nav"></v-side-nav>
  </v-nav>
</template>

<script>
export default {
  name: 'navigation',
  data: () => {
    return {
      pages: [
        { path: '/', name: 'Home' },
        { path: '/projects', name: 'Projects' },
        { path: '/blog', name: 'Blog' }
      ]
    }
  }
}
</script>

<style scoped>
a {
  color: black;
}
</style>
