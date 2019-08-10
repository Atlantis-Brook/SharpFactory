<!-- News 的 list 组件 -->
<template>
   <div class="list">
       <div class="listTitle">
            <div class="listTitleCon">
                <p class="listTitleEn">{{title.titleEn}}</p>
                <p class="listTitleCh">{{title.titleCh}}</p>
            </div>
            <div class="listTitleHint">
                <p>新闻随时更新</p>
                <p>请关注</p>
            </div>
        </div>
        <div class="listContent">
            <ul>
                <li v-for="item of lists">
                    <div class="listTime">
                        <div>
                            <p class="listTimeDay">{{item.day}}</p>
                            <p class="listTimeMinute">{{item.year}}.{{item.month}}</p>
                        </div>
                    </div>
                    <div class="listText">
                        <div>
                        <p class="textTitle">{{item.title}}</p>
                        <p class="textContent">{{item.synopsis}}</p>
                        </div>
                    </div>
                        <button class="button">DETAILS</button>
                </li>
            </ul>
            <div class="pageChange">
                <button><</button>
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">5</a>
                <button>></button>
            </div>
        </div>
   </div>
</template>

<script>

export default {
    props: [ "title", "lists"],
   components: {},
    data() {
       return {

       };
    },
   methods: {
       
   },
}

</script>
<style scoped>

*{
    list-style: none;
}

.list{
    padding-top: 100px;
}
.listTitle{
    padding-bottom: 70px;
    position: relative;
    height: 126px;
}

.listTitle .listTitleCon{
    display: inline-block;
    position: absolute;
    left: 0;
}

.listTitle .listTitleCon .listTitleEn{
    font-size: 24px;
    font-weight: 700;
}

.listTitle .listTitleCon .listTitleCh{
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
}

.listTitle .listTitleHint{
    position: absolute;
    right: 0;
    top: 0;
}

.listTitle .listTitleHint>p{
    text-align: right;
    font-size: 18px;
    font-weight: 700;
}

.listContent{
    width: 100%;
    padding-bottom: 82px;
}

.listContent>ul{
    width: 100%;
    padding-bottom: 70px;
}

.listContent li{
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 166px;
    background-color: #f4f4f4;
    margin-bottom: 30px;
    position: relative;
}

.listContent li::after{
    content: '';
    background-image: radial-gradient(circle 24px at center , #f4f4f4 50%, transparent 0%);
    background-repeat: repeat-x;
    background-size: 24px;
    width: 100%;
    height: 24px;
    margin-top: -12px;
    position: absolute;
    top: 100%;
    left: 0;
}


.listContent li .listTime{
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin: 0 auto;
    width: 166px;
    height: 100px;
    border-right: 1px dashed #9a9a9a;
}

.listContent li .listTime>div{
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.listContent li .listTime .listTimeDay{
    font-size: 24px;
    font-weight: 700;
}

.listContent li .listTime .listTimeMinute{
    font-size: 16px;
    color: #9a9a9a;
}

.listContent li .listText{
    width: 700px;
    height: 100%;
    position: relative;
    padding-left: 36px;
    vertical-align: middle;
    display: inline-block;
}

.listContent li .listText>div{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.listContent li .listText .textTitle{
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 18px;
}

.pageChange{
    width: 360px;
    margin: 0 auto;
}

.pageChange>button{
    width: 40px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    background-color: #34d0d1;
    border-radius: 50%;
    border: none;
}

.pageChange>a{
    display: inline-block;
    width: 51px;
    text-align: center;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
}

</style>