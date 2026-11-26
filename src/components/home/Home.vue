<template>
  <div class="home">
    <div class="desktop-page">
      <app-window id="welcome" title="Welcome" icon="computer">
        <welcome></welcome>
      </app-window>
      <app-window id="about-me" title="About me" icon="notepad">
        <about-me></about-me>
      </app-window>
      <app-window id="languages-and-frameworks" title="Languages and frameworks" icon="settings">
        <languages></languages>
      </app-window>
      <app-window id="contact-me" title="Get in touch" icon="mail">
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
import { Constants } from '@/constants'
import headshot from '../../assets/headshot/crop.jpg'

export default {
  name: 'home',
  components: { AppWindow, ContactMe, AboutMe, Languages, Welcome },
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
.app-window {
  scroll-margin-top: var(--spacing-5);
}
</style>
