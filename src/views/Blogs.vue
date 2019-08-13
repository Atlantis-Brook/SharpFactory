<template>
    <div class="blogs">
       <div class="our-blogs-module module">
          <div class="our-blogs">
              <div class="title">our blogs</div>
              <div class="path">首页<span> > </span>博客聚合</div>
          </div>
          <hr class="hr-title">
          <div class="serach-moudle">
              <div class="sreach-moudle-title">
               <h2 class="title">搜索博客</h2>
              </div>
                 <!--ToDo实现搜索功能-->
                <input class="search-box" type="text" placeholder="请输入关键字">
                 <input class="select-authon" type="text" placeholder="请选择作者">   
                 <button class="button search-btn">SEARCH</button>
          </div> 
       </div>
          <div class="blogs-list module">
              <div class="blogs-list-head">
              <div class="blogs-list-head-left">
                  <h1 class="our-blogs-list-title-eh">our blogs</h1>
                  <h2 class="our-blogs-list-title-ch">博客聚合</h2>
              </div>
              <div class="blogs-list-title-right">
                  <h1>记录</h1>
                  <h2>是一种习惯</h2>
              </div>
              </div>
              <div class="listContent">
              <ul>
                <li v-for="item of result.rows">
                    <div class="blogs-introduction">
                    <div class="listTime">
                         <p class="listTimeDay">{{item.day}}</p>
                         <p class="listTimeMinute">{{item.year}}.{{item.month}}</p>

                    </div>
                    <div class="listText">
                        <p class="textTitle">{{item.title}}</p>
                        <p class="textAuthon">{{item.user}}</p>
                        <p class="textContent">{{item.synopsis}}</p>
                    </div>
                        <a class="button"style="top:80px;right:50px;height:21px;width:58px" href="#/blogs/details/" @click="$store.commit('getBlogId',item.id)">DETAILS</a>
                    </div>
                </li>
            </ul>
            <mo-paging 
            :page-index="currentPage"
            :total="result.count"
            :page-size="pageSize"
            @change="pageChange">
            </mo-paging>
         </div>
          </div>          
     </div>
</template>
<script>
import Mopaging from '../components/MoPaging'
import Axios from 'axios';
export default {
    name:'Blog',
    components:{
       "mo-paging":Mopaging
    },
    data() {
       return {
           pageSize:3,
           currentPage:1,
           result:[]
       }
    },
    created(){
        Axios.get('http://127.0.0.1:7001/blog/list/').then(
            Response=>{
                this.result = Response.data;
            }).catch(
                err=>{
                    this.$router.push('/404');
                    console.error(err);
                })
    },
    methods:{
        pageChange (page) {
            this.currentPage = page;
            this.getBlog(page,3);
        },
        getBlog (currentPage,pageSize) {
            Axios.get('http://127.0.0.1:7001/blog/list/',{
                params:{
                    count: currentPage,
                    pageSize: pageSize
                }
            }).then(
                Response=>{
                    this.result = Response.data;
                }).catch(
                err=>{
                    this.$router.push('/404');
                    console.error(err);
                })
        }
    }

}

</script>

<style scoped>
/*基础模块样式*/
.our-blogs-module{
    margin: 0 auto;
    width: 1200px;
    background-color: #fff;
    padding-left:50px;
    padding-right: 50px;
}

/*标题模块内容具体样式*/
.our-blogs{
    display: flex;
    justify-content: space-between;
    
}
.our-blogs .title{
   margin: 50px 0;
   text-align: left;
   font-weight: 700;
   font-size: 24px;
}
.our-blogs .path{
    margin: 50px 0;
    font-size: 18px;
   text-align: right;
   font-weight: 700;
}
.our-blogs .path>span{
    color: #9a9a9a;
}
.hr-title{
    margin: 0px;
}

