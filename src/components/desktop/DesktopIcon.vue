<template>
  <img class="desktop-icon"
       :class="'desktop-icon-' + size"
       :src="src"
       :width="size"
       :height="size"
       alt="">
</template>

<script>
const files = import.meta.glob('../../assets/icons/win95/*.png', { eager: true, import: 'default' })

export default {
  name: 'desktop-icon',
  props: {
    name: { type: String, required: true },
    // Which bitmap to use, in Windows 95 pixels; --px scales it with everything else
    size: { type: Number, default: 16, validator: size => [16, 32].includes(size) }
  },
  computed: {
    src: function () {
      return files[`../../assets/icons/win95/${this.name}-${this.size}.png`]
    }
  }
}
</script>

<style lang="scss">
.desktop-icon {
  flex: none;
  max-width: none;
}

@each $size in 16, 32 {
  .desktop-icon-#{$size} {
    width: calc(var(--px) * #{$size});
    height: calc(var(--px) * #{$size});
  }
}

// 1.5x only lands on whole device pixels on high-density screens
@media (min-resolution: 2dppx) {
  .desktop-icon {
    image-rendering: pixelated;
  }
}
</style>
