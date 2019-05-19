import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import News from '@/components/News'
import NotFound from '@/views/NotFound'
import Blogs from '@/views/Blogs'
import NewDetails from '@/views/NewDetails'
import BlogDetails from '@/views/BlogDetails'

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
      path: '/h',
      name: 'Header',
      component: Header
    },
    {
      path: '/f',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/blogdetails',
      name: 'BlogDetails',
      component: BlogDetails
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
