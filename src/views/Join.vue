<!--
  页面：Join加入我们页面
  路由：/join
-->
<template>
<div>
  <base-header v-bind="headerData" />
  <main id="join">
    <page-info v-bind="pageInfo" />
    <div class="module">
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

import HeaderBgImg from '@/assets/images/headerbg-service.jpg'

export default {
  name: 'JoinPage',
  components: { BaseHeader: Header, PageInfo },
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

</style>