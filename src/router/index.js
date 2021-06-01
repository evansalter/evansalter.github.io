import Vue from 'vue'
import Router from 'vue-router'

import Blog from '@/components/blog/Blog'
import BlogPost from '@/components/blog/Post'
import Home from '@/components/home/Home'
import Projects from '@/components/projects/Projects'
import Resume from '@/components/resume/Resume.vue'
import FourOhFour from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { name: 'Home' }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: { name: 'Projects' }
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
      meta: { name: 'Resume' }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: { name: 'Blog' }
    },
    {
      path: '/blog/:slug',
      name: 'BlogPost',
      component: BlogPost,
      props: true
    },
    {
      path: '*',
      name: '404',
      component: FourOhFour,
      meta: { name: '404' }
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return to.hash
    } else {
      return { x: 0, y: 0 }
    }
  }
})
