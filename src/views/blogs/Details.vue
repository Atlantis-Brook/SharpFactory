<!--
  页面：BlogsDetails博客详情
  路由：/blogs
-->
<template>
<base-article :tab="tab" :id="id"/>
</template>

<script>
import Article from '@/components/common/Article'

export default {
  name: 'BlogsDetails',
  components: { BaseArticle: Article },
  data() {
    return{
      id:this.$route.query.id,
      tab:this.$route.query.tab
    }
  },
}
</script>
