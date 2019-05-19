import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import News from '@/components/News'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
