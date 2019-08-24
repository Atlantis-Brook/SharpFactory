<!--
  组件：OurBlogs博客聚合
  隶属：Home主页
  路由：/home
-->
<template>
<div id="ourBlogs">
  <div class="container">
    <base-title v-bind="titleData" />
    <!-- <div class="tip">
      <div class="Day">
        <div class="day">
          <h1 class="fsz-24">{item.day}</h1>
          <p>{item.year}.{item.month}</p>
        </div>
      </div>
      <div class="passage">
        <p class="fsz-18">{item.title}</p>
        <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">{item.synopsis}</p>
      </div>
      <div class="details">
        <a class="button" href="#/blogs/details/" @click="$store.commit('getBlogId',item.id)">DETAILS</a>
      </div>
    </div> -->
    <div class="content-box">
      <loadding :url="url">
        <data-item v-bind="item" v-for="item of theData.rows" :key="item.id" :tab= "tab"/>
      </loadding>
    </div>
    <router-link class="button" to="/blogs">MORE BLOGS</router-link>
  </div>
</div>
</template>

<script>
import { blogList } from '@/api'
import { blogsTitle } from '@/assets/js/data.js'

import Title from '@/components/common/Title'
import DataItem from '@/components/common/DataItem'
import Loadding from '@/components/common/Loadding'

export default {
  name: 'OurBlogs',
  components: { BaseTitle: Title, DataItem, Loadding },
  data () {
    return {
      titleData: blogsTitle,
      url: blogList,
      tab:"blog",
      theData: { rows: [] }
    }
  }
}
</script>

<style lang="stylus">
#ourBlogs
  padding 100px 0
  text-align center
  .button
    button(, , $main-bgcolor)
</style>