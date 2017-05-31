// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-awesome/icons'
import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import { PostObject } from './components/blog/posts/index.js'

import Vuetify from 'vuetify'
import Icon from 'vue-awesome/components/Icon.vue'
import VueHead from 'vue-head'
import VueAnalytics from 'vue-analytics'

import SocialSharing from 'vue-social-sharing'

Vue.config.productionTip = false
Vue.use(SocialSharing)
Vue.use(VueHead)
Vue.use(Vuetify)
Vue.component('icon', Icon)

router.beforeEach((to, from, next) => {
  var pageName
  if (to.meta.name !== undefined) {
    pageName = to.meta.name
  } else if (to.name === 'BlogPost') {
    var slug = to.params.slug
    pageName = PostObject[slug].title
  }
  document.title = `${pageName}${pageName !== undefined ? ' | ' : ''}Evan Salter`
  next()
})

Vue.use(VueAnalytics, {
  id: 'UA-90718734-3',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
