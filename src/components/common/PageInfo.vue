<!--
  组件：PageInfo页面信息
  隶属：Common公用
-->
<template>
<div id="pageInfo" class="module">
  <div class="container">
    <div class="titleinfo">{{ title }}</div>
    <div class="breadcrumbs">{{ breadcrumbs }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PageInfo',
  props: {
    title: {
      type: String,
      required: true
    },
    breadcrumbs: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">
#pageInfo
  border-radius 12px 12px 0 0
  margin-bottom 0
  .container
    border-bottom 1px dashed transparent
    background linear-gradient(#fff, #fff) padding-box, repeating-linear-gradient(-45deg, $line-color 0, $line-color 0.35em, #fff 0, #fff 0.65em)
    padding 50px 0
    display flex
    justify-content space-between
    align-items center
    font-weight 700
    & > .titleinfo
      font-size $sub-title-fsz
</style>