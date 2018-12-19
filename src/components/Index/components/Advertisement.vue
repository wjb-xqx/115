<template>
    <div class="ad container">
        <a href="#">
            <img src="https://ss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=144005631,2088736888&fm=191&app=48&size=h300&n=0&g=4n&f=JPEG?sec=1853310920&t=d2d00a99de081deca1c822af2b648f96" alt="">
            <p>广告</p>
        </a>
        <a href="#">
            <img src="https://ss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=144005631,2088736888&fm=191&app=48&size=h300&n=0&g=4n&f=JPEG?sec=1853310920&t=d2d00a99de081deca1c822af2b648f96" alt="">
            <p>广告</p>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.ad{
    height: 70px;
    margin-top: 30px;
    background-color: #fff;
    >a{
        display: inline-block;
        width: 580px;
        float: left;
        height: 100%;
        margin-right: 5px;
        position: relative;
        >img{
            width: 580px;
            height: 70px;
        }
        >p{
            position: absolute;
            bottom: 0;
            left: 0;
            display: inline-block;
            width: 40px;
            height: 22px;
            text-align: center;
            background-color: rgba(0, 0, 0, .3)
        }
    }
    >a:nth-child(2){
        float: right;
    }
}
</style>

