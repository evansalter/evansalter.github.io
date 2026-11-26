<template>
  <header class="taskbar" ref="taskbar" @keydown.esc="closeMenu">
    <button type="button"
            class="start-button"
            ref="start"
            :class="{ 'is-active': menuOpen }"
            :aria-expanded="String(menuOpen)"
            aria-controls="start-menu"
            @click="menuOpen = !menuOpen">
      <desktop-icon name="start" :size="32"></desktop-icon>
      <strong>Start</strong>
    </button>

    <nav class="task-items" aria-label="Pages">
      <router-link v-for="page in pages"
                   :key="page.name"
                   :to="page.path"
                   :exact-path="page.exact"
                   active-class="is-active">
        <desktop-icon :name="page.icon" :size="16"></desktop-icon>
        {{ page.name }}
      </router-link>
    </nav>

    <div class="tray">{{ time }}</div>

    <div v-show="menuOpen" id="start-menu" class="start-menu dialog">
      <div class="start-band"><span>Evan Salter</span></div>
      <ul>
        <li v-for="page in pages" :key="page.name">
          <router-link :to="page.path" class="start-item" @click.native="closeMenu">
            <desktop-icon :name="page.icon" :size="32"></desktop-icon>
            {{ page.name }}
          </router-link>
        </li>
        <li class="start-divider" role="presentation"><hr></li>
        <li v-for="link in contactInfo" :key="link.url">
          <a :href="link.url" :target="getTarget(link)" rel="noopener" class="start-item" @click="closeMenu">
            <desktop-icon :name="link.icon" :size="32"></desktop-icon>
            {{ link.name }}
          </a>
        </li>
        <li class="start-divider" role="presentation"><hr></li>
        <li>
          <button type="button" class="start-item" @click="changeWallpaper">
            <desktop-icon name="display" :size="32"></desktop-icon>
            Change Wallpaper
          </button>
        </li>
        <li>
          <button type="button" class="start-item" @click="shutDown">
            <desktop-icon name="shut-down" :size="32"></desktop-icon>
            Shut Down...
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import contactInfo from '@/components/common/contact'
import DesktopIcon from '@/components/desktop/DesktopIcon'
import { toggleWallpaper } from '@/components/desktop/wallpaper'

function currentTime () {
  return new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

export default {
  name: 'navigation',
  components: { DesktopIcon },
  data: () => {
    return {
      contactInfo: contactInfo,
      menuOpen: false,
      time: currentTime(),
      pages: [
        { path: '/', name: 'Home', exact: true, icon: 'computer' },
        { path: '/projects', name: 'Projects', exact: false, icon: 'folder' },
        { path: '/blog', name: 'Blog', exact: false, icon: 'blog' }
      ]
    }
  },
  mounted: function () {
    document.addEventListener('click', this.onDocumentClick)
    this.clock = setInterval(() => { this.time = currentTime() }, 5000)
  },
  beforeDestroy: function () {
    document.removeEventListener('click', this.onDocumentClick)
    clearInterval(this.clock)
  },
  methods: {
    getTarget: function (item) {
      return item.newTab === false ? null : '_blank'
    },
    closeMenu: function () {
      if (this.menuOpen) {
        this.menuOpen = false
        this.$refs.start.focus()
      }
    },
    changeWallpaper: function () {
      toggleWallpaper()
      this.closeMenu()
    },
    shutDown: function () {
      this.closeMenu()
      this.$emit('shut-down')
    },
    onDocumentClick: function (event) {
      if (!this.$refs.taskbar.contains(event.target)) {
        this.menuOpen = false
      }
    }
  }
}
</script>

<style lang="scss">
// Taskbar: 28px tall with 22px buttons
.taskbar {
  height: var(--taskbar-height);
  padding: calc(var(--px) * 2);
  gap: calc(var(--px) * 3);
  // Only the top edge of the taskbar is raised
  box-shadow: inset 0 var(--line) 0 var(--color-white);

  .start-button:not(.tab) {
    flex: none;
    gap: calc(var(--px) * 2);
    height: calc(var(--px) * 22);
    min-height: 0;
    padding: 0 calc(var(--px) * 5) 0 calc(var(--px) * 3);

    // The only plain flag bitmap is 32px, but the one Windows draws here is
    // about 20px wide: leave it unscaled so it comes out the right size
    .desktop-icon {
      width: 32px;
      height: 32px;
    }
  }

  .task-items {
    flex: 1;
    min-width: 0;
    gap: calc(var(--px) * 3);

    a {
      flex: 0 1 calc(var(--px) * 120);
      min-width: 0;
      gap: calc(var(--px) * 3);
      height: calc(var(--px) * 22);
      padding: 0 calc(var(--px) * 4);

      // An open window's task button is bold, as well as pressed in
      &.is-active {
        font-weight: bold;
      }
    }
  }

  .tray {
    display: flex;
    flex: none;
    align-items: center;
    height: calc(var(--px) * 22);
    margin-left: auto;
    padding: 0 calc(var(--px) * 8);
    box-shadow: var(--shadow-inner-1);
    white-space: nowrap;
  }
}

.start-menu.dialog {
  position: absolute;
  bottom: calc(100% - var(--px) * 2);
  left: calc(var(--px) * 2);
  width: calc(var(--px) * 184);
  max-height: calc(100vh - var(--taskbar-height));
  overflow-y: auto;
  flex-direction: row;
  padding: calc(var(--px) * 3);

  .start-band {
    flex: none;
    width: calc(var(--px) * 21);
    background-color: var(--color-gray-300);
    color: var(--color-white);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: calc(var(--px) * 4);

    span {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      font-weight: bold;
    }
  }

  ul {
    flex: 1;
    list-style: none;
    padding: 0;
  }

  .start-item {
    display: flex;
    align-items: center;
    gap: calc(var(--px) * 8);
    padding: calc(var(--px) * 2) calc(var(--px) * 6);
    color: var(--color-black);
    text-decoration: none;

    &:hover, &:focus {
      background-color: var(--color-blue);
      color: var(--color-white);
      outline: none;
    }
  }

  // A button that looks like the links above it
  button.start-item:not(.tab) {
    width: 100%;
    justify-content: flex-start;
    text-align: left;
    white-space: nowrap;
    background: none;
    box-shadow: none;
    font: inherit;

    &:hover, &:focus {
      background-color: var(--color-blue);
      color: var(--color-white);
    }
    &:focus::after {
      content: none;
    }
  }

  .start-divider {
    padding: calc(var(--px) * 3) calc(var(--px) * 2);
  }
}

// Start menu covers navigation when there's no room for task buttons
@media (max-width: 767px) {
  .taskbar .task-items {
    display: none;
  }
}
</style>
