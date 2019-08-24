<!--
  组件：ServiceYou服务/你
  隶属：service服务页面
  路由：/service
-->
<template>
<div id="serviceYou" class="module">
  <div class="container">
    <section>
      <base-title v-bind="titleData1" />
      <div class="content-box">
        <div class="process" v-for="(process, index) of processes" :key="index">
          <div class="index">0{{ index + 1 }}</div>
          <div class="text">
            <p>{{ process.text }}</p>
            <p>{{ process.en }}</p>
          </div>
          <div class="icon">
            <i class="iconfont" :class="process.iconName"></i>
          </div>
        </div>
      </div>
    </section>
    <hr>
    <section>
      <base-title v-bind="titleData2" />
      <div class="content-box">
        <div class="do" v-for="(item, index) of youCanDo" :key="index">
          <div class="title">
            <h4>{{ item.mainTitle }}</h4>
            <p>{{ item.subTitle1 }}</p>
            <p>{{ item.subTitle2 }}</p>
          </div>
          <a class="button" :href="item.to">{{ item.btn }}</a>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import { ServiceYouTitle, youCanDo, processes } from '@/assets/js/data.js'

import Title from '@/components/common/Title'

export default {
  name: 'ServiceYou',
  components: { BaseTitle: Title },
  data () {
    return {
      titleData1: ServiceYouTitle[0],
      titleData2: ServiceYouTitle[1],
      youCanDo,
      processes
    }
  }
}
</script>

<style lang="stylus">
#serviceYou
  section
    padding 100px 0
  .content-box
    display flex
    justify-content space-between
    flex-wrap: wrap
    margin-bottom 0
    .process
      width 288px
      background-color $main-bgcolor
      border-radius 12px
      padding 20px
      margin-top 20px
      display grid
      grid-template-rows 1fr 70px
      grid-template-areas "index icon" "text icon"
      & > .index
        grid-area: index
        color $main-color-2
        font-size 24px
        font-weight 700
        display flex
        align-items center
      & > .text
        grid-area: text
        display flex
        flex-direction column
        justify-content center
        & > p:first-child
          font-weight 700
      & > .icon
        grid-area: icon
        display flex
        justify-content center
        align-items center
        .iconfont
          font-size 50px
          color $main-color-2
    .do
      width 288px
      text-align center
      .title
        margin-bottom 70px
        & > h4
          font-size $l3-title-fsz
          margin-bottom 20px
        & > p:first-of-type
          font-size $l4-title-fsz
          position relative
          left -30px
          margin-bottom 10px
        & > p:last-of-type
          font-size $l4-title-fsz
          position relative
          right -30px
      .button
        button()
</style>