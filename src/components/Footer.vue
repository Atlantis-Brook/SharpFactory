<template>
    <div>
    <div class="footer-bgcolor">
        <div class="footer-left_container" >
            <p class="font-cu">CONTACT &nbsp;&nbsp;US </p>
            <p class="font-lm">留言板 </p>
            <dl>
                <dd><input class="input-call" type="text" name="" placeholder="称呼"></dd>
                <dd><input class="input-email" type="text" name="" placeholder="邮箱"></dd>
                <dd><input class="input-leave_comments" type="text" name="" placeholder="留言"></dd>
                <dd><input class="input-checkbox" type="checkbox">我已阅读并同意<a href="#"> 《隐私政策》 </a></dd>
                <dd><input class="button-2" type="submit" value="SEND MESSAGE" ></dd>
            </dl>
        </div>
           
        <div>
            <p class="font-rp-1">期待您的留言</p>
            <p class="font-rp-2">我们会尽快地答复</p>
            <div class="footer-right_container">
                <img class="img-ct" src="../assets/contact.svg">
                <p class="line">------------------------</p> 
                <img class="img-em" src="../assets/email.svg"> 
               <p class="font-em">info@example.com</p>  
               <p class="line">------------------------</p> 
               <p class="font-address">贵州省贵阳市花溪区</p> 
               <p class="font-address">贵安新区数字经济产业园4号0610室</p> 
            </div> 
        </div>
    </div>
    <div class="bottom-bgcolor">
        <div class="bottom-container">
            <p class="font-cr-1">Copyright ©2019SharpFactory All rights reserved.</p>
            <p class="font-cr-2"> 京 ICP 备10217899 号</p> 
        </div>   
        <section>
            <a href="#">版权声明 </a>
            <a href="#">隐私政策</a>
            <a href="#">站点地图</a>
            <a href="#">小额打赏</a>
            <a href="#">联系我们</a>
        </section>  
    </div>

</div>
</template>
 <script>
 export default {
     
 }
 </script>
 <style>
 
 .footer-bgcolor{
     background-color:rgb(52, 208, 209);
     height: 700px;;
 }
 .bottom-bgcolor{
     background-color: #162c5A;
     height:120px;
 }
 .footer-left_container{
    float: left;
     width: 600px;
 }
 .font-cu{
     padding-top: 100px;
     padding-left: 60px;
     font-size: 24px;
 }
 .font-lm{
     padding-top: 26px;
     padding-left: 60px;
     font-size: 20px;
 }
 input::-webkit-input-placeholder {
       color: 9a9a9a;     
       padding:15px;
 }
 .input-call{
     margin-top: 65px;
     margin-left: 60px;
     border-radius:12px;
     background-color: white;
     width: 200px;
     height: 30px;
 }
 .input-email{
     margin-top: 24px;
     margin-left: 60px;
     border-radius:12px;
     background-color: white;
     width: 300px;
     height: 30px;
 }
 .input-leave_comments{
     margin-top: 24px;
     margin-left: 60px;
     border-radius:12px;
     background-color: white;
     width: 500px;
     height: 150px;
 }
 .input-checkbox{
     background-color:rgb(52, 208, 209);
     color: white;
     border-width: 10px;
     margin-left: 60px;
     margin-top:24px; 
 }
 .button-2{
    width: 150px;
    height: 30px;
    background: yellow;
    border-radius: 12px;
    font-size: 14px;
    margin-top: 46px;
    margin-left: 300px;
}
.font-rp-1{
    padding-left:1250px;;
    padding-top: 110px;
    font-size: 18px;

}
.font-rp-2{
    padding-left: 1215px;
    font-size: 18px;

}
.img-ct{
    width: 105px;
    padding-left: 100px;
}
.img-em{
    width: 26px;
    padding-left: 130px;
}
.footer-right_container{
    margin-left:900px;
    margin-top: 120px;
    width: 312px;
    height: 298px;
    background-color: white; 
    border-radius: 12px;
}
.line{
    text-align: center;
}
.font-em
{
    font-size: 18px;
    text-align: center;
}
.font-address{
    font-size: 14px;
    color: #9A9A9A;
    text-align: center;
}
.font-cr-1{
    font-size: 14px;
    color: #9A9A9A;
    padding-top: 46px;
    padding-left: 60px;
}
.font-cr-2{
    font-size: 14px;
    color: #9A9A9A;
    padding-left: 60px;
}
.bottom-container{
    float: left;
     width: 400px;
 }
 section{
     padding-top: 50px;
     padding-left: 200px;
 }
 section>a{
     font-size: 14px;
     color: #fff;
     padding-left: 80px;
 }
 </style>
 
 