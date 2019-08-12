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
            <span class="blogTitle">{{result.title}}</span>
            <span style="font-size:2px;position:absolute;top:50px;color:#9a9a9a">访问：{{result.visits}}</span>
            <span class="blogTime">{{result.user}}</span><br/>
            <span class="blogTime">{{result.year}}.{{result.month}}.{{result.day}}</span>
          </div>
          <div class="mark"></div>
          <article v-html="result.html">
          </article>
        </div>
        <footer>
          <div class="upPagerBox">
          </div>
          <div class="nextPagerBox">
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
          result:[]
      };
    },
    created(){
      Axios.get('http://127.0.0.1:7001/blog/detail/',{
        params:{
          id:this.$store.getters.id
        }
      }).then(
        Response=>{
          this.result = Response.data.blog[0];
 
        }
      )
    }
}
</script>
<style scoped>
*{
  font-weight: 700;
}
article  pre{
  display: block;
  overflow: auto;
  background: #f4f4f4;
  padding: 5px 10px;
  border: 1px solid #eee;word-wrap:break-word; 
  white-space: pre-wrap; 
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
 pre {
  display: block;
  overflow: auto;
  background: #f4f4f4;
  padding: 5px 10px;
  border: 1px solid #eee;word-wrap:break-word; 
  white-space: pre-wrap; 
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