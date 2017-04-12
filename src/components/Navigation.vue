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
      </v-toolbar-items>
    </v-toolbar>
    <v-sidebar drawer v-model="sidebarVisible">
      <v-list dense>
        <v-list-item v-for="page in pages" :key="page.name">
          <v-list-tile :to="page.path" :router="true" active-class="sidebar-active" ripple>
            <v-list-tile-title v-text="page.name"/>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-sidebar>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data: () => {
    return {
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
</style>
