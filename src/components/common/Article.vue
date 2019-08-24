<!--
  组件：Article文章
  隶属：Common公用
  新闻和博客详情内容
  路由：/news
       /blogs
-->
<template>
<div class="article module">
  <loadding :url="url" :params="params">
    <div class="container">
      <div class="article-title">
        <h2 class="title">{{ theData.title }}</h2>
        <div class="time">{{ theData.year }}.{{ theData.month }}.{{ theData.day }}</div>
      </div>
      <div class="article-info">访问：{{ theData.visits }}<br>作者：{{ theData.user}}</div>
      <span class="cut-line"></span>
      <article><span v-html="theData.html" ></span></article>
    </div>
  </loadding>
</div>
</template>

<script>
import Loadding from '@/components/common/Loadding'
import { blogDetails, ourNewsDetails} from '@/api'

export default {
  name: 'BaseArticle',
  components:{ Loadding:Loadding },
  props:['tab',"id"],
  data () {
    return {
      params:{
        id:this.id
      },
      url:"",
      theData:{blog:{}}
    }
  },
  created () {
     switch (this.tab) {
       case "blog":
         this.url = blogDetails;
         break;
       case "ourNews":
         this.url = ourNewsDetails;
         break;
       default:
         this.$router.push('/*');
         break;
     };
  },
  watch:{
    url(newValue,oldValue){
      this.url = newValue;
    },
    theData(newValue,oldValue){
      this.theData = newValue.blog[0];
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