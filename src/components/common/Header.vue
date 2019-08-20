<!--
  组件：Header头部
  隶属：Common公用
-->
<template>
<header id="header" :style="style">
  <div class="container">
    <div class="top-bar">
      <router-link to="/home" title="SharpFactory">
        <img :src="LogoImg" class="logo" alt="SharpFactory-LOGO">
      </router-link>
      <nav>
        <li v-for="(item, index) of topNavData" :key="index">
          <router-link :to="item.path" v-html="item.text"></router-link>
        </li>
      </nav>
      <a href="#" class="login-button">登录</a>
    </div>
    <div class="slogan">
      <h1>{{ slogan1 }}<br />{{ slogan2 }}</h1>
    </div>
  </div>
</header>
</template>

<script>
import LogoImg from '@/assets/images/logo.png'
import { topNav } from '@/assets/js/data.js'

export default {
  name: 'BaseHeader',
  props: {
    slogan1: {
      type: String,
      default: ''
    },
    slogan2: {
      type: String,
      default: ''
    },
    bgImgURL: {
      type: String,
      required: true
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      LogoImg,
      topNavData: topNav,
      style: {
        height: '450px',
        backgroundImage: `url(${this.bgImgURL})`
      }
    }
  },
  created () {
    if (this.isHome) this.style.height = '650px'
  }
}
</script>

<style lang="stylus">
header#header
  background-color $font-color
  background-repeat repeat-x
  background-position center
  // background-size contain 100%
  position relative
  &::before
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, .5)
  .container
    position relative
    z-index 1
  .top-bar
    padding-top 36px
    height 50px
    display flex
    align-items center
    justify-content space-between
    .logo
      height 50px
    nav
      width 650px
      display flex
      justify-content space-between
      a
        font-size 18px
        color #fff
        position relative
        &:hover::before,
        &.router-link-active::before
          content ''
          position absolute
          top 25px
          width 100%
          height 0.25em
          background linear-gradient(135deg, transparent, transparent 40%, #fff, transparent 60%, transparent 100%), linear-gradient(45deg, transparent, transparent 40%, #fff, transparent 60%, transparent 100%)
          background-size .5em .5em
          background-repeat repeat-x
    .login-button
      button(rgba(255, 255, 255, .1), rgba(255, 255, 255, .6), #333, $sub-bgcolor)
      color $sub-bgcolor
      font-weight 400
  .slogan
    text-align center
    margin-top 100px
    & > h1
      color $sub-bgcolor
      font-weight 400
      font-size $title-fsz
      line-height 2em
</style>
