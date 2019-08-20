<!--
  组件：Footer尾部
  隶属：Common公用
-->
<template>
<footer id="footer">
  <div class="container">
    <div class="copyright">
      <p>{{ copyright }}</p>
      <p>{{ recordCode }}</p> 
    </div>
    <nav class="nav">
      <li v-for="(item, index) of bottomNavData" :key="index">
        <router-link :to="item.path" v-html="item.text"></router-link>
      </li>
    </nav> 
  </div>
</footer>
</template>

<script>
import { bottomNav, copyright, recordCode } from '@/assets/js/data.js'

export default {
  name: 'BaseFooter',
  data () {
    return {
      bottomNavData: bottomNav,
      copyright,
      recordCode
    }
  }
}
</script>

<style lang="stylus">
footer#footer
  background-color $font-color
  & > .container
    display flex
    padding 46px 0
    align-items center
    justify-content space-between
  .copyright
    color $placeholder-color
    & > p:first-child
      margin-bottom 6px
  .nav
    width 676px
    display flex
    justify-content space-between
    a
      color $sub-bgcolor
</style>
