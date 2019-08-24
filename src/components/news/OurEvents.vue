<!--
  组件：OurEvents工作室事件
  隶属：news新闻页面
  路由：/news
-->
<template>
<div id="ourEvents" class="module">
  <div class="container">
    <base-title v-bind="titleData" />
    <loadding :url="url" :params="params">
      <div class="content-box">
         <data-item v-bind="item" v-for="item of theData.rows" :key="item.id" :tab="tab" />
      </div>
      <mo-paging :total="theData.count" @change="change"/>
    </loadding>
  </div>
</div>
</template>

<script>
import { eventsTitle } from '@/assets/js/data.js'
import { ourNewsList } from '@/api'

import Title from '@/components/common/Title'
import DataItem from '@/components/common/DataItem'
import MoPaging from '@/components/common/MoPaging'
import Loadding from '@/components/common/Loadding'

export default {
  name: 'ourEvents',
  components: { BaseTitle: Title, DataItem, MoPaging, Loadding },
  data () {
    return {
      titleData: eventsTitle,
      url:ourNewsList,
      tab:"ourNews",
      params:{
        pageSize:5,
        count:1
      },
      theData:{},
    }
  },
  watch:{
    theData(newValue,oldValue){
      this.theData = newValue;
    },
    params(newValue,oldValue){
      this.params = newValue;
    }
  },
  methods:{
    change(data){
      this.params.count = data;
    }
  }
}
</script>

<style lang="stylus">
#ourEvents
  padding 100px 0
  border-radius 0 0 12px 12px
</style>