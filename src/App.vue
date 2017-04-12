<template>
  <v-app id="app">
    <div class="spacer"></div>
    <navigation></navigation>
    <main class="main-container">
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
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
.spacer {
  height: 64px;
}
.main-container {
  min-height: calc(100vh - 109px);
  transform: translateZ(0);
}
</style>
