// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import { baseUrl } from './api'
import App from './App'
import router from './router'
import store from './store'

Axios.defaults.baseURL = baseUrl
Vue.config.productionTip = false

/* eslint-disable no-new */

router.afterEach((to, from, next) => window.scrollTo(0,0))


/**
 * 实例化vue对象
 */
new Vue({
  el: '#app',
  router,
  store, // 加入stroe对象
  components: { App },
  template: '<App/>'
})
