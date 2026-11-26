<template>
  <nav class="desktop-icons" :class="{ 'is-home': isHome }" aria-label="Desktop">
    <router-link v-for="shortcut in shortcuts" :key="shortcut.name" :to="shortcut.to">
      <desktop-icon :name="shortcut.icon" :size="32"></desktop-icon>
      <span>{{ shortcut.name }}</span>
    </router-link>
  </nav>
</template>

<script>
import DesktopIcon from '@/components/desktop/DesktopIcon'

export default {
  name: 'desktop-icons',
  components: { DesktopIcon },
  data: () => {
    return {
      shortcuts: [
        { name: 'About me', icon: 'notepad', to: '/#about-me' },
        { name: 'Languages', icon: 'settings', to: '/#languages-and-frameworks' },
        { name: 'Contact', icon: 'mail', to: '/#contact-me' },
        { name: 'Projects', icon: 'folder', to: '/projects' },
        { name: 'Blog', icon: 'blog', to: '/blog' }
      ]
    }
  },
  computed: {
    isHome: function () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="scss" scoped>
// A column down the left of every page, like icons on a real desktop
.desktop-icons {
  position: sticky;
  top: 0;
  flex: none;
  display: flex;
  flex-direction: column;
  gap: calc(var(--px) * 12);
  padding: calc(var(--px) * 16) 0 0 calc(var(--px) * 6);

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-2);
    width: calc(var(--px) * 75);
    color: var(--color-white);
    text-align: center;
    text-decoration: none;

    span {
      padding: 0 var(--spacing-2);
      border: var(--line) dotted transparent;
    }

    &:hover span, &:focus span {
      background-color: var(--color-blue);
      border-color: var(--color-white);
    }
    &:focus {
      outline: none;
    }
  }
}

// White labels need a shadow to stay readable over the light clouds
:root[data-wallpaper='clouds'] .desktop-icons a span {
  text-shadow: var(--line) var(--line) 0 var(--color-black);
}
:root[data-wallpaper='clouds'] .desktop-icons a:is(:hover, :focus) span {
  text-shadow: none;
}

// On phones the icons become rows above the content. They only show on the
// home page there, so other pages start with their own content.
@media (max-width: 767px) {
  .desktop-icons {
    position: static;
    flex-flow: row wrap;
    justify-content: center;
    gap: calc(var(--px) * 8) 0;
    padding: calc(var(--px) * 8) 0 0;

    &:not(.is-home) {
      display: none;
    }
  }
}
</style>
