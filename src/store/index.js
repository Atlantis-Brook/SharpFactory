import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import blogStore from "./blog_store.js"

export default new vuex.Store({
    modules:{
        blog:blogStore,

    }
})