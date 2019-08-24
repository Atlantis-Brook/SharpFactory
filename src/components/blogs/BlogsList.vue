<!--
  组件：BlogsList博客列表
  隶属：blogs博客页面
  路由：/blogs
-->
<template>
<div id="blogsList" class="module">
  <div class="container">
    <base-title v-bind="titleData" />
    <loadding :url="url" :params="params">
      <div class="content-box">
         <data-item v-bind="item" v-for="item of theData.rows" :key="item.id" :tab= "tab"/>
      </div>
      <mo-paging :total="theData.count" @change="change"/>
    </loadding>
  </div>
</div>
</template>

<script>
import { blogList } from '@/api'

import Title from '@/components/common/Title'
import DataItem from '@/components/common/DataItem'
import MoPaging from '@/components/common/MoPaging'
import Loadding from '@/components/common/Loadding'

export default {
  name: 'BlogsList',
  components: { BaseTitle: Title, DataItem, MoPaging, Loadding },
  data () {
    return {
      titleData: {
        mainTitle: 'OUR BLOGS',
        subTitle: '博客聚合',
        desc1: '记录',
        desc2: '是一种习惯'
      },
      url:blogList,
      tab:"blog",
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
#blogsList
  padding 100px 0
  border-radius 12px
</style>