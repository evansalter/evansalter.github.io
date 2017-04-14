<template>
  <v-card hover raised class="project-card">
    <v-row>
      <v-col class="project-image" v-if="project.image" :style="imageStyle" xs12 md4></v-col>
      <v-col xs12 :class="{ md8: project.image }">
        <v-row>
          <v-card-title>{{ project.name }}</v-card-title>
          <v-card-text v-if="project.description">{{ project.description }}</v-card-text>
        </v-row>
        <v-card-row v-if="project.technologies && project.technologies.length > 0" class="technologies">
          <v-chip label v-for="technology in project.technologies" :key="technology">
            {{ technology }}
          </v-chip>
        </v-card-row>
        <v-card-row actions>
          <v-btn flat v-for="link in project.links" :key="link.name" @click.native="open(link.url, '_blank')">
            <template v-if="link.icon">
              <icon v-if="link.icon" :name="link.icon" scale="1"></icon>
              &nbsp
            </template>
            {{ link.name }}
          </v-btn>
        </v-card-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'project-card',
  props: ['project', 'index'],
  computed: {
    imageStyle: function () {
      return 'background-image: url("' + this.project.image + '")'
    },
    infoClass: function () {
      return this.project.image ? 'xs12 md8' : 'xs12'
    }
  },
  methods: {
    open: function (url) {
      window.open(url, 'blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card {
  overflow: hidden;
  &:hover {
    cursor: initial;
  }
}
.project-image {
  background-size: cover;
  background-position: center center;
  @media(max-width: 767px) {
    & {
      height: 300px;
    }
  }
}
.technologies {
  display: inline-block;
}
</style>
