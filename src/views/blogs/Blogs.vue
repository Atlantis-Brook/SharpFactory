<!--
  页面：Blogs博客页面（列表）
  路由：/blogs
-->
<template>
<div>
  <search-blogs />
  <blogs-list />
</div>
</template>

<script>
import SearchBlogs from '@/components/blogs/SearchBlogs'
import BlogsList from '@/components/blogs/BlogsList'

export default {
  name: 'BlogsPage',
  components: {
    SearchBlogs,
    BlogsList
  }
}
</script>

<style lang="stylus">

</style>