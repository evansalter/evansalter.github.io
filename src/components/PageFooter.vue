<template>
  <v-footer id="page-footer" class="blue-grey lighten-5">
    <div class="text-xs">
        &copy; 2017 <span class="hidden-sm-and-down">Evan Salter </span>/ Made with
        <span v-tooltip:top="{ html: 'Coffee, duh.' }">
          <icon name="coffee" scale="1"></icon>
        </span>
        <a v-tooltip:top="{ html: 'Vue.js' }" href="https://vuejs.org/" target="_blank">
          <img :src="icons.vuejs" height="14"/>
        </a>
        <a v-tooltip:top="{ html: 'Click to view source on GitHub' }" href="https://github.com/esalter-va/esalter-va.github.io/" target="_blank">
          <icon name="github" scale="1"></icon>
        </a>
        <a v-tooltip:top="{ html: 'Webpack' }" href="https://webpack.github.io/" target="_blank">
          <img :src="icons.webpack" height="15"/>
        </a>
        <a v-tooltip:top="{ html: 'Font Awesome' }" href="http://fontawesome.io/" target="_blank">
          <icon name="font-awesome" scale="1"></icon>
        </a>
        <a v-tooltip:top="{ html: 'Vuetify.js' }" href="https://vuetifyjs.com/" target="_blank">
          <img :src="icons.vuetify" height="15"/>
        </a>
        <a v-tooltip:top="{ html: 'NPM' }" href="https://www.npmjs.com/" target="_blank">
          <img :src="icons.npm" height="17"/>
        </a>
         / <span class="hidden-sm-and-down">Hosted on </span><a href="https://github.io" target="_blank">github.io</a>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'page-footer',
  data: () => {
    return {
      icons: {
        npm: require('../assets/icons/npm.svg'),
        vuejs: require('../assets/icons/vuejs.svg'),
        vuetify: require('../assets/icons/vuetify.png'),
        webpack: require('../assets/icons/webpack.svg')
      }
    }
  }
}
</script>

<style lang="scss">
#page-footer {
  z-index: 98;
  margin: 0;
  div {
    color: #2B3940;
  }
  svg {
    color: black;
  }
}
</style>
