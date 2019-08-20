<!--
  组件：Article文章
  隶属：Common公用
  新闻和博客详情内容
  路由：/news
       /blogs
-->
<template>
<div class="article module">
  <div class="container">
    <div class="article-title">
      <h2 class="title">{{ title }}</h2>
      <div class="time">{{ time }}</div>
    </div>
    <div class="article-info">{{ info }}</div>
    <span class="cut-line"></span>
    <article>{{ article }}</article>
  </div>
</div>
</template>

<script>
export default {
  name: 'BaseArticle',
  data () {
    return {
      time: '2019.03.16',
      title: '标题标题标题标题标题标题',
      info: '作者：叉叉叉',
      article: '正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
    }
  }
}
</script>

<style lang="stylus">
.article
  padding 100px 0
  text-align left
  .cut-line
    margin-top 4px
    margin-bottom 36px
  .article-info
    margin-top 30px
    color $placeholder-color
  .article-title
    display flex
    justify-content space-between
    align-items center
    font-weight 700
    .title
      font-size $l3-title-fsz
    .time
      font-size $l4-title-fsz
      color $placeholder-color
</style>