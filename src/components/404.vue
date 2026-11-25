<template>
  <div class="desktop-page error-page">
    <app-window title="Uh Oh..." icon="warning" heading="h1" close-to="/">
      <div class="error-message">
        <desktop-icon name="warning" :size="32"></desktop-icon>
        <p>
          There doesn't seem to be anything here.  Would you like to start fresh?
        </p>
      </div>
      <div class="error-actions">
        <router-link class="btn is-highlighted" to="/">Start fresh</router-link>
      </div>
    </app-window>
  </div>
</template>

<script>
import AppWindow from '@/components/desktop/AppWindow'
import DesktopIcon from '@/components/desktop/DesktopIcon'

export default {
  components: { AppWindow, DesktopIcon }
}
</script>

<style lang="scss" scoped>
.error-page {
  max-width: 520px;
}
.error-message {
  display: flex;
  align-items: center;
  gap: calc(var(--px) * 10);
  padding: calc(var(--px) * 6);
}
.error-actions {
  text-align: center;
  padding: calc(var(--px) * 4) 0;
}
</style>
