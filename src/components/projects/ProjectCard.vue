<template>
  <app-window :title="project.name" icon="folder">
    <div class="project" :class="{ 'has-image': project.image }">
      <div v-if="project.image" class="sunken project-image">
        <div :style="imageStyle"></div>
      </div>
      <div class="project-info">
        <p v-if="project.description">{{ project.description }}</p>
        <tag-list :tags="project.technologies"></tag-list>
        <div class="toolbar">
          <a class="btn"
             v-for="link in project.links"
             :key="link.name"
             :href="link.url"
             target="_blank"
             rel="noopener">
            <desktop-icon v-if="link.icon === 'github'" name="github" :size="16"></desktop-icon>
            <icon v-else-if="link.icon" :name="link.icon" scale="1"></icon>
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </app-window>
</template>

<script>
import AppWindow from '@/components/desktop/AppWindow'
import DesktopIcon from '@/components/desktop/DesktopIcon'
import TagList from '@/components/common/TagList'

export default {
  name: 'project-card',
  props: ['project'],
  components: { AppWindow, DesktopIcon, TagList },
  computed: {
    imageStyle: function () {
      return 'background-image: url("' + this.project.image + '")'
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  display: grid;
  gap: calc(var(--px) * 8);

  &.has-image {
    grid-template-columns: 1fr 2fr;
  }
}

.project-image {
  padding: calc(var(--px) * 2);
  min-height: 180px;
  display: flex;

  div {
    flex: 1;
    background-size: cover;
    background-position: center center;
  }
}

.project-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-4);

  p {
    margin: 0;
  }
}

.toolbar {
  flex-wrap: wrap;
  gap: calc(var(--px) * 4);
  margin-top: auto;
}

@media (max-width: 767px) {
  .project.has-image {
    grid-template-columns: 1fr;
  }
  .project-image {
    height: 240px;
  }
}
</style>
