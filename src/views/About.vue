<!--
  页面：About关于我们页面
  路由：/about
-->
<template>
<div>
  <base-header v-bind="headerData" />
  <main id="about">
    <page-info v-bind="pageInfo" />
    <div class="temp module">
      <div class="container">
        关于我们 TODO
      </div>
    </div>
  </main>
</div>
</template>

<script>
import { aboutPageInfo } from '@/assets/js/data.js'

import Header from '@/components/common/Header'
import PageInfo from '@/components/common/PageInfo'

import HeaderBgImg from '@/assets/images/headerbg-about.jpg'

export default {
  name: 'AboutPage',
  components: {
    BaseHeader: Header,
    PageInfo
  },
  data () {
    return {
      headerData: {
        bgImgURL: HeaderBgImg,
        ...aboutPageInfo.slogan
      },
      pageInfo: {
        ...aboutPageInfo.info
      }
    }
  }
}
</script>

<style lang="stylus">
.temp
  padding 100px 0
  font-weight 700
  font-size 24px
</style>