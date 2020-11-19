<template>
  <v-container fluid>
    <v-row class="panel" id="welcome-panel">
      <welcome></welcome>
    </v-row>
    <v-row class="panel panel-full grey-panel">
      <about-me></about-me>
    </v-row>
    <v-row id="languages-and-frameworks" class="panel panel-full">
      <languages></languages>
    </v-row>
    <v-row id="contact-me" class="panel panel-full grey-panel">
      <contact-me></contact-me>
    </v-row>
  </v-container>
</template>

<script>
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Languages from './Languages'
import Wakatime from './Wakatime'
import Welcome from './Welcome'
import { Constants } from '@/constants'

export default {
  name: 'home',
  components: { ContactMe, AboutMe, Languages, Wakatime, Welcome },
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
        { p: 'og:image', c: Constants.BASE_URL + require('../../assets/headshot/full2.jpg') },
        { p: 'twitter:site', c: '@_evansalter' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  margin: 0;
  color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  position: relative;

  @for $i from 1 through 4 {
    &:nth-child(#{$i}) {
      z-index: 98 - $i
    }
  }
}

#welcome-panel {
  background-image: url("../../assets/headshot/full2.jpg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  margin: 0;
  color: white;
}

p, li {
  font-size: 25px;
}

.panel-full {
  padding: 25px;
}

.light-green {
  color: black;
}

.panel{
  * {
    color: #314148;
  }
}

.grey-panel {
  background-color: #9BAEB6;
  * {
    color: white;
  }
}
</style>
