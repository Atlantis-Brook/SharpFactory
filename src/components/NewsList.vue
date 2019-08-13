<!-- News 的 list 组件 -->
<template>
   <div class="list">
       <div class="listTitle">
            <div class="listTitleCon">
                <p class="listTitleEn">{{title.titleEn}}</p>
                <p class="listTitleCh">{{title.titleCh}}</p>
            </div>
            <div class="listTitleHint">
                <p>新闻随时更新</p>
                <p>请关注</p>
            </div>
        </div>
        <div class="listContent">
            <ul>
                <li v-for="item of list.rows">
                    <div class="listTime">
                        <div>
                            <p class="listTimeDay">{{item.day}}</p>
                            <p class="listTimeMinute">{{item.year}}.{{item.month}}</p>
                        </div>
                    </div>
                    <div class="listText">
                        <div>
                        <p class="textTitle">{{item.title}}</p>
                        <p class="textContent" style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;" >{{item.synopsis}}</p>
                        </div>
                    </div>
                        <a class="button" :href="geturl(item.url)" target="_blank" style="left:50px;">DETAILS</a>
                </li>
            </ul>
            <mo-paging 
            :page-index="currentPage"
            :total="list.count"
            :page-size="pageSize"
            @change="pageChange">
            </mo-paging>
        </div>
   </div>
</template>

<script>
import Mopaging from './MoPaging'
import Axios from 'axios'
export default {
   components: {
       "mo-paging":Mopaging
   },
    props: {
        title:{},
        lists:{}
    },
       data() {
        return {
            pageSize:3,
            currentPage:1,
            list: this.lists,
        };
    },
    watch:{
        lists: function(newVal,oldVal){
            this.list = newVal;
        },

    },
    methods: {
       geturl:function(val){
           return val;
       },
        pageChange (page) {
            this.currentPage = page;
            this.getBlog(page,3);
        },
        getBlog (currentPage,pageSize) {
            Axios.get('http://127.0.0.1:7001/news/'+this.list.id,{
                params:{
                    count: currentPage,
                    pageSize: pageSize
                }
            }).then(
                Response=>{
                    let listId = this.list.id;
                    this.list = Response.data;
                    this.list.id = listId;
                }).catch(
                    err=>{
                        this.$router.push('/404');
                        console.error(err);
                    })
        }
   },

}

</script>
<style scoped>

*{
    list-style: none;
}

.list{
    padding-top: 100px;
}
.listTitle{
    padding-bottom: 70px;
    position: relative;
    height: 126px;
}

.listTitle .listTitleCon{
    display: inline-block;
    position: absolute;
    left: 0;
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


.listContent li .listTime{
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin: 0 auto;
    width: 166px;
    height: 100px;
    border-right: 1px dashed #9a9a9a;
}

.listContent li .listTime>div{
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.listContent li .listTime .listTimeDay{
    font-size: 24px;
    font-weight: 700;
}

.listContent li .listTime .listTimeMinute{
    font-size: 16px;
    color: #9a9a9a;
}

.listContent li .listText{
    width: 700px;
    height: 100%;
    position: relative;
    padding-left: 36px;
    vertical-align: middle;
    display: inline-block;
}

.listContent li .listText>div{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.listContent li .listText .textTitle{
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 18px;
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
    background-color: #34d0d1;
    border-radius: 50%;
    border: none;
}

.pageChange>a{
    display: inline-block;
    width: 51px;
    text-align: center;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
}

</style>