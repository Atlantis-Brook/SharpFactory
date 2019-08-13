<template>
  <div class="middle">
    <div class="middle1">
      <div class="wave-border">

      </div>
      <div class="about-us">
        <div class="left">
          <h1 class="fsz-24">ABOUT US</h1>
          <h2 class="fsz-20">关于我们</h2>
          <p class="fsz-24">Sharpfactory<br>工作室概要</p>
          <div class="cut-line"></div>
          <p class="p1">&#12288&#12288工作室成立于2016年，旨在聚集大学生计算机网络和软件开发爱好者，进行合作学习、钻研和相关产品开发活动的非盈利性组织。</p>
          <p class="p2">&#12288&#12288工作室人员主要由贵州大学等高校大学生组成，每年面向贵阳各高校招收人才。</p>
          <p class="p3">&#12288&#12288工作室招新无技术门槛要求，由工作室成员组织进行前期技术培训和相关知识补充，以便于后期的学习和实战开发工作。</p>
          <div class="button">MORE ABOUT US</div>
        </div>
        <div class="right">
          <div class="wave-border">

          </div>
        </div>
      </div>
    </div>
    <div class="middle2">
      <div class="title">
        <div class="left">
          <h1 class="fsz-24">OUR PROJECTS</h1>
          <h2 class="fsz-20">项目展示</h2>
        </div>
        <div class="right">
          <p class="fsz-18">积累经验<br>在努力中不断成长</p>
        </div>
      </div>
      <div class="project">
        <div class="project1">
          <div class="top">

          </div>
          <div class="wave-border">
            <div class="left">
              <p class="fsz-18">Sharpfactory官网</p>
              <p>2019年4月</p>
            </div>
            <div class="right">
              <div class="change-pages-right">></div>
            </div>
          </div>
        </div>
        <div class="project2">
          <div class="top">

          </div>
          <div class="wave-border">
            <div class="left">
              <p class="fsz-18">智能线上编译系统</p>
              <p>2019年9月</p>
            </div>
            <div class="right">
              <div class="change-pages-right">></div>
            </div>
          </div>
        </div>
        <div class="project3">
          <div class="top">

          </div>
          <div class="wave-border">
            <div class="left">
              <p class="fsz-18">校园+</p>
              <p>2019年9月</p>
            </div>
            <div class="right">
              <div class="change-pages-right">></div>
            </div>
          </div>
        </div>
      </div>
      <div class="button">MORE PROJECT</div>
    </div>
    <div class="middle3">
      <div class="top">
        <div class="bgc"></div>
        <div class="img">
          <div class="column1">
            <div class="circle"></div>
            <h1 class="fsz-24">专注</h1>
            <div class="cut-line"></div>
            <p>专业的团队为您提供专业的服务，我们始终相信<br>只有专注才能成就杰出</p>
          </div>
          <div class="column2">
            <div class="circle"></div>
            <h1 class="fsz-24">创新</h1>
            <div class="cut-line"></div>
            <p>我们融合创新理念和前沿技术，量身定制高质量<br>的设计方案，让您在竞争中脱颖而出</p>
          </div>
          <div class="column3">
            <div class="circle"></div>
            <h1 class="fsz-24">品质</h1>
            <div class="cut-line"></div>
            <p>无论是整体的框架，还是局部的细节，您都能感<br>受到我们对于品质的追求</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="title">
          <div class="left">
            <h1 class="fsz-24">OUR SERVICES</h1>
            <h2 class="fsz-20">为您服务</h2>
          </div>
          <div class="right">
            <p class="fsz-18">提供高质量 高效率<br>高性价比的服务</p>
          </div>
        </div>
        <img src="../assets/images/mobile-devices-2017978.svg" alt="">
        <div class="wave-border">
          <div class="left">
            <div class="change-pages-left"><</div>
          </div>
          <div class="middle">
            <h2 class="fsz-20">创意网站建设</h2>
            <hr>
            <p>针对企业言网、品牌网站全案、电子商务网站、行业门户网站等，提供完美解决方案。UI设计、前端编写、后端实现、服<br>务器部署上线以及网站后期维护全权负责。给您高质量、高效率、高性价比的服务。</p>
          </div>
          <div class="right">
            <div class="change-pages-right">></div>
          </div>
        </div>
        <div class="button">LEARN MORE</div>
      </div>
    </div>
    <div class="middle4">
      <div class="title">
        <div class="left">
          <h1 class="fsz-24">OUR BLOGS</h1>
          <h2 class="fsz-20">博客聚合</h2>
        </div>
        <div class="right">
          <p class="fsz-18">记录<br>是一种习惯</p>
        </div>
      </div>
      <div class="tip" v-for="item of result.blog">
        <div class="Day">
          <div class="day">
            <h1 class="fsz-24">{{item.day}}</h1>
            <p>{{item.year}}.{{item.month}}</p>
          </div>
        </div>
        <div class="passage">
          <p class="fsz-18">{{item.title}}</p>
          <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">{{item.synopsis}}</p>
        </div>
        <div class="details"><!-- 细节、详细资料 <-->
          <a class="button" href="#/blogs/details/" @click="$store.commit('getBlogId',item.id)">DETAILS</a>
        </div>
      </div>
      <a class="button" href="#/blogs">MORE BLOGS</a>
    </div>
    <div class="middle5">
      <div class="title">
        <div class="left">
          <h1 class="fsz-24">NEWS & EVENTS</h1>
          <h2 class="fsz-20">新闻与事件</h2>
        </div>
        <div class="right">
          <p class="fsz-18">新闻随时更新<br>请关注</p>
        </div>
      </div>
      <div class="tip" v-for="item of result.news">
        <div class="Day">
          <div class="day">
            <h1 class="fsz-24">{{item.day}}</h1>
            <p>{{item.year}}.{{item.month}}</p>
          </div>
        </div>
        <div class="passage">
          <p class="fsz-18">{{item.title}}</p>
          <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;" >{{item.synopsis}}</p>
        </div>
        <div class="details"><!-- 细节、详细资料 <-->
          <a class="button" target="_blank" :href="geturl(item.url)">DETAILS</a>
        </div>
      </div>
      <a class="button" href="#/news">MORE NEWS</a>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data(){
    return{
      result:[],
      walking:null
    }
  },
  created(){
    Axios.get('http://127.0.0.1:7001/').then(
      Response=>{
        this.result = Response.data;
      })
  },
  methods:{
    geturl:function(val){
      return val;
    },

  }

}
</script>

