<template>
  <div id="about-container">
    <v-row class="panel" id="welcome-panel">
      <div class="text-container col s12 m7">
        <div class="text">
          <h1>Hi.</h1>
          <h3>I'm Evan Salter.</h3>
        </div>
      </div>
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
  </div>
</template>

<script>
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Languages from './Languages'

export default {
  name: 'home',
  components: { ContactMe, AboutMe, Languages }
}
</script>

<style>
#about-container {
  height: calc(100% - 64px);
}

.panel {
  margin: 0;
  color: white;
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

.text-container {
  padding-bottom: 0;
  padding-left: 25px;
  height: 100%;
  background: linear-gradient(to right, rgba(33,150,243,1) 0%,rgba(33,150,243,1) 50%,rgba(33,150,243,0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

@media(max-width: 600px) {
  .text-container {
    background: #2196F3;
  }
  .text {
    text-align: center;
  }
}

.panel-full {
  padding: 25px;
}

p, li {
  font-size: 25px;
}

.light-green {
  color: black;
}

.language-container ul {
  padding: 15px;
}
</style>
