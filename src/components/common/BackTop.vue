<!--
  组件：BackTop返回顶部
  隶属：Common公用
-->
<template>
<div title="返回顶部" id="backTop" @click="backTop">
  <i class="iconfont icon-fanhuidingbu1"></i>
</div>
</template>

<script>
export default {
  name: 'BackTop',
  methods: {
    backTop () {
      clearInterval(this.timer)
      const target = 0
      let speed, scrollTop
      this.timer = setInterval(() => {
        scrollTop = document.documentElement.scrollTop
        speed = (target - scrollTop) / 10
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
        if (scrollTop === target) clearInterval(this.timer)
        document.documentElement.scrollTop =  scrollTop + speed
      }, 30)
    }
  }
}
</script>

<style lang="stylus">
#backTop
  position fixed
  bottom 160px
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
    // color $sub-bgcolor
</style>