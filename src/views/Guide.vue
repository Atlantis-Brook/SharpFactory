<!--
  页面：guide网址导航页面
  路由：/guide
-->
<template>
<div>
  <base-header v-bind="headerData" />
  <main id="guide">
    <page-info v-bind="pageInfo" />
    <div class="temp module">
      <div class="container">
        网址导航 TODO
      </div>
    </div>
  </main>
</div>
</template>

<script>
import { guidePageInfo } from '@/assets/js/data.js'

import Header from '@/components/common/Header'
import PageInfo from '@/components/common/PageInfo'

import HeaderBgImg from '@/assets/images/headerbg-guide.jpg'

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
        ...guidePageInfo.slogan
      },
      pageInfo: guidePageInfo.info
    }
  }
}
</script>

<style lang="stylus">
.temp
  padding 100px 0
  font-weight 700
  font-size 24px
  border-radius 0 0 12px 12px
</style>