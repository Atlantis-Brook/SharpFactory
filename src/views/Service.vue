<!--
  页面：Service为您服务页面
  路由：/service
-->
<template>
<div>
  <base-header v-bind="headerData" />
  <main id="service">
    <page-info v-bind="pageInfo" />
    <our />
    <you />
  </main>
</div>
</template>

<script>
import { servicePageInfo } from '@/assets/js/data.js'

import Header from '@/components/common/Header'
import PageInfo from '@/components/common/PageInfo'
import Our from '@/components/service/Our'
import You from '@/components/service/You'

import HeaderBgImg from '@/assets/images/headerbg-service.jpg'

export default {
  name: 'AboutPage',
  components: {
    BaseHeader: Header,
    PageInfo,
    Our,
    You
  },
  data () {
    return {
      headerData: {
        bgImgURL: HeaderBgImg,
        ...servicePageInfo.slogan
      },
      pageInfo: servicePageInfo.info
    }
  }
}
</script>

<style lang="stylus">
</style>