<!--
  组件：ServiceOur服务/我们
  隶属：service服务页面
  路由：/service
-->
<template>
<div id="serviceOur" class="module">
  <div class="container">
    <section>
      <base-title v-bind="titleData1" />
      <div class="content-box">
        <div class="services" v-for="(service, index) of services" :key="index">
          <div class="circle">
            <i class="iconfont" :class="service.iconName"></i>
          </div>
          <h4>{{ service.title }}</h4>
          <span class="cut-line"></span>
          <div class="key-word">
            <p v-for="(word, idx) of service.keyWord" :key="idx">{{ word }}</p>
          </div>
        </div>
      </div>
    </section>
    <hr>
    <section>
      <base-title v-bind="titleData2" />
      <div class="content-box">
        <div class="slogan" v-for="(slogan, index) of slogans" :key="index">
          <div class="circle">{{ index + 1 }}</div>
          <p>{{ slogan }}</p>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import { ServiceOurTitle, services, slogans } from '@/assets/js/data.js'

import Title from '@/components/common/Title'

export default {
  name: 'ServiceOur',
  components: { BaseTitle: Title },
  data () {
    return {
      titleData1: ServiceOurTitle[0],
      titleData2: ServiceOurTitle[1],
      services,
      slogans
    }
  }
}
</script>

<style lang="stylus">
#serviceOur
  border-radius 0 0 12px 12px
  section
    padding 100px 0
  .content-box
    display flex
    justify-content space-between
    text-align center
    margin-bottom 0
    & > .services
      width 288px
      .circle
        width: 115px
        height: 115px
        margin 0 auto
        display flex
        justify-content center
        align-items center
        & > i.iconfont
          font-size 80px
          transition font-size .2s
        &:hover > i.iconfont
          transform scale(1.1)
          transition font-size .2s
      h4
        font-size $l4-title-fsz
      .cut-line
        margin 20px 0
    & > .slogan
      font-weight 700
      margin 0 20px
      flex 1
      .circle
        display inline-block
        width 56px
        height 56px
        border-radius 50%
        background-color $main-color-2
        line-height 56px
        font-size 28px
        color $sub-bgcolor
        margin-bottom 20px
        &:hover
          transform scale(1.1)
          transition transform .2s

</style>