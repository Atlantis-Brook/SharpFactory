<!--
  组件：NewsEvent新闻事件
  隶属：Home主页
  路由：/home
-->
<template>
<div id="newsEvent">
  <div class="container">
    <base-title v-bind="titleData" />
    <div class="content-box">
      <data-item />
      <data-item />
    </div>
    <a class="button" href="/news">MORE NEWS</a>
  </div>
</div>
</template>

<script>
import { newsTitle } from '@/assets/js/data.js'

import Title from '@/components/common/Title'
import DataItem from '@/components/common/DataItem'

export default {
  name: 'NewsEvent',
  components: { BaseTitle: Title, DataItem },
  data () {
    return {
      titleData: newsTitle
    }
  }
}
</script>

<style lang="stylus">
#newsEvent
  background-color $sub-bgcolor
  padding 100px 0
  text-align center
  .button
    button($main-color-2, $main-color-1)
</style>