<!--
  组件：AboutUs关于我们
  隶属：Home主页
  路由：/home
-->
<template>
<div id="aboutUs" class="container">
  <div class="left">
    <base-title v-bind="titleData" />
    <article class="content-box">
      <p class="title">{{ article.title }}</p>
      <span class="cut-line"></span>
      <div class="content">
        <p v-for="(item, index) of article.content" :key="index">{{ item }}</p>
      </div>
    </article>
    <router-link class="button" to="/about">MORE ABOUT US</router-link>
  </div>
  <div class="right">
    <div class="card">

    </div>
  </div>
</div>
</template>

<script>
import { aboutTitle, minAboutArticle } from '@/assets/js/data.js'
import Title from '@/components/common/Title'

export default {
  name: 'AboutUs',
  components: { BaseTitle: Title },
  data () {
    return {
      titleData: {
        mainTitle: aboutTitle.mainTitle,
        subTitle: aboutTitle.subTitle
      },
      article: minAboutArticle
    }
  }
}
</script>

<style lang="stylus">
#aboutUs
  padding 100px 0
  display flex
  & > .left
    flex 3
    text-align center
    & > article
      text-align left
      margin-right 50px
      .title
        font-size $l3-title-fsz
        line-height 1.5em
        width 360px
      .cut-line
        margin 40px 0
      .content > p
        margin-bottom 30px
        text-indent 2em
    & > .button
      button($main-color-2, $main-color-1, $main-bgcolor)
  & > .right
    flex 2
    display flex
    justify-content center
    align-items center
    & > .card
      width 312px
      height 350px
      wave-box($sub-bgcolor)
</style>
