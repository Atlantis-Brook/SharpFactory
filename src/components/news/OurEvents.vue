<!--
  组件：OurEvents工作室事件
  隶属：news新闻页面
  路由：/news
-->
<template>
<div id="ourEvents" class="module">
  <div class="container">
    <base-title v-bind="titleData" />
    <div class="content-box">
      <data-item />
      <data-item />
      <data-item />
    </div>
    <mo-paging />
  </div>
</div>
</template>

<script>
import { eventsTitle } from '@/assets/js/data.js'

import Title from '@/components/common/Title'
import DataItem from '@/components/common/DataItem'
import MoPaging from '@/components/common/MoPaging'

export default {
  name: 'ourEvents',
  components: { BaseTitle: Title, DataItem, MoPaging },
  data () {
    return {
      titleData: eventsTitle
    }
  }
}
</script>

<style lang="stylus">
#ourEvents
  padding 100px 0
  border-radius 0 0 12px 12px
</style>