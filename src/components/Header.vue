<template>
    <div class="header_background">
        <div class="wrapper">
            <span><a href="#/"><img src="../assets/logo.png" class="logo" alt=""> </a>   </span>
            <nav>
                <ul>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">为您服务</a></li>
                    <li><a href="#/blogs">博客聚合</a></li>
                    <li><a href="#/news">新闻事件</a></li>
                    <li><a href="#">网址导航</a></li>
                </ul>
            </nav>
            <input type="button" value="登录" class="button  log_in-button"> 
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header_background{
    width: 100%;
    height: 650px;
    background: url(../assets/hacking.jpg) no-repeat;
    background-size:100% 650px;
}
.logo{
    height: 50px;
    padding-top: 36px;  
    float: left;
}
nav{
    width: 700px;
    padding-left:110px;
    padding-top: 45px;
    float: left;
}
ul{
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
}
li{
    width: 120px;
    list-style-type: none;
}
li>a{
    font-size: 18px;
    color: #fff;
    text-align: center;
}
.log_in-button { 
    margin: 55px 0px 0px 60px;
    float: left;
    border: 0;
}
</style>
