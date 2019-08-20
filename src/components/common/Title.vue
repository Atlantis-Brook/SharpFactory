<!--
  组件：Title标题
  隶属：Common公用
-->
<template>
<div class="baseTitle">
  <div class="left">
    <h2>{{ mainTitle }}</h2>
    <p>{{ subTitle }}</p>
  </div>
  <div class="right">
    <p>{{ desc1 }}<br>{{ desc2 }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    mainTitle: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    desc1: {
      type: String,
      default: ''
    },
    desc2: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="stylus">
.baseTitle
  display flex
  align-items center
  justify-content space-between
  width 100%
  font-weight 700
  & > .left
    text-align left
    h2
      font-size $title-fsz
      margin-bottom 24px
    p
      font-size $sub-title-fsz
  & > .right
    text-align right
    font-size $l3-title-fsz
    line-height 1.5em
</style>