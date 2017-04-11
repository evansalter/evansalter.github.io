<template>
  <v-footer id="page-footer" class="blue-grey lighten-5">
    <div class="text-xs">
        &copy; 2017 <span class="hidden-sm-and-down">Evan Salter </span>/ Made with
        <icon v-tooltip:top="'Coffee, duh.'" name="coffee" scale="1"></icon>
        <a href="https://vuejs.org/" target="_blank">
          <img v-tooltip:top="'Vue.js'" :src="icons.vuejs" height="14"/>
        </a>
        <a href="https://github.com/esalter-va/esalter-va.github.io/" target="_blank">
          <icon v-tooltip:top="'Click to view source on GitHub'" name="github" scale="1"></icon>
        </a>
        <a href="https://webpack.github.io/" target="_blank">
          <img v-tooltip:top="'Webpack'" :src="icons.webpack" height="15"/>
        </a>
        <a href="http://fontawesome.io/" target="_blank">
          <icon v-tooltip:top="'Font Awesome'" name="font-awesome" scale="1"></icon>
        </a>
        <a href="https://vuetifyjs.com/" target="_blank">
          <img v-tooltip:top="'Vuetify.js'" :src="icons.vuetify" height="15"/>
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
  margin: 0;
  div {
    color: #2B3940;
  }
  svg {
    color: black;
  }
}
</style>
