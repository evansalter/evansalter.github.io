// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-awesome/icons'

import Vue from 'vue'
import App from './App'
import router from './router'

import Materials from 'vue-materials'
import Icon from 'vue-awesome/components/Icon.vue'

Vue.config.productionTip = false
Vue.use(Materials)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
