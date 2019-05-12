import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import NotFound from '@/views/NotFound'
import Blogs from '@/views/Blogs'
import BlogDetails from '@/views/BlogDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path:'/blogs/details',
      name:'BlogDetails',
      component:BlogDetails
    }
  ]
})
