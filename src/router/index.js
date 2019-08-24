/**
 * 全局路由
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },

    // 首页
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home')
    },

    // 关于我们
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About')
    },
    
    // 为您服务
    {
      path: '/service',
      name: 'Service',
      component: () => import('@/views/Service')
    },

    // 新闻列表
    {
      path: '/news',
      component: () => import('@/views/news/Wrapper'),
      children: [
        // 新闻详情
        {
          path: 'details',
          name: 'NewsDetails',
          component: () => import('@/views/news/Details')
        },
        {
          path: '',
          name: 'News',
          component: () => import('@/views/news/News')
        }
      ]
    },

    // 博客列表
    {
      path:'/blogs',
      component: () => import('@/views/blogs/Wrapper'),
      children: [
        // 博客详情
        {
          path: 'details',
          name: 'BlogDetails',
          component: () => import('@/views/blogs/Details')
        },
        {
          path: '',
          name: 'Blogs',
          component: () => import('@/views/blogs/Blogs')
        }
      ]
    },

    // 网址导航
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('@/views/Guide')
    },
    /*
    // 留言板
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/MessageBoard.vue')
    }, */
    // 404
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/views/notFound.vue')
    },
    {
      path: '*',
      redirect: "/404"
    },
  ]
})
