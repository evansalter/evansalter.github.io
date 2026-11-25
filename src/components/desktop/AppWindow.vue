<template>
  <section class="dialog app-window" :class="{ 'is-minimized': minimized }">
    <div class="dialog-header">
      <div class="window-title">
        <desktop-icon v-if="icon" :name="icon" :size="16"></desktop-icon>
        <component :is="heading">{{ title }}</component>
      </div>
      <div class="window-controls">
        <button type="button"
                :aria-label="(minimized ? 'Restore ' : 'Minimize ') + title"
                :aria-expanded="String(!minimized)"
                @click="minimized = !minimized">
          <span class="glyph" :class="minimized ? 'glyph-restore' : 'glyph-minimize'"></span>
        </button>
        <router-link v-if="closeTo" class="btn" :to="closeTo" :aria-label="'Close ' + title">
          <span class="glyph glyph-close"></span>
        </router-link>
      </div>
    </div>
    <div v-show="!minimized" class="dialog-body">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import DesktopIcon from './DesktopIcon'

export default {
  name: 'app-window',
  components: { DesktopIcon },
  props: {
    title: { type: String, required: true },
    icon: { type: String, default: '' },
    heading: { type: String, default: 'h2' },
    // Route the close button leads to; windows without one can't be closed
    closeTo: { type: String, default: '' }
  },
  data: function () {
    return {
      minimized: false
    }
  }
}
</script>

<style lang="scss">
.app-window {
  // Title bar: 18px tall with 16x14 buttons
  .dialog-header {
    min-height: calc(var(--px) * 18);
    padding: calc(var(--px) * 1) calc(var(--px) * 2);
    gap: calc(var(--px) * 4);

    h1, h2, h3 {
      min-width: 0;
      font-size: var(--font-size);
      line-height: calc(var(--px) * 16);
      font-weight: bold;
      text-wrap: wrap;
    }
  }

  .window-title {
    display: flex;
    align-items: center;
    gap: calc(var(--px) * 3);
    min-width: 0;
  }

  .window-controls {
    display: flex;
    flex: none;
    gap: calc(var(--px) * 2);

    .btn:not(.tab), button:not(.tab) {
      width: calc(var(--px) * 16);
      height: calc(var(--px) * 14);
      min-height: 0;
      padding: 0;

      &:not(:active):focus::after {
        inset: calc(var(--px) * 3);
      }

      // The default focus style thickens the frame, which swamps a button this
      // small; the dotted ring is enough
      &:not(:active):focus {
        box-shadow: var(--shadow-default-button-default);
      }
    }
  }

  // Pixel glyphs on a 8x8 grid
  .glyph {
    display: block;
    width: calc(var(--px) * 8);
    height: calc(var(--px) * 8);
    background: no-repeat center / contain;
  }
  .glyph-minimize {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' shape-rendering='crispEdges'%3E%3Cpath d='M0 6h6v2H0z'/%3E%3C/svg%3E");
  }
  .glyph-restore {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' shape-rendering='crispEdges'%3E%3Cpath fill-rule='evenodd' d='M0 0h8v8H0zM1 2v5h6V2z'/%3E%3C/svg%3E");
  }
  .glyph-close {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' shape-rendering='crispEdges'%3E%3Cpath d='M0 0h2v1H0zM6 0h2v1H6zM1 1h2v1H1zM5 1h2v1H5zM2 2h4v1H2zM3 3h2v1H3zM2 4h4v1H2zM1 5h2v1H1zM5 5h2v1H5zM0 6h2v1H0zM6 6h2v1H6z'/%3E%3C/svg%3E");
  }
}
</style>
