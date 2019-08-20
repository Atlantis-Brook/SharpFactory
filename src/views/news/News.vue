<!--
  页面：News新闻页面（列表）
  路由：/news
-->
<template>
<div>
  <our-events />
  <hacker-news />
</div>
</template>

<script>
import OurEvents from '@/components/news/OurEvents'
import HackerNews from '@/components/news/HackerNews'

export default {
  name: 'NewsPage',
  components: {
    OurEvents,
    HackerNews
  }
}
</script>

<style lang="stylus">

</style>