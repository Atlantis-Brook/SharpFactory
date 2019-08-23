<!--
  组件：GetStart快速开始
  隶属：Home主页
  路由：/home
-->
<template>
<div id="getStart" class="wrapper">
  <div class="container">
    <p>欢迎访问<strong> SharpFactory 工作室</strong>，您想：</p>
    <ul>
      <li><a href="">加入我们</a></li>
      <li><a href="">委托项目</a></li>
      <li><a href="/contact">联系我们</a></li>
      <li @click="slide()">随便看看</li>
    </ul>
    <span class="vertical-line"></span>
    <datetime class="the-time"/>
  </div>
</div>
</template>

<script>
import { browseX } from '@/assets/js/data.js'

import Datetime from '@/components/common/Datetime'

export default {
  name: 'GetStart',
  components: { Datetime },
  data () {
    return {
      browseX, // 页面滑动到什么地方
      timer: null // 定时器
    }
  },
  methods: {
    /* 点击"随便看看"按钮事件 */
    slide () {
      clearInterval(this.timer)
      let speed, scrollTop
      this.timer = setInterval(() => {
        scrollTop = document.documentElement.scrollTop
        speed = (this.browseX - scrollTop) / 10
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
        if (scrollTop === this.browseX) clearInterval(this.timer)
        document.documentElement.scrollTop =  scrollTop + speed
      }, 20)
    }
  }
}
</script>

<style lang="stylus">
#getStart
  padding 30px 0 24px
  wave-box($sub-bgcolor)
  .container
    display flex
    justify-content space-between
    align-items center
    & > p
      font-size 16px
    & > ul
      display flex
      background-color $main-bgcolor
      border-radius 100px
      margin 0 40px 0 20px
      & > li
        padding 14px 30px
        position relative
        &:not(:last-child):not(:hover)::after
          content ''
          width: 2px
          height 16px
          background-color $line-color
          position absolute
          right 0
          top 16px
        &:hover
          background-color $main-color-1
          font-weight 700
          border-radius 100px
          cursor pointer
          transition background-color 0.7s
          position relative
          &::before
            content ''
            position absolute
            top -3px
            left -3px
            height 100%
            width 100%
            border 2px solid $font-color
            border-radius 100px
          &::after
            content ''
            border-top: 3px solid #fff
            width 16px
            position absolute
            top -3px
            left 22px
        &:nth-child(even):hover
          background-color $main-color-2
    & > .vertical-line
      height 48px
    & > .the-time
      padding-left 20px
</style>
