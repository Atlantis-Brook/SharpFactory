import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import News from '@/components/News'
import NotFound from '@/views/NotFound'
import Blogs from '@/views/Blogs'
import NewDetails from '@/views/NewDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'News',
      component: News
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path:'/blogs',
      name:'Blogs',
      component:Blogs
    },
    {
      path:'/new/details',
      name:'NewDetails',
      component:NewDetails
    }
  ]
})
