import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import blog_store from "./blog_store.js"

export default new vuex.Store({
    modules:{
        blog:blog_store
    }
})