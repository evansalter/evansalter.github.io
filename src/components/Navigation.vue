<template>
  <div>
    <v-toolbar fixed transparent>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="sidebarVisible = !sidebarVisible"></v-toolbar-side-icon>
      <v-toolbar-title>Evan Salter</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-toolbar-item v-for="page in pages"
                        :key="page.name"
                        :to="page.path"
                        :router="true"
                        ripple>
          {{ page.name }}
        </v-toolbar-item>
        <v-menu bottom :offset-y="true" transition="v-slide-y-transition">
          <v-toolbar-item slot="activator">
            Contact &nbsp; <icon name="angle-down"></icon>
          </v-toolbar-item>
          <v-list>
            <v-list-item v-for="link in contactInfo" :key="link.url">
              <v-list-tile :href="link.url" :target="getTarget(link)" avatar>
                <v-list-tile-avatar>
                  <icon :name="link.icon"></icon>
                </v-list-tile-avatar>
                <v-list-tile-title v-text="link.name"></v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-sidebar drawer v-model="sidebarVisible">
      <v-list dense>
        <v-list-item v-for="page in pages" :key="page.name">
          <v-list-tile :to="page.path" :router="true" active-class="sidebar-active" ripple>
            <v-list-tile-title v-text="page.name"/>
          </v-list-tile>
        </v-list-item>
        <v-divider light/>
        <v-subheader>
          Contact Me
        </v-subheader>
        <v-list-item v-for="link in contactInfo" :key="link.url">
          <v-list-tile :href="link.url" :target="getTarget(link)" ripple>
            <v-list-tile-avatar>
              <icon :name="link.icon"></icon>
            </v-list-tile-avatar>
            <v-list-tile-title v-text="link.name"/>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-sidebar>
  </div>
</template>

<script>
import contactInfo from '@/components/common/contact'

export default {
  name: 'navigation',
  data: () => {
    return {
      contactInfo: contactInfo,
      sidebarVisible: false,
      pages: [
        { path: '/', name: 'Home', exact: true },
        { path: '/projects', name: 'Projects', exact: false },
        { path: '/blog', name: 'Blog', exact: false }
      ],
      nav: {
        edge: 'right'
      }
    }
  },
  methods: {
    getTarget: function (item) {
      return item.newTab === false ? '' : '_blank'
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  z-index: 100;
}

.sidebar {
  z-index: 99;
  padding-top: 70px;
}

.sidebar-active {
  background: rgba(0,0,0,.12);
}
.menu {
  height: 100%;
}
</style>
