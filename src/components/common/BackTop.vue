<!--
  组件：BackTop返回顶部
  隶属：Common公用
-->
<template>
<div title="返回顶部" id="backTop" v-show="show" @click="backTop">
  <i class="iconfont icon-dingbu"></i>
</div>
</template>

<script>
import { backTopX } from '@/assets/js/data.js'

export default {
  name: 'BackTop',
  data () {
    return {
      show: false, // 组件显示
      scrollTop: 0, // window.scrollTop
      showScrollTop: backTopX, // 多少距离显示
      timer: null // 定时器
    }
  },
  methods: {
    backTop () {
      clearInterval(this.timer)
      let speed = 0
      this.timer = setInterval(() => {
        speed = -(this.scrollTop) / 5
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
        if (this.scrollTop === 0) clearInterval(this.timer)
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + speed
      }, 20)
    },
    isShow () {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (this.scrollTop >= this.showScrollTop) this.show = true
      else this.show = false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.isShow)
  },
  willDestroy () {
    window.removeEventListener('scroll', this.isShow)
  }
}
</script>

<style lang="stylus">
#backTop
  position fixed
  bottom 50px
  right 50px
  display flex
  align-items center
  justify-content center
  width 50px
  height 50px
  border-radius 25px
  background-color $main-color-1
  cursor pointer
  transition background-color .7s
  &:hover
    background-color $main-color-2
  &::before
    content ''
    position absolute
    top -3px
    left -3px
    height 100%
    width 100%
    border 2px solid $font-color
    border-radius 50%
  i.iconfont
    font-size $title-fsz
    font-weight 700
</style>