<template>
  <div class="welcome">
    <div class="welcome-main">
      <h1>Welcome to Evan's Website</h1>
      <div class="sunken tip">
        <desktop-icon name="tip" :size="32"></desktop-icon>
        <div>
          <p><strong>Did you know...</strong></p>
          <p>
            I'm a full-stack developer based in Saskatoon, Saskatchewan,
            working remotely at <a href="https://rewind.com" target="_blank" rel="noopener">Rewind</a>, where I build
            backups for the world's most popular SaaS apps.
          </p>
          <p>To look around, just click the Start button.</p>
        </div>
      </div>
    </div>
    <div class="welcome-actions">
      <router-link class="btn" to="/projects">Projects</router-link>
      <router-link class="btn" to="/blog">Blog</router-link>
      <a class="btn" href="#contact-me">Contact</a>
    </div>
  </div>
</template>

<script>
import DesktopIcon from '@/components/desktop/DesktopIcon'

export default {
  name: 'welcome',
  components: { DesktopIcon }
}
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  gap: calc(var(--px) * 12);
}

.welcome-main {
  flex: 1;
  min-width: 0;
}

// The Windows 95 welcome screen sets its heading in a bold serif
h1 {
  margin-bottom: calc(var(--px) * 8);
  font-family: "Times New Roman", Times, serif;
  font-size: calc(var(--px) * 30);
  line-height: 1.1;
  font-weight: bold;
}

.tip {
  display: flex;
  align-items: flex-start;
  gap: calc(var(--px) * 12);
  padding: calc(var(--px) * 12);
  background-color: #ffffe1;
}

.welcome-actions {
  display: flex;
  flex-direction: column;
  gap: calc(var(--px) * 4);
  min-width: calc(var(--px) * 75);
}

@media (max-width: 575px) {
  .welcome {
    flex-direction: column;
  }
  .tip {
    padding: calc(var(--px) * 8);
    gap: calc(var(--px) * 8);
  }
}
</style>
