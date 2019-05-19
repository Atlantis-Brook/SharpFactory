<template>
    <div class="warpper moudle">
        <div class="details module">
            <div class="head">
                <div class="title">news&event</div>
                <div class="path">首页 <span>></span> 新闻事件 <span>></span> 新闻详情</div>
            </div>
            <hr class="hr">
            <div class="new-title-moudle">
                <div class="new-title">
                    {{blogDetails.title}}
                </div>
                <div class="new-time">
                     {{blogDetails.time}}
                </div>                  
            </div>
            <div class="line">
            </div>
            <div class="new-details-moudle" v-html = 'blogDetails.details' >
                
            </div>
            <hr class="hr">
             <div class="pageChange">
               <div class="pageLeft"> <button><</button></div>
              <div class="page-p"><div>上一个页面</div>
               <div>下一个页面 </div></div>
               <div class="pageRight"><button>></button></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            blogDetails:{
                title:'标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
                time:'2019.5.12',
                details:'<p>内容内容内容内容内容内容内容内容内容内容内容内容 内容内容内容内容内容内容内容内容内容内容内容内容<p><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容<p><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容<p><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容<p><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容<p><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容<p>'
             } 
        }
    }
    
}
</script>

<style scoped>
.details{
    margin: 0 auto;
    width: 1200px;
    background-color: #fff;
    padding-left:48px;
    padding-right: 48px;

}
/* 头部模块 */
.head{
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
}
.title{
    font-size: 24px;   
    font-weight: 700;
}
.head .path{
    font-size: 18px;  
    font-weight: 700;
}
.head .path>span{
    color: #9a9a9a;
}
.hr{
    margin: 0;
}
/* 博客详细内容 */
 .new-title-moudle{ 
    padding-top: 100px;
    display: flex;
    justify-content:space-between; 
}
.new-title{
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    width: 480px;
    text-overflow: ellipsis;
}
.new-time{
    font-size: 16;
    color: #9a9a9a;
    text-align: right;
    margin-bottom: 0px;
    line-height: 55px;
}
.line{
     padding: 0;
    margin: 36px 0;
    width: 46px;
    border-top: 6px solid #ffd223;
    text-align: left;
}
.new-details-moudle{
    text-align: left;
    padding-bottom: 100px;
    text-overflow: ellipsis;
}
.new-details-moudle>p{
    margin-bottom: 28px;
}
/* 页面改变 */
.pageChange{
    display: flex;
    justify-content: space-between;
    padding-top: 70px;
    padding-bottom: 100px;
    margin: 0;
}

    .pageLeft>button{
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
.pageLeft>a{
    display: inline-block;
    width: 51px;
    text-align: center;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    position: relative;
}
.pageLeft>a.active::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: #000;
    top: 20px;
    left: 18px;
}
.pageLeft{
    text-align: left;
}
 .pageRight>button{
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
.pageRight>a{
    display: inline-block;
    width: 51px;
    text-align: center;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    position: relative;
}
.pageRight>a.active::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: #000;
    top: 20px;
    left: 18px;
}
.pageRight{
    text-align: right;
}
.page-p{
    display: flex;
    justify-content: space-between;
    width: 1024px;
    margin:0 20px;

}
.page-p>div{
     font-weight: 700;
     line-height: 40px;
}

</style>
