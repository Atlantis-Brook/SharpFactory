<template>
<div>
    <div class="footer_bgcolor">
        <div class="container">
            <div class="font_left">
                <span class="font_left-1">CONTACT&nbsp;US</span>
                <br>
                <span class="font_left-2">留言板</span>
            </div>
            <div class="font_right">
                <span>期待您的留言</span>
                <br>
                <span class="font_right-1">我们会尽快地答复</span>
           </div>
           <div class="clear"></div>
           <div class="input_lm">
                <input class="input_name" type="text" name="" placeholder="称呼"> 
                <input class="input_email" type="text" name="" placeholder="邮箱">
                <textarea name="" class="lmessage" placeholder="留言"></textarea>
                <input class="" type="checkbox">我已阅读并同意<a href="#">《隐私政策》</a>
                <div class="button send_message">SEND MESSAGE</div>
           </div>  
            <div class="address">
                <img class="img_pe" src="../assets/contact.svg">
                <center><hr></center>    
                <img class="img_ea" src="../assets/email.svg"> 
                <span class="email_size">info@example.com</span> 
                <center><hr></center>
                <div class="address_size">
                    <span>贵州省贵阳市花溪区</span> 
                    <br>    
                    <span>贵安新区数字经济产业园4号0610室</span>
                </div> 
            </div>
        </div>
    </div>
    <div class="bottom_bgcolor">
        <div class="container">
            <div class="bottom_cy">
                <span >Copyright ©2019SharpFactory All rights reserved.</span>
                <br>
                <span> 京 ICP 备10217899 号</span> 
            </div>
            <div class="bottom-nav">
                <a href="#/">版权声明</a>
                <a href="#/">隐私政策</a>
                <a href="#/">站点地图</a>
                <a href="#/">小额打赏</a>
                <a href="#/">联系我们</a>
            </div> 
        </div>    
    </div>       
</div>
</template>

 <script>
 export default {
     
 }
 </script>

 
 <style scoped>
 .footer_bgcolor {
    background-color:rgb(52, 208, 209);
    height: 700px;
    position: relative;
 }
 .clear{
    clear: both;
 }
.font_left{
    padding-top: 100px;
    float: left;
}
.font_right{
    float: right;
    padding-top: 110px;
}
.font_left-1{
    font-size: 24px;
}
.font_left-2{
   display: block;
   padding-top: 26px;
   font-size: 20px;
}
.font_right span{
    font-size: 18px;
}
.font_right-1{
    display: block;
    padding-top: 5px;
}
.input_lm{
    width: 500px;
    padding-top: 65px;
}
.input_lm input{
    border-radius: 12px;
    margin-bottom: 24px; 
    border: 0px;  
    outline: none;
    padding-left: 15px;
}
.input_name{
    width: 200px;
    height: 30px;
}
.input_email{
    width: 300px;
    height: 30px;
}
.lmessage{
    border-radius: 12px;
    padding: 15px;
    outline: none;
    resize:none; 
    width:450px;
    height:100px; 
    margin-bottom: 24px;
}
.send_message{
    margin-top: 46px;
    margin-left: 200px;
}
.address{
    width: 312px;
    height: 298px;
    background: #fff;
    position: absolute;
    left: 900px;
    top: 260px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px; 
}
.address::after{
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 24px;
    margin-top: -12px;
    background-image: radial-gradient(circle 24px at center , #fff 51%, transparent 0%);
    background-size: 24px;
    background-repeat: repeat-x;
    background-image: radial-gradient(circle 24px at center , #fff 51%, transparent 0%);
    box-shadow:none;
}
hr{
    width: 200px;
}
.img_pe{
    width: 105px;
    margin-top: -52px;
    margin-left: 90px;
}
.img_ea{
    width: 26px;
    margin-left: 130px;
    color: #9a9a9a;
}
.address span{
    display: block;
    line-height: 5px;
    text-align: center;
}
.email_size{
    font-size: 18px;
    padding-top: 20px;
    padding-bottom: 15px;
}
.address_size{
    padding-top: 25px;
    font-size: 14px;
    color: #9a9a9a;
}
.bottom_bgcolor{
    background-color: #162c5A;
    height:120px;
 }
.bottom_cy{
    color: #9a9a9a;
    margin: 40px 0px;
    width: 320px;
    float: left;
 }
.bottom-nav{
    width: 676px;
    color: #fff;
    padding-top: 50px;
    padding-left: 100px;
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
}
.bottom-nav a{
    color: #fff;
    width: 130px;
} 
 </style>
 
 