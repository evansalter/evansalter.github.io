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
      <h1>About Me</h1>
      <p>
        I am a computer science student at the University of Sasaktchewan, currently completing a 16 month internship
        at Vendasta Technologies.
      </p>
      <p>
        I love all things computer science, but my current passion is web development (both front and back-end).
        That said, I am always open to trying new things and learning new technologies whenever I have the chance.
      </p>
      <p>
        Check out the <a href="#languages-and-frameworks">languages and frameworks</a> that I have used below, and
        browse through my <router-link to="/projects">projects page</router-link> to see what I've been up to.
        My <a href="#contact-me">contact info</a> is at the bottom of the page. Please feel free to contact me with
        any sort of question, thought, concern, opportunity, or just to chat.
      </p>
    </v-row>
    <v-row id="languages-and-frameworks" class="panel panel-full blue-grey">
      <h1>Languages and Frameworks</h1>
      <div class="language-container">
        <ul v-for="language in languages">
          <h3>{{ language.category }}</h3>
          <li v-for="value in language.values">
            {{ value }}
          </li>
        </ul>
      </div>
    </v-row>
    <v-row id="contact-me" class="panel panel-full green">
      <contact-me></contact-me>
    </v-row>
  </div>
</template>

<script>
import ContactMe from './ContactMe'

export default {
  name: 'home',
  components: {ContactMe},
  data: () => {
    return {
      languages: [
        {
          category: 'Web Frontend',
          values: ['Javascript', 'Typescript', 'HTML', 'CSS', 'Angular2', 'Vue.js', 'KnockoutJS']
        },
        {
          category: 'Backend',
          values: ['Python', 'Go']
        },
        {
          category: 'Data',
          values: ['Cloud Datastore', 'SQL', 'BiqQuery', 'Elasticsearch']
        },
        {
          category: 'Google Cloud Platform',
          values: ['AppEngine', 'Compute Engine']
        }

      ]
    }
  }
}
</script>

<style scoped>
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

.language-container {
  display: flex;
  flex-flow: row wrap;
}

.language-container ul {
  padding: 15px;
}
</style>