<style scoped>
  .middle {
    text-align: center;
  }
  .middle1 .wave-border {
    background-color: #fff;
    width: 1200px;
    height: 120px;
    margin: 0 auto;
    position: relative;
    top: -50px;
  }
  .middle1 .wave-border::after {
    background-image: radial-gradient(circle 24px at center , #fff 51%, transparent 0%);
  }
  .about-us {
    margin: 62px auto 0;
    width: 1104px;
    display: flex;
  }
  .about-us .left {
    text-align: left;
    flex: 3;
  }
  h1.fsz-24 {
    font-weight: bold;
    margin-bottom: 24px;
  }
  h2.fsz-20 {
    font-weight: bold;
    margin-bottom: 70px;
  }
  p.fsz-24 {
    font-weight: bold;
    line-height: 1.5em;
    margin-bottom: 40px;
  }
  p.fsz-18 {
    font-weight: bold;
    line-height: 1.5em;
  }
  .cut-line {
    margin-bottom: 40px;
  }
  p.p1 {
    margin-bottom: 30px;
  }
  p.p2 {
    margin-bottom: 30px;
  }
  p.p3 {
    margin-bottom: 62px;
  }
  .about-us .left .button {
    background-color: #34d0d1;
    padding: 8px 23px;
    margin-bottom: 100px;
    transition: background-color 0.9s;
  }
  .about-us .left .button::after {
    width: 17px;
    left: 16px;
  }
  .about-us .left .button:hover {
    background-color: #fdd223;
  }
  .about-us .right {
    flex: 2;
    padding-left: 80px;
    position: relative;
  }
  .about-us .right .wave-border {
    background-color: #fff;
    width: 312px;
    height: 350px;
    position: absolute;
    top: 130px;
    left: 100px;
  }
  .middle2 {
    background-color: #fff;
    width: 100%;
  }
  .middle2 .title {
    padding: 100px 0 0 0;
    width: 1104px;
    margin: 0 auto;
    display: flex;
  }
  .title .left {
    flex: 1;
    text-align: left;
  }
  .title .right {
    flex: 1;
    text-align: right;
  }
  .project {
    margin: 0 auto 82px;
    width: 1104px;
    display: flex;
    justify-content: space-between;
  }
  .project .change-pages-right{
    background-color: #fff;
    color: #34d0d1;
    margin-top: 45px;
    padding-top: 8px;
    padding-right: 1px;
    font-size: 22px;
    width: 35px;
    height: 35px;
  }
  .project .change-pages-right:hover{
    position: relative;
    left: 1px;
  }
  .project1 {
    width: 288px;
    height: 320px;
  }
  .project1 .top {
    width: 288px;
    height: 216px;
    border-radius: 12px;
    margin-bottom: 14px;
    background-color: #34d0d1;
  }
  .project1 .wave-border {
    width: 288px;
    height: 120px;
    display: flex;
    background-color: #34d0d1;
  }
  .project1 .wave-border:after {
    background-image: radial-gradient(circle 24px at center , #34d0d1 51%, transparent 0%);
  }
  .project1 .wave-border .left {
    text-align: left;
    margin: 33px 0 0 38px;
    flex: 3;
  }
  .project1 .wave-border .left p {
    line-height: 2em;
  }
  .project1 .wave-border .right {
    flex: 2;
  }
  .project2 {
    width: 288px;
    height: 320px;
  }
  .project2 .top {
    width: 288px;
    height: 216px;
    border-radius: 12px;
    margin-bottom: 14px;
    background-color: #34d0d1;
  }
  .project2 .wave-border {
    width: 288px;
    height: 120px;
    display: flex;
    background-color: #34d0d1;
  }
  .project2 .wave-border:after {
    background-image: radial-gradient(circle 24px at center , #34d0d1 51%, transparent 0%);
  }
  .project2 .wave-border .left {
    text-align: left;
    margin: 33px 0 0 38px;
    flex: 3;
  }
  .project2 .wave-border .left p {
    line-height: 2em;
  }
  .project2 .wave-border .right {
    flex: 2;
  }
  .project3 {
    width: 288px;
    height: 320px;
  }
  .project3 .top {
    width: 288px;
    height: 216px;
    border-radius: 12px;
    margin-bottom: 14px;
    background-color: #34d0d1;
  }
  .project3 .wave-border {
    width: 288px;
    height: 120px;
    display: flex;
    background-color: #34d0d1;
  }
  .project3 .wave-border:after {
    background-image: radial-gradient(circle 24px at center , #34d0d1 51%, transparent 0%);
  }
  .project3 .wave-border .left {
    text-align: left;
    margin: 33px 0 0 38px;
    flex: 3;
  }
  .project3 .wave-border .left p {
    line-height: 2em;
  }
  .project3 .wave-border .right {
    flex: 2;
  }
  .middle2 .button {
    padding: 8px 23px;
    margin: 30px auto 110px;
    transition: background-color 0.9s;
  }
  .middle2 .button::after {
    width: 17px;
    left: 16px;
  }
  .middle3 {
    width: 100%;
  }
  .middle3 .top {
    width: 100%;
    position: relative;
  }
  .middle3 .top .bgc {
    height: 400px;
    background: url(../assets/images/memo-2331062_1920.jpg) center no-repeat;
    background-size: cover;
  }
  .middle3 .top .img {
    width: 100%;
    height: 400px;
    background-color: rgba(52, 208, 209, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
  }
  .middle3 .top .img .circle {
    width: 115px;
    height: 115px;
    margin: 70px auto 14px;
    border-radius: 50%;
    background-color: #34d0d1;
  }
  .middle3 .top .img .column1 {
       text-align: center;
     }
  .middle3 .top .img .column1 .fsz-24 {
    margin-bottom: 14px;
  }
  .middle3 .top .img .column1 .cut-line {
    margin-bottom: 14px;
  }
  .middle3 .top .img .column1 p {
    margin-bottom: 58px;
  }
  .middle3 .top .img .column2 {
    text-align: center;
  }
  .middle3 .top .img .column2 .fsz-24 {
    margin-bottom: 14px;
  }
  .middle3 .top .img .column2 .cut-line {
    margin-bottom: 14px;
  }
  .middle3 .top .img .column2 p {
    margin-bottom: 58px;
  }
  .middle3 .top .img .column3 {
    text-align: center;
  }
  .middle3 .top .img .column3 .fsz-24 {
    margin-bottom: 14px;
  }
  .middle3 .top .img .column3 .cut-line {
    margin-bottom: 14px;
  }
  .middle3 .top .img .column3 p {
    margin-bottom: 58px;
  }
  .middle3 .bottom {
    background-color: #fdd223;
    position: relative;
  }
  .middle3 .title {
    padding: 100px 0 0 0;
    width: 1104px;
    margin: 0 auto;
    display: flex;
  }
  .middle3 img {
    width: 900px;
    margin: 68px -414px;
    position: absolute;
    top: 3px;
    z-index: 5;
  }
  .middle3 h2 {
    margin-bottom: 40px;
  }
  .middle3 .button {
    background-color: #34d0d1;
    padding: 8px 23px;
    margin: 82px auto 100px;
    transition: background-color 0.9s;
  }
  .middle3 .button::after {
    width: 17px;
    left: 16px;
  }
  .middle3 .button:hover {
    position: relative;
    top: 1px;
  }
  .middle3 .wave-border {
    width: 1104px;
    background-color: #fff;
    padding-top: 88px;
    margin: 200px auto 0;
    display: flex;
  }
  .middle3 .wave-border::after {
    background-image: radial-gradient(circle 24px at center , #fff 51%, transparent 0%);
  }
  .middle3 hr {
    margin: 0 0 40px;
  }
  .middle3 .wave-border p {
    margin-bottom: 48px;
    text-align: left;
  }
  .middle3 .wave-border .left {
    flex: 4;
  }
  .middle3 .wave-border .middle {
    flex: 17;
  }
  .middle3 .wave-border .right {
    flex: 4;
  }
  .middle3 .change-pages-left{
    margin: 43px 20px;
  }
  .middle3 .change-pages-left:hover{
    position: relative;
    left: -1px;
  }
  .middle3 .change-pages-right{
    margin: 43px 20px;
  }
  .middle3 .change-pages-right:hover{
    position: relative;
    left: 5px;
  }
  .middle4 .title {
    padding: 100px 0 0 0;
    width: 1104px;
    margin: 0 auto;
    display: flex;
  }
  .middle4 .button {
    margin-bottom: 100px;
  }
  .middle4 .tip {
    background-color: #fff;
  }
  .middle4 .tip:after {
    background-image: radial-gradient(circle 24px at center , #fff 51%, transparent 0%);
  }
  .middle4 > .button {
    margin: 42px auto 100px;
  }
  .middle4 .tip .button {
    background-color: #34d0d1;
  }
  .middle4 .tip .button::after {
    width: 14px;
    left: 14px;
  }
  .middle4 > .button::after {
    width: 17px;
    left: 16px;
  }
  .middle4 .tip .button:hover {
    background-color: #fdd223;
  }
  .tip {
    height: 180px;
    width: 1104px;
    display: flex;
    margin: 0 auto 40px;
    background-color: #f4f4f4;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    position: relative;
    z-index: 99;
  }
  .tip:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 24px;
    margin-top: -12px;
    background-image: radial-gradient(circle 24px at center , #f4f4f4 51%, transparent 0%);
    background-size: 24px;
    background-repeat: repeat-x;
    /* box-shadow: #000 5px 5px 5px;*/
    z-index: 98;
  }
  .tip .Day {
    flex: 1;
    box-sizing: border-box;
    padding: 60px 0 50px;
  }
  .tip .Day .day {
    text-align: center;
    font-weight: bold;
    padding: 10px 50px 5px;
    display: inline-block;
    border-right: 1px dashed #ccc;
  }
  .tip .Day .day .fsz-24 {
    margin: 0 auto 15px;
  }
  .tip .Day .day p {
    margin: 0;
    color: #7A7A7A;
  }
  .tip .passage {
    flex: 5;
    box-sizing: border-box;
    padding: 60px 40px 28px 40px;
  }
  .tip .passage p {
    text-align: left;
  }
  .tip .passage .fsz-18 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .tip .details {
    flex: 1;
  }
  .tip .details .button {
    margin: 80px 60px 74px 8px;
  }
  .middle5 {
    background-color: #fff;
  }
  .middle5 .title {
    padding: 100px 0 0 0;
    width: 1104px;
    margin: 0 auto;
    display: flex;
  }
  .middle5 .tip .button::after {
    width: 14px;
    left: 14px;
  }
  .middle5 > .button {
    background-color: #34d0d1;
    padding: 8px 23px;
    margin: 42px auto 100px;
    transition: background-color 0.9s;
  }
  .middle5 > .button::after {
    width: 17px;
    left: 16px;
  }
  .middle5 > .button:hover {
    background-color: #fdd223;
  }
</style>
