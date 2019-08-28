<!--
  组件：OurProgects项目展示
  隶属：Home主页
  路由：/home
-->
<template>
<div id="ourProgects">
  <div class="container">
    <base-title v-bind="titleData" />
    <div class="projects content-box">
      <div class="project" v-for="(project, index) of projects" :key="index">
        <div class="top">
          <!-- <img :src="project.imgsrc" :alt="project.title"> -->
        </div>
        <div class="bottom">
          <div class="left">
            <p class="title">{{ project.title }}</p>
            <p>{{ project.date }}</p>
          </div>
          <div class="right">
            <span title="查看详情">&gt;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="button">MORE PROJECT</div>
  </div>
</div>
</template>

<script>
import Title from '@/components/common/Title'
import pic404 from '@/assets/images/pic_404.png'
import { progectsTitle } from '@/assets/js/data.js'

export default {
  name: 'OurProgects',
  components: { BaseTitle: Title },
  data () {
    return {
      titleData: progectsTitle,
      projects: [
        { title: 'Sharpfactory官网', date: '2019年4月', imgsrc: pic404 },
        { title: '智能线上编译系统', date: '2019年9月', imgsrc: pic404 },
        { title: '校园+', date: '2019年9月', imgsrc: pic404 }
      ]
    }
  }
}
</script>

<style lang="stylus">
#ourProgects
  background-color $sub-bgcolor
  padding 100px 0
  text-align center
  .projects
    display flex
    justify-content space-between
    & > .project
      width 288px
      & > .top
        height 216px
        border-radius 12px
        background-color $main-color-2
        margin-bottom 14px
        box-sizing border-box
        padding 30px 25px
        img
          width 100%
          height 100%
      & > .bottom
        wave-box($main-color-2)
        box-sizing border-box
        padding 30px 25px;
        display flex
        & > .left
          text-align left
          flex 3
        & > .right
          flex 1
          display flex
          justify-content center
          align-items center
          span
            change-pages-btn(, $main-color-2)
            &:hover
              position relative
              right -1px
        .title
          font-weight 700
          font-size $l3-title-fsz
          margin-bottom 14px
  .button
    button()
</style>
