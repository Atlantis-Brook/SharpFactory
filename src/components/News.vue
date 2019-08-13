<!-- 新闻组件 -->
<template>
   <div class="news">
       <div class='newsModule titleModule'>
            <div class="newsContent">
                <div class="newsEvents">
                    <span class="title">news & events</span>
                    <div class="path">首页 <span>></span>新闻事件</div>
                </div>
            </div>
        </div>
        <div class="newsModule ourModule">
            <div class="newsContent">
                <news-list :title="hotNews" :lists="hotNewsLists"></news-list>
            </div>
        </div>
        <div class="newsModule hackerModule">
            <div class="newsContent">
                <news-list :title="hackerNews" :lists="hackerNewsLists"></news-list>
            </div>
        </div>
        <!-- <div class="newsModule hackerModule">
            <div class="newsContent">
                <news-list :title="ourNews" :lists="hackerNewsLists"></news-list>
            </div>
        </div> -->
   </div>
</template>

<script>

import NewsList from '@/components/NewsList'
import Axios from 'axios';

export default {
   components: { "news-list":NewsList },
    data() {
       return {
           hotNewsLists:[],
           hackerNewsLists:[],
            hackerNews:{
                titleEn: "HACKER NEWS",
                titleCh: "黑客新闻"
            },
            hotNews:{
                titleEn: "HOT NEWS",
                titleCh: "热点新闻"
            },
            ourNews:{
                titleEn: "OUR NEWS",
                titleCh: "工作室新闻"
            }
       }
    },
    created(){
        function getHotNews() {
            return Axios.get('http://127.0.0.1:7001/news/hotNewsList/');
        }
        function getHackerNews() {
            return Axios.get('http://127.0.0.1:7001/news/hackerNewsList/');
        }
        Axios.all([getHotNews(),getHackerNews()]).then(
            Axios.spread((hotNews,hackerNews)=>{
                this.hotNewsLists = hotNews.data;
                this.hotNewsLists.id = "hotNewsList";
                this.hackerNewsLists = hackerNews.data;
                this.hackerNewsLists.id = "hackerNewsList";
            })
        )

    },
   methods: {
        newsList:function(url,currentPage,pageSize) {
            Axios.get(url,{
                params:{
                    currentPage:currentPage,
                    pageSize:pageSize
                }
            }).then()
        }
       
   },
}

</script>
<style scoped>

*{
    color: #162c5a;
    font-size: 14px;
    line-height: 1.5em;
    list-style: none;
}

.news{
    width: 100%;
}

/*
    新闻页面基础模块样式：标题模块，ourNews模块，hacker模块
*/
.newsModule{
    margin: 0 auto;
    width: 1200px;
    background-color: #fff;
}

/*
    具体模块样式
*/
.titleModule{
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}

.ourModule{
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}

.hackerModule{
    margin: 50px auto;
    border-radius: 20px;
}

/*
    模块内容样式
*/
.newsContent{
    width: 1104px;
    margin: 0 auto;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px; 
}

/*
    标题模块内容具体样式
*/
.newsEvents{
    width: 100%;
    height: 36px;
    position: relative;
    padding: 50px 0;
    border-bottom: 1px dashed #9a9a9a;
}

.newsEvents .title{
    position: absolute;
    left: 0;
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
}

.newsEvents .path{
    position: absolute;
    right: 0;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
}

.newsEvents .path>span{
    color: #9a9a9a;
}

</style>