<template>
<div id="app">
  <router-view />
  <base-footer />
  <back-top />
</div>
</template>

<script>
import Footer from '@/components/common/Footer'
import BackTop from '@/components/common/BackTop'

export default {
  name: 'App',
  components: { BaseFooter: Footer, BackTop },
  beforeCreate () {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      // TODO 待域名确定修改
      window.location.href="//baidu.com";
    }
  }
}
</script>

<style lang="stylus">
/* CSS Reset */
html
  min-width $doc-min-width
  font-family $font-family
  font-size $main-fsz
  color $font-color
  line-height 1.5em
  background-color $main-bgcolor
body
  margin 0
  min-height 100vh
a
  color $font-color
  text-decoration none
h1,
h2,
h3,
h4,
h5,
h6
  font-size 1rem
  margin 0
p
  margin 0
ul
  padding 0
li
  list-style none
input,
textarea,
button
  outline none
  border none
  resize none
*::placeholder
  color $placeholder-color
  font-weight 400
hr
  display block
  width 100%
  height 1px
  border 0
  padding 0
  border-top 1px dashed transparent
  background linear-gradient(#fff, #fff) padding-box, repeating-linear-gradient(-45deg, $line-color 0, $line-color 0.35em, #fff 0, #fff 0.65em)

/*css公共样式*/

/* 容器 */
.wrapper
  width 1200px
  margin 0 auto
.container
  width 1104px
  margin 0 auto
.module
  width 1200px
  margin 0 auto
  border-radius 12px
  margin-bottom 50px
  background-color $sub-bgcolor
.content-box
  margin 70px 0
main
  position relative
  margin-top -50px

/* 分割线 */
.vertical-line
  display block
  width 1px
  height 100%
  border-left 1px dashed transparent
  background linear-gradient(#fff, #fff) padding-box, repeating-linear-gradient(-45deg, $line-color 0, $line-color 0.35em, #fff 0, #fff 0.65em)
.cut-line
  display inline-block
  height 6px
  width 46px
  border-radius 3px
  background-color $main-color-1
</style>