<!--
  页面：Blogs博客聚合页面
  路由：/blogs
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
import { blogsPageInfo } from '@/assets/js/data.js'

import Header from '@/components/common/Header'
import PageInfo from '@/components/common/PageInfo'

import HeaderBgImg from '@/assets/images/headerbg-blogs.jpg'

export default {
  name: 'NewsPage',
  components: {
    BaseHeader: Header,
    PageInfo,
  },
  data () {
    return {
      headerData: {
        bgImgURL: HeaderBgImg,
        ...blogsPageInfo.slogan
      },
      pageInfo: {
        ...blogsPageInfo.info
      }
    }
  }
}
</script>

<style lang="stylus">

</style>