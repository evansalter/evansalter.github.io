<template>
  <v-container fluid>
    <v-row class="panel" id="welcome-panel">
      <welcome></welcome>
    </v-row>
    <v-row class="panel panel-full red">
      <about-me></about-me>
    </v-row>
    <v-row id="languages-and-frameworks" class="panel panel-full blue-grey">
      <languages></languages>
    </v-row>
    <v-row id="contact-me" class="panel panel-full green">
      <contact-me></contact-me>
    </v-row>
  </v-container>
</template>

<script>
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Languages from './Languages'
import Welcome from './Welcome'

export default {
  name: 'home',
  components: { ContactMe, AboutMe, Languages, Welcome }
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
  height: 90%;
  background-image: url("../../assets/headshot/full.jpg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  margin: 0;
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
</style>
