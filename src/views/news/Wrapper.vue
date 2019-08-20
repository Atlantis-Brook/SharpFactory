<!--
  页面：NewsWrapper新闻包装
  路由：/news
-->
<template>
<div>
  <base-header v-bind="headerData" />
  <main id="news">
    <page-info v-bind="pageInfo" />
    <router-view />
  </main>
</div>
</template>

<script>
import { newsPageInfo } from '@/assets/js/data.js'

import Header from '@/components/common/Header'
import PageInfo from '@/components/common/PageInfo'

import HeaderBgImg from '@/assets/images/headerbg-news.jpg'

export default {
  name: 'NewsWrapper',
  components: {
    BaseHeader: Header,
    PageInfo
  },
  data () {
    return {
      headerData: {
        bgImgURL: HeaderBgImg,
        ...newsPageInfo.slogan
      },
      pageInfo: {
        ...newsPageInfo.info
      }
    }
  }
}
</script>

<style lang="stylus">

</style>