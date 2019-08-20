<!--
  组件：BlogsList博客列表
  隶属：blogs博客页面
  路由：/blogs
-->
<template>
<div id="blogsList" class="module">
  <div class="container">
    <base-title v-bind="titleData" />
    <div class="content-box">
      <data-item />
      <data-item />
      <data-item />
      <data-item />
      <data-item />
    </div>
    <mo-paging />
  </div>
</div>
</template>

<script>
import Title from '@/components/common/Title'
import DataItem from '@/components/common/DataItem'
import MoPaging from '@/components/common/MoPaging'

export default {
  name: 'BlogsList',
  components: { BaseTitle: Title, DataItem, MoPaging },
  data () {
    return {
      titleData: {
        mainTitle: 'OUR BLOGS',
        subTitle: '博客聚合',
        desc1: '记录',
        desc2: '是一种习惯'
      }
    }
  }
}
</script>

<style lang="stylus">
#blogsList
  padding 100px 0
  border-radius 12px
</style>