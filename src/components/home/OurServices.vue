<!--
  组件：OurServices为您服务
  隶属：Home主页
  路由：/home
-->
<template>
<div id="ourServices">
  <div class="container">
    <base-title v-bind="titleData" />
    <div class="content-box">
      <img :src="Img" alt="">
      <div class="left">
        <span>&lt;</span>
      </div>
      <div class="middle">
        <h3>{{ services[0].title }}</h3>
        <hr>
        <p>{{ services[0].desc }}</p>
      </div>
      <div class="right">
        <span>&gt;</span>
      </div>
    </div>
    <router-link class="button" to="/service">LEARN MORE</router-link>
  </div>
</div>
</template>

<script>
import Title from '@/components/common/Title'
import { servicesTitle, services } from '@/assets/js/data.js'
import Img from '@/assets/images/mobile-devices.svg'

export default {
  name: 'OurServices',
  components: { BaseTitle: Title },
  data () {
    return {
      Img,
      titleData: servicesTitle,
      services
    }
  }
}
</script>

<style lang="stylus">
#ourServices
  background-color $main-color-1
  padding 100px 0
  text-align center
  .content-box
    display flex
    padding 100px 0 48px
    position relative
    margin 250px 0 82px
    wave-box($sub-bgcolor)
    & > img
      width 900px
      position absolute
      bottom 100px
      left 100px
    & > .left,
    & > .right
      flex 1
      display flex
      justify-content center
      align-items center
      & > span
        change-pages-btn($main-color-2)
    & > .left > span:hover
      position relative
      left -1px
    & > .right > span:hover
      position relative
      right -1px
    & > .middle
      width 750px
    h3
      font-size $sub-title-fsz
    hr
      margin 40px 0
  .button
    button($main-color-2, $main-color-1, $main-color-1)
</style>