/* 搜索模块 */
.serach-moudle {
    display: grid;
    height: 70px;
    width: 1200px;
    padding: 40px 0;
    align-items: center;
    justify-items: center;
    grid-template-columns: 166px 2fr 1fr 166px;
    grid-template-rows: 70px;

}
.serach-moudle .title{
    font-weight: 700;
}
.search-box{
    display: block;
    background-color: #f1f1f1;
    padding: 0 20px;
    height: 40px;
    border-radius: 20px;
    width: 350px;
    align-self: center;
}
.select-authon{
    display: block;
    background-color: #f1f1f1;
    padding: 0 20px;
    height: 40px;
    border-radius: 20px;
    align-self: center;
}
.search-btn{
    padding-right: 46px;
    width: 100px;
}
/*博客列表页面*/
.blogs-list{
    padding-top: 100px;
    margin: auto;
    width: 1200px;
    background-color: #fff;
    padding-left:50px;
    padding-right: 50px;
}
.blogs-list-head{
    padding-bottom: 100px;
}
.blogs-list-head-left{
   float: left;
   text-align: left;
}

.our-blogs-list-title-eh{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}

.our-blogs-list-title-ch{
    font-size: 20px;
    font-weight: 700;
}

.blogs-list-title-right>h1{
    text-align: right;
    font-weight: 700;
}
.blogs-list-title-right>h2{
    text-align: right;
    font-weight: 700;
}
.list{
    padding-top: 100px;
}
.listTitle{
    padding-bottom: 70px;
    position: relative;
}

.listTitle .listTitleCon{
    display: inline-block;
}

.listTitle .listTitleCon .listTitleEn{
    font-size: 24px;
    font-weight: 700;
}

.listTitle .listTitleCon .listTitleCh{
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
}

.listTitle .listTitleHint{
    position: absolute;
    right: 0;
    top: 0;
}

.listTitle .listTitleHint>p{
    text-align: right;
    font-size: 18px;
    font-weight: 700;
}

.listContent{
    width: 100%;
    padding-bottom: 82px;
}

.listContent>ul{
    width: 100%;
    padding-bottom: 70px;
}

.listContent li{
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 166px;
    background-color: #f4f4f4;
    margin-bottom: 30px;
    position: relative;
}

.listContent li::after{
    content: '';
    background-image: radial-gradient(circle 24px at center , #f4f4f4 50%, transparent 0%);
    background-repeat: repeat-x;
    background-size: 24px;
    width: 100%;
    height: 24px;
    margin-top: -12px;
    position: absolute;
    top: 100%;
    left: 0;
}
.blogs-introduction{
    display: flex;
    justify-content: space-between;
}

.listContent li .listTime{
    text-align: center;
    margin: 40px 0 30px;
    width: 166px;
    height: 100px;
    border-right: 1px dashed #9a9a9a;
}
.listContent li .listTime .listTimeDay{
    margin-top: 19px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
}

.listContent li .listTime .listTimeMinute{
    font-size: 16px;
    color: #9a9a9a;
    margin-bottom: 20px;
}

.listContent li .listText{
    height: 100px;
    margin: 45px 0;
}

.listContent li .listText .textTitle{
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0px;
    padding-bottom: 10px;
}
.listContent li .listText .textAuthon{
    text-align: left;
    margin-bottom: 0px;
     color: #9a9a9a;
     padding-bottom: 5px;
}
.listContent li .listText .textContent{
    text-align: left;
    font-size: 14px;
    width: 700px;
    word-wrap:break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.listContent li .listInto{
    vertical-align: top;
    position: relative;
    display: inline-block;
    width: 250px;
    height: 166px;
}

.listContent li .listInto>button{
    background-color: #34d0d1; 
    top: 50%;
    left: 50px;
    margin-right: 100px;

}
.button::after {
  border-top-color: #f1f1f1;
}
.pageChange{
    width: 360px;
    margin: 0 auto;
}

.pageChange>button{
    width: 40px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    background-color: #fdd223;
    border-radius: 50%;
    border: none;
    cursor: pointer;
}

.pageChange>a{
    display: inline-block;
    width: 51px;
    text-align: center;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    position: relative;
}
.pageChange>a.active::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: #000;
    top: 20px;
    left: 18px;
}
</style> 