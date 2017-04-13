import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Projects from '@/components/projects/Projects'
import FourOhFour from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '*',
      name: '404',
      component: FourOhFour
    }
  ]
})
