// Only register the Font Awesome icons the site actually uses
import 'vue-awesome/icons/angle-down'
import 'vue-awesome/icons/chrome'
import 'vue-awesome/icons/codepen'
import 'vue-awesome/icons/coffee'
import 'vue-awesome/icons/comments-o'
import 'vue-awesome/icons/envelope'
import 'vue-awesome/icons/facebook'
import 'vue-awesome/icons/font-awesome'
import 'vue-awesome/icons/github'
import 'vue-awesome/icons/globe'
import 'vue-awesome/icons/google-plus'
import 'vue-awesome/icons/linkedin'
import 'vue-awesome/icons/mobile'
import 'vue-awesome/icons/reddit'
import 'vue-awesome/icons/twitter'
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

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
