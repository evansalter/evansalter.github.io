<template>
  <div class="home">
    <nav class="desktop-icons" aria-label="Desktop">
      <router-link v-for="shortcut in shortcuts" :key="shortcut.name" :to="shortcut.to">
        <desktop-icon :name="shortcut.icon" :size="32"></desktop-icon>
        <span>{{ shortcut.name }}</span>
      </router-link>
    </nav>
    <div class="desktop-page home-windows">
      <app-window id="welcome" title="Welcome" icon="computer">
        <welcome></welcome>
      </app-window>
      <app-window id="about-me" title="About me." icon="notepad">
        <about-me></about-me>
      </app-window>
      <app-window id="languages-and-frameworks" title="Languages and frameworks." icon="settings">
        <languages></languages>
      </app-window>
      <app-window id="contact-me" title="Get in touch." icon="mail">
        <contact-me></contact-me>
      </app-window>
    </div>
  </div>
</template>

<script>
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Languages from './Languages'
import Welcome from './Welcome'
import AppWindow from '@/components/desktop/AppWindow'
import DesktopIcon from '@/components/desktop/DesktopIcon'
import { Constants } from '@/constants'
import headshot from '../../assets/headshot/full2.jpg'

export default {
  name: 'home',
  components: { AppWindow, ContactMe, AboutMe, DesktopIcon, Languages, Welcome },
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
  head: {
    meta: function () {
      var description = 'The home of Evan Salter\'s projects and blog.'
      return [
        { p: 'description', c: description },
        { p: 'og:site_name', c: 'Evan Salter' },
        { p: 'og:title', c: 'About Evan Salter' },
        { p: 'og:description', c: description },
        { p: 'og:url', c: Constants.BASE_URL },
        { p: 'og:type', c: 'website' },
        { p: 'og:image', c: Constants.BASE_URL + headshot },
        { p: 'twitter:site', c: '@_evansalter' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: flex-start;
}

.home-windows {
  flex: 1;
  min-width: 0;
}

.app-window {
  scroll-margin-top: var(--spacing-5);
}

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

@media (max-width: 767px) {
  .home {
    display: block;
  }
  .desktop-icons {
    position: static;
    flex-flow: row wrap;
    justify-content: center;
    gap: calc(var(--px) * 8) 0;
    padding: calc(var(--px) * 8) 0 0;
  }
}
</style>
