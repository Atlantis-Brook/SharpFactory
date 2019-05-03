<template>
    <div class="background">
        <container class="container">
            <img src="../assets/logo.png" class="logo" alt="">
            <nav>
                <ul>
                    <li><a href="#">首页</a></li>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">为您服务</a></li>
                    <li><a href="#">博客聚合</a></li>
                    <li><a href="#">新闻事件</a></li>
                    <li><a href="#">网址导航</a></li>
                </ul>
            </nav>
            <input type="button" value="登录" class="log_in-button">
        </container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
*{
    border: 0px;
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    list-style-type: none;
}
.background{
    width: 100%;
    height: 650px;
    background: url(../assets/hacking.jpg) no-repeat;
    background-size:100% 650px;
}
.logo{
    height: 50px;
    float: left;
    padding-left: 120px; 
    padding-top: 36px;
    
}
.container{
    width: 1200px;
}
ul{
    padding-top: 50px;
    padding-left:400px;
}
li{
    float: left;
    padding-left: 70px;
}
li>a{
    font-size: 18px;
    color: #fff;
}
.log_in-button{
    width: 60px;
    height: 30px;
    background: yellow;
    border-radius: 12px;
    font-size: 14px;
    margin-left: 200px;
}
</style>
