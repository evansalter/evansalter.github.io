<template>
  <div id="app">
    <div class="desktop">
      <desktop-icons></desktop-icons>
      <main class="main-container">
        <router-view></router-view>
      </main>
    </div>
    <page-footer></page-footer>
    <navigation @shut-down="isShutDown = true"></navigation>
    <shut-down-screen v-if="isShutDown" @restart="isShutDown = false"></shut-down-screen>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import PageFooter from '@/components/PageFooter'
import DesktopIcons from '@/components/desktop/DesktopIcons'
import ShutDownScreen from '@/components/desktop/ShutDownScreen'

import 'highlight.js/styles/default.css'

export default {
  name: 'app',
  components: {
    DesktopIcons,
    Navigation,
    PageFooter,
    ShutDownScreen
  },
  data: function () {
    return {
      isShutDown: false
    }
  }
}
</script>

<style>
#app {
  padding-bottom: var(--taskbar-height);
}

.desktop {
  display: flex;
  align-items: flex-start;
}

.main-container {
  flex: 1;
  min-width: 0;
}

@media (max-width: 767px) {
  .desktop {
    display: block;
  }
}
</style>
