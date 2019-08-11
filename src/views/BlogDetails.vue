<template>
    <div class="blogDetails">
      <div class="blogMiddle">
        <div class="blogHint">
          <span class="blogHintLeft">BLOG</span>
          <span class="blogHintRight">
            首页<span style="color:#9a9a9a"> > </span>博客聚合<span style="color:#9a9a9a"> > </span>详情
          </span>
        </div>
        <div class="blogContent">
          <div class="blogTitleMes">
            <span class="blogTitle">博客标题</span>
            <span style="font-size:2px;position:absolute;top:50px;color:#9a9a9a">访问：{{details.visits}}</span>
            <span class="blogTime">{{details.user}}</span><br/>
            <span class="blogTime">{{details.year}}.{{detils.month}}.{{details.day}}</span>
          </div>
          <div class="mark"></div>
          <article>
            this is article!
            asdasda
            asdasdaasda
            sd
            asd
            ads
            asd
            asd
            asd
            asd
            asdasdasdjkl
            asdasdakldjaslkd
            asdasdadsaf
            asdasdas
            this is article!
            asdasda
            asdasdaasda
            sd
            asd
            ads
            asd
            asd
            asd
            asd
            asdasdasdjkl
            asdasdakldjaslkd
            asdasdadsaf
            asdasdasthis is article!
            asdasda
            asdasdaasda
            sd
            asd
            ads
            asd
            asd
            asd
            asd
            asdasdasdjkl
            asdasdakldjaslkd
            asdasdadsaf
            asdasdasthis is article!
            asdasda
            asdasdaasda
            sd
            asd
            ads
            asd
            asd
            asd
            asd
            asdasdasdjkl
            asdasdakldjaslkd
            asdasdadsaf
            asdasdasthis is article!
            asdasda
            asdasdaasda
            sd
            asd
            ads
            asd
            asd
            asd
            asd
            asdasdasdjkl
            asdasdakldjaslkd
            asdasdadsaf
            asdasdasthis is article!
            asdasda
            asdasdaasda
            sd
            asd
            ads
            asd
            asd
            asd
            asd
            asdasdasdjkl
            asdasdakldjaslkd
            asdasdadsaf
            asdasdasthis is article!
            asdasda
            asdasdaasda
            sd
            asd
            ads
            asd
            asd
            asd
            asd
            asdasdasdjkl
            asdasdakldjaslkd
            asdasdadsaf
            asdasdasthis is article!
            asdasda
            asdasdaasda
            sd
            asd
            ads
            asd
            asd
            asd
            asd
            asdasdasdjkl
            asdasdakldjaslkd
            asdasdadsaf
            asdasdas
          </article>
        </div>
        <footer>
          <div class="upPagerBox">
            <a href="#" class="upPager changePager"><</a>
            <a href="#" class="cMes" style="margin-left: 20px;">上一条</a>
          </div>
          <div class="nextPagerBox">
            <a href="#" class="cMes" style="margin-right: 20px;">下一条</a>
            <a href="#" class="nextPager changePager">></a>
          </div>
        </footer>
      </div>
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    name: "blogDetails",
    data () {
      return {
          details:[]
      };
    },
    created(){
      Axios.get('http://127.0.0.1:7001/blog/detail/',{
        params:{
          id:$store.getters.id
        }
      }).then(
        Response=>{
          this.details = Response.data;
          console.log(Response.data);
        }
      )
    }
}
</script>
<style scoped>
*{
  font-weight: 700;
}

.blogDetails{
  width: 1200px;
  margin: 0 auto 20px;
  background: #fff;
  border-radius: 20px;
}

.blogDetails .blogMiddle{
  width: 1104px;
  margin: 0 auto;
}

.blogDetails .blogHint{
  width: 100%;
  height: 36px;
  padding: 50px 0;
  position: relative;
}

.blogDetails .blogHintLeft{
  position: absolute;
  font-size: 20px;
  left: 0;
}

.blogDetails .blogHintRight{
  position: absolute;
  font-size: 18px;
  right: 0;
}

.blogDetails .blogContent{
  border-top: 1px dashed #9a9a9a;
  border-bottom: 1px dashed #9a9a9a;

}

.blogDetails .blogTitleMes{
  position: relative;
  width: 100%;
  height: 72px;
  margin-top: 100px;
}

.blogDetails .blogTitleMes .blogTitle{
  position: absolute;
  font-size: 24px;
  left: 0;
  
}

.blogDetails .blogTitleMes .blogTime{
  position: absolute;
  font-size: 16px;
  color: #9a9a9a;
  right: 0;
}

.blogDetails .mark{
  margin-top: 36px;
  width: 46px;
  height: 6px;
  background-color: pink;
}

.blogDetails article{
  margin-top: 36px;
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  padding-bottom: 100px;
}

.blogDetails footer{
  padding: 50px 0 100px;
  position: relative;
  height: 38px;
}

.blogDetails footer .cMes{
  font-weight: normal;
}

.blogDetails footer .upPagerBox{
  display: inline-block;
  height: 38px;
  position: absolute;
  left: 0;
}

.blogDetails footer .nextPagerBox{
  display: inline-block;
  position: absolute;
  right: 0;
}

.blogDetails footer .changePager{
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #ffd223;
  text-align: center;
  line-height: 36px;
}
</style>