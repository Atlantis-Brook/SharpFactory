<!--
  组件：HackerNews黑客新闻
  隶属：news新闻页面
  路由：/news
-->
<template>
<div id="hackerNews" class="module">
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
import { hackerNewsTitle } from '@/assets/js/data.js'

import Title from '@/components/common/Title'
import DataItem from '@/components/common/DataItem'
import MoPaging from '@/components/common/MoPaging'

export default {
  name: 'HackerNews',
  components: { BaseTitle: Title, DataItem, MoPaging },
  data () {
    return {
      titleData: hackerNewsTitle
    }
  }
}
</script>

<style lang="stylus">
#hackerNews
  padding 100px 0
  border-radius 12px
</style>