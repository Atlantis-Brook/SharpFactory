<!--
  组件：OurAdvantages我们的优势
  隶属：Home主页
  路由：/home
-->
<template>
<div id="ourAdvantages">
  <div class="container">
    <div class="column" v-for="(advantage, index) of advantages" :key="index">
      <div class="circle">
        <i class="iconfont" :class="advantage.iconName"></i>
      </div>
      <p class="word">{{ advantage.word }}</p>
      <span class="cut-line"></span>
      <p>{{ advantage.desc }}</p>
    </div>
  </div>
</div> 
</template>

<script>
import { advantages } from '@/assets/js/data.js'

export default {
  name: 'OurAdvantage',
  data () {
    return {
      advantages
    }
  }
}
</script>

<style lang="stylus">
#ourAdvantages
  padding 70px 0
  background-color rgba(52, 208, 209, .6)
  position relative
  &::before
    content ''
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    z-index -1
    background $main-bgcolor url(../../assets/images/ourAdvantages-bg.jpg) center no-repeat
    background-size cover
  .container
    display flex
    justify-content space-between
  .column
    width 288px
    text-align center
    .word
      font-size $title-fsz
      margin 14px 0
    .cut-line
      margin-bottom 14px
    .circle
      width: 115px
      height: 115px
      margin 0 auto
      display flex
      justify-content center
      align-items center
      & > i.iconfont
        font-size 80px
</style>
