<!--
  页面：Service为您服务页面
  路由：/service
-->
<template>
<div>
  <base-header v-bind="headerData" />
  <main id="service">
    <page-info v-bind="pageInfo" />
    <div class="temp module">
      <div class="container">
        为您服务 TODO
      </div>
    </div>
  </main>
</div>
</template>

<script>
import { servicePageInfo } from '@/assets/js/data.js'

import Header from '@/components/common/Header'
import PageInfo from '@/components/common/PageInfo'

import HeaderBgImg from '@/assets/images/headerbg-service.jpg'

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
        ...servicePageInfo.slogan
      },
      pageInfo: {
        ...servicePageInfo.info
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