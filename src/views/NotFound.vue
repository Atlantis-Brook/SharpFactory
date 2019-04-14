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
<style>
.notfound{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.middle{
    line-height: 110px;
    margin-top: -100px;
    text-align: center;
}

img{
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

</style>