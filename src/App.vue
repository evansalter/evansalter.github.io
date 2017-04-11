<template>
  <v-app id="app">
    <navigation></navigation>
    <div class="main-container">
      <router-view></router-view>
    </div>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
import PageFooter from '@/components/PageFooter'
import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  components: {
    PageFooter,
    Navigation
  }
}
</script>

<style>
html, body, #app{
  height: 100%;
}
.main-container {
  min-height: calc(100vh - 134px);
}
</style>
