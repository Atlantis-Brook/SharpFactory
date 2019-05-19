<!-- 404 -->
<template>
   <div class="notfound">
       <div class="middle">
            <img :src="imgSrc" width="136px" height="136px">
            <h1>404</h1>
            <h2>Sorry, the page was not found!</h2>
       </div>
   </div>   
</template>

<script>

import pic404 from '@/assets/images/pic_404.png'
export default {
    data() {
           return {
               imgSrc: pic404
           };
       },
    methods: {

    }
}
</script>

<style scoped>
.notfound{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.middle{
    line-height: 100px;
    margin-top: -100px;
    text-align: center;
}

img{
    animation: 0.8s picAct alternate infinite;
    user-select: none;
    border-radius: 50%;
    width: 136px;
    height: 136px;
    box-shadow: -10px 10px 10px #ccc;
}

h1{
    font-size: 81px;
}

h2{
    color: #bdc3c7;
}

/*
    404表情微动动画
*/

@keyframes picAct{
    0%      {}
    100%    {margin-bottom: -14px}
}

</style>