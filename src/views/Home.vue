<!--
  页面：Home主页
  路由：/home
-->
<template>
<div>
  <base-header v-bind="headerData" />
  <main id="home">
    <get-start />
    <about-us />
    <our-progects />
    <our-advantages />
    <our-services />
    <our-blogs />
    <news-event />
    <message-board />
  </main>
</div>
</template>

<script>
import Header from '@/components/common/Header'
import GetStart from '@/components/home/GetStart'
import AboutUs from '@/components/home/AboutUs'
import OurProgects from '@/components/home/OurProgects'
import OurAdvantages from '@/components/home/OurAdvantages'
import OurServices from '@/components/home/OurServices'
import OurBlogs from '@/components/home/OurBlogs'
import NewsEvent from '@/components/home/NewsEvent'
import MessageBoard from '@/components/home/MessageBoard'

import HeaderBgImg from '@/assets/images/headerbg-home.jpg'

export default {
  name: 'HomePage',
  components: {
    BaseHeader: Header,
    GetStart,
    AboutUs,
    OurProgects,
    OurAdvantages,
    OurServices,
    OurBlogs,
    NewsEvent,
    MessageBoard
  },
  data () {
    return {
      headerData: {
        bgImgURL: HeaderBgImg,
        isHome: true
      }
    }
  }
}
</script>

<style lang="stylus">

</style>
