<!--
  组件：Loadding数据加载
  隶属：Common公用
  请求后台数据时，根据请求结果，友好提示用户
-->
<template>
<div class="loadding">
  <p v-if="loadding" class="message">{{ loadPrompt.loadding }}</p>
  <p v-if="error" class="message">{{ loadPrompt.error }}</p>
  <slot v-if="ready">
    <p class="message">{{ loadPrompt.noData }}</p>
  </slot>
</div>
</template>

<script>
import { loadPrompt } from '@/assets/js/data.js'
import Axios from 'axios'

export default {
  name: 'Loadding',
  props: {
    method: {
      type: String,
      default: 'get'
    },
    url: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: () => new Object()
    }
  },
  data () {
    return {
      loadding: true,
      error: false,
      loadPrompt
    }
  },
  computed: {
    ready () {
      return !this.loadding && !this.error
    }
  },
  created () {
    Axios({
      method: this.method,
      url: this.url,
      params: this.params
    })
    .then(response => this.$parent.theData = response.data)
    .catch(err => this.error = true)
    .finally(() => this.loadding = false)
  },
  watch:{
    params:{
      handler(newValue,oldValue){
        this.params = newValue;
        Axios({
          method: this.method,
          url: this.url,
          params: this.params
        })
        .then(response => this.$parent.theData = response.data)
        .catch(err => this.error = true)
        .finally(() => this.loadding = false)
      },
      deep:true
    }
  },


}
</script>

<style lang="stylus">
.loadding
  & > p.message
    font-size $l4-title-fsz
    text-align center
</style>