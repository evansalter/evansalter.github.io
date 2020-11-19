<template>
  <div class="full-width">
    <h2>Languages and frameworks.</h2>
    <div class="button-group">
      <v-btn round outline @click.native="selectedButton = 'top'" :class="{active: selectedButton === 'top'}">
        Current top languages
      </v-btn>
      <v-btn round outline @click.native="selectedButton = 'all'" :class="{active: selectedButton === 'all'}">
        All languages
      </v-btn>
    </div>
    <div :class="{hidden: selectedButton !== 'top'}">
      <wakatime></wakatime>
      <span>These stats are updated live from <a href="https://wakatime.com/" target="_blank" rel="noopener">Wakatime</a> and includes data from the past 3 months.</span>
    </div>
    <div class="language-container" :class="{hidden: selectedButton !== 'all'}">
      <div v-for="language in languages">
        <div><h4>{{ language.category }}</h4></div>
        <span v-for="value in language.values">
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Wakatime from './Wakatime'

export default {
  name: 'languages',
  components: { Wakatime },
  data: () => {
    return {
      selectedButton: 'top',
      languages: [
        {
          category: 'Web Frontend',
          values: ['Angular', 'Vue.js', 'Typescript', 'SCSS', 'Webpack']
        },
        {
          category: 'Google Cloud Platform',
          values: ['Kubernetes Engine', 'App Engine', 'Compute Engine', 'Cloud SQL']
        },
        {
          category: 'Backend',
          values: ['Go', 'Python']
        },
        {
          category: 'Systems',
          values: ['C/C++', 'Java']
        },
        {
          category: 'Data',
          values: ['Cloud Datastore', 'SQL', 'BiqQuery', 'Elasticsearch']
        },
        {
          category: 'Mobile',
          values: ['iOS', 'Swift', 'Objective-C']
        }
      ]
    }
  },
  methods: {
    selectButton (btn) {
      this.selectedButton = btn
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  color: #2B3940;
}

.full-width {
  width: 100%;
}

h4 {
  font-weight: bold;
}

.language-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  flex-direction: column;

  div {

    padding-top: 10px;

    span {
      font-size: 25px;
      padding-right: 20px;
    }
  }
}

.button-group {
  text-align: center;
  margin: 15px 0;

  .btn {
    margin: 0;

    &:first-child {
      border-radius: 28px 0 0 28px;
      margin-right: -3px;
    }
    &:last-child {
      border-radius:  0 28px 28px 0;
      margin-left: -3px;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      display: flex;
      flex-direction: column;
    }
    .btn {
      &:first-child {
        border-radius: 28px 28px 0 0;
        margin: 0;
      }
      &:last-child {
        border-radius: 0 0 28px 28px;
        margin: 0;
        margin-top: -1px;
      }
    }
  }
  .active {
    background-color: lightgrey !important;
    z-index: 1000;
  }
}

.hidden {
  display: none;
}
</style>
