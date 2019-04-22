import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/a'
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
      path: '/a',
      name: 'HelloWorld',
      component: A
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
