<!--
  组件：MessageBoard留言板
  隶属：Home主页
  路由：/home
-->
<template>
<div id="messageBoard">
  <div class="container">
    <base-title v-bind="titleData" />
    <div class="content-box">
      <div class="left">
        <div class="input-form">
          <input class="text-input name-input" type="text" placeholder="称呼" /> 
          <input class="text-input email-input" type="text" placeholder="邮箱" />
          <textarea class="text-input message-input" placeholder="留言" />
          <p>
            <input class="checkbox" id="checkbox" type="checkbox" />
            <label for="checkbox"></label>
            <span>我已阅读并同意<a href="#">《隐私政策》</a>。</span>
          </p>
        </div>
        <div class="button">SEND MESSAGE</div>
      </div>
      <div class="right">
        <div class="address-card">
          <i class="iconfont icon-youxiang"></i>
          <hr />
          <div class="our-email">{{ ourInfo.email }}</div> 
          <hr />
          <div class="our-address">{{ ourInfo.address }}</div> 
        </div>
      </div>
    </div>  
  </div>
</div>
</template>

<script>
import { contactTitle, ourInfo } from '@/assets/js/data.js'
import Title from '@/components/common/Title'

export default {
  name: 'MessageBoard',
  components: { BaseTitle: Title },
  data () {
    return {
      titleData: contactTitle,
      ourInfo
    }
  }
}
</script>

<style lang="stylus">
#messageBoard
  background-color $main-color-2
  padding 100px 0
  .content-box
    display flex
    & > .left
      flex 1
      text-align center
      .input-form
        text-align left
      .text-input
        display block
        border-radius 12px
        margin-bottom 24px
        padding 8px 15px
        &.name-input
          width 200px
        &.email-input
          width 300px
        &.message-input
          width 450px
          height 120px
      p
        color $sub-bgcolor
      .checkbox
        display none
        & + label
          display inline-block
          cursor pointer
          padding 4px
          border 2px solid $sub-bgcolor
          border-radius 4px
          transition all 0.1s ease-in
        &:checked + label
          background-color $sub-bgcolor
      .button
        margin-top 46px
        button(, , $main-color-2)
    & > .right
      flex 1
      display flex
      justify-content center
      .address-card
        text-align center
        wave-box($sub-bgcolor)
        width 200px
        height 238px
        padding 60px 44px 0
        hr
          margin 20px 0
        i.iconfont
          font-size 30px
          color $placeholder-color
        .our-email
          font-size $l3-title-fsz
          font-weight 700
          margin 20px 0
        .our-address
          color $placeholder-color
</style>
