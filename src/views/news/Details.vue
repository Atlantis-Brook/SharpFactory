<!--
  页面：NewsDetails新闻详情
  路由：/news
-->
<template>
<base-article :tab="tab" :id="id" />
</template>

<script>
import Article from '@/components/common/Article'

export default {
  name: 'NewsDetails',
  components: { BaseArticle: Article },
  data() {
    return{
      id:this.$route.query.id,
      tab:this.$route.query.tab
    }
  },
}
</script>
