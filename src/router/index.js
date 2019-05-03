import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import News from '@/components/News'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
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
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
