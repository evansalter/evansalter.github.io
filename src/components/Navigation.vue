<template>
  <v-nav nav-class="white" fixed>
    <router-link to="/" class="brand-logo" slot="logo" active-class="">Evan Salter</router-link>
    <ul class="right hide-on-small-and-down">
      <li v-for="page in pages">
        <router-link :to="page.path" :exact="page.exact">{{ page.name }}</router-link>
      </li>
    </ul>
    <ul class="right hide-on-med-and-up">
      <li>
        <a href="#" v-side-nav:side="nav" class="button-collapse"><v-icon>menu</v-icon></a>
      </li>
    </ul>
    <v-side-nav id="side" slot="side-nav">
      <ul>
        <li v-for="page in pages">
          <router-link :to="page.path" :exact="page.exact" v-on:click.native="closeSidenav">{{ page.name }}</router-link>
        </li>
      </ul>
    </v-side-nav>
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
      ],
      nav: {
        edge: 'right'
      }
    }
  },
  methods: {
    closeSidenav: () => {
      $('.button-collapse').sideNav('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: black;
}

.router-link-active {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
