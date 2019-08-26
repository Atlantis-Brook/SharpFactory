<!--
  页面：Blogs博客页面（列表）
  路由：/blogs
-->
<template>
<div>
  <search-blogs />
  <blogs-list :search='search' />
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
  },
  data(){
    return {
      search:{}
    }
  },
  watch:{
      search:{
        handler(newValue,oldValue){
          this.search = newValue;
          console.log(this.search);
        },
        deep:true
      }
  },
  methods:{
  
  }
}
</script>

<style lang="stylus">

</style>