<!--
  组件：DataItem数据条目
  隶属：Common公用
  新闻和博客列表页面的任一条新闻或博客
-->
<template>
<div class="container dataItem">
  <div class="left">
    <span class="day">{{ day }}</span>
    <span class="date">{{ year }}.{{ month }}</span>
  </div>
  <span class="vertical-line"></span>
  <div class="middle">
    <h4 class="title">{{ title }}</h4>
    <p class="desc">{{ synopsis }}</p>
  </div>
  <div class="right">
    <span class="button" @click="goto">DETAILS</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'DataItem',
  props: ['title', 'synopsis', 'year', 'month', 'day','id','url','tab'],
  methods:{
    goto(){
      console.log(this.tab);
      switch (this.tab) {
        case "hackerNews":
          window.open(this.url);
          break;
        case "blog":
          this.$router.push({
            path:'/blogs/details',
            query:{
              id:this.id,
              tab:this.tab
            }
          })
          break;
        case "ourNews":
          this.$router.push({
            path:'/news/details',
            query:{
              id:this.id,
              tab:this.tab
            }
          })
          break;
        default:
          this.$router.push("/*");
          break;
      }
    }
  }
}
</script>

<style lang="stylus">
.dataItem
  wave-box()
  box-sizing border-box
  height 150px
  padding 20px
  display flex
  margin-bottom 30px
  & > .left
    flex 1
    display flex
    flex-direction column
    justify-content center
    align-items center
    font-weight 700
    .day
      font-size $title-fsz
      margin-bottom 16px
    .date
      font-size $l4-title-fsz
      color $placeholder-color
  & > .middle
    flex 5
    box-sizing border-box
    padding 0 30px
    display flex
    flex-direction column
    justify-content center
    align-items flex-start
    text-align left
    .title
      font-size $l4-title-fsz
      font-weight 700
      margin-bottom 18px
    .desc
      max-height 3em
      overflow hidden
  & > .right
    flex 1
    display flex
    justify-content center
    align-items center
    .button
      button($main-color-2, $main-color-1)
</style>