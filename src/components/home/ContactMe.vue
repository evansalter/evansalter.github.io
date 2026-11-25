<template>
  <div class="contact-container">
    <div class="sunken contact-image">
      <img :src="contactImage" alt="Evan Salter" width="144" height="144">
    </div>
    <ul>
      <li v-for="item in contactInfo" :key="item.url">
        <desktop-icon :name="item.icon" :size="32"></desktop-icon>
        <a :href="item.url" target="_blank" rel="noopener">{{ item.display }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import DesktopIcon from '@/components/desktop/DesktopIcon'
import contactInfo from '@/components/common/contact.js'
// crop.jpg at 144x144 in 256 dithered colors
import contactImage from '../../assets/headshot/crop-256.png'

export default {
  name: 'contact-me',
  components: { DesktopIcon },
  data: () => {
    return {
      contactImage,
      contactInfo: contactInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-6);
}

.contact-image {
  padding: calc(var(--px) * 2);

  img {
    width: calc(var(--px) * 144);
    height: calc(var(--px) * 144);

    // 1.5x only lands on whole device pixels on high-density screens
    @media (min-resolution: 2dppx) {
      image-rendering: pixelated;
    }
  }
}

ul {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}
</style>
