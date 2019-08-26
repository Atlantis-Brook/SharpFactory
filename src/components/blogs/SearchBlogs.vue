<!--
  组件：SearchBlogs博客搜索
  隶属：blogs博客页面
  路由：/blogs
-->
<template>
<div id="searchBlogs" class="module">
  <div class="container">
    <div class="title">
      <h3>搜索博客</h3>
    </div>
    <span class="vertical-line"></span>
    <div class="search-box">
      <input class="keyword" type="text" placeholder="请输入关键字" v-model="search.key">
      <input class="author" type="text" placeholder="请选择作者" v-model="search.user">   
      <div class="button">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SearchBlogs',
  data () {
    return {
      search:{
        key:'',
        user:''
      }
    }
  },
  watch:{
        search:{
        handler(newValue,oldValue){
          this.search = newValue;
          this.$parent.search = this.search;
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
#searchBlogs
  border-radius 0 0 12px 12px
  .container
    height 70px
    padding 40px 0
    display flex
    align-items center
    & > .title
      width 166px
      font-size $sub-title-fsz
      font-weight 700
      display flex
      justify-content center
      align-items center
    & > .search-box
      margin 0 46px
      flex 1
      display flex
      justify-content space-between
      .keyword,
      .author
        padding 12px 15px
        background-color $main-bgcolor
        border-radius 20px
      .keyword
        width 350px
      .author
        width 180px
      .button
        display flex
        align-items center
        & > span
          button()
</style>