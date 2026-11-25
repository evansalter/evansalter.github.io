<template>
  <div id="app">
    <main class="main-container">
      <router-view></router-view>
    </main>
    <page-footer></page-footer>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import PageFooter from '@/components/PageFooter'

import 'highlight.js/styles/default.css'

export default {
  name: 'app',
  components: {
    Navigation,
    PageFooter
  }
}
</script>

<style>
#app {
  padding-bottom: var(--taskbar-height);
}
</style>
