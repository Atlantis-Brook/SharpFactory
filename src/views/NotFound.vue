<!-- 404 -->
<template>
  <div class="notfound">
    <div class="middle">
      <img :src="imgSrc" width="136px" height="136px">
      <h1>404</h1>
      <h2>Sorry, A problem has arisen!</h2>
      <router-link to="/">To home &gt;&gt;</router-link>
    </div>
  </div>   
</template>

<script>

import pic404 from '@/assets/images/pic_404.png'
export default {
  data () {
    return {
      imgSrc: pic404
    };
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
.toHome{
    position: relative;
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
a{
    color: #000000;
}
a:hover{
    color: #002fff;
    text-decoration: underline;
}


/*
    404表情微动动画
*/

@keyframes picAct{
    0%      {}
    100%    {margin-bottom: -14px}
}

</style>