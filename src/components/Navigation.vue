<template>
  <v-nav nav-class="white">
    <router-link to="/" class="brand-logo" slot="logo" active-class="">Evan Salter</router-link>
    <ul class="right">
      <li v-for="page in pages">
        <router-link :to="page.path" :exact="page.exact">{{ page.name }}</router-link>
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
        { path: '/', name: 'Home', exact: true },
        { path: '/projects', name: 'Projects', exact: false },
        { path: '/blog', name: 'Blog', exact: false }
      ]
    }
  }
}
</script>

<style scoped>
a {
  color: black;
}

.router-link-active {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
