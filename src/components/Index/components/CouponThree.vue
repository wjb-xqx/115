<template>
    <ul class="three container clearfix">
        <li>
            <img src="@/assets/images/tb.jpg" alt="">
            <div class="text">
                <h3>淘宝优惠券</h3>
                <span>定期更新剁手优惠券</span>
            </div>
            <a href="#" class="go">去看看</a>
        </li>
        <li>
            <img src="@/assets/images/tm.jpg" alt="">
            <div class="text">
                <h3>淘宝优惠券</h3>
                <span>定期更新剁手优惠券</span>
            </div>
            <a href="#" class="go">去看看</a>
        </li>
         <li>
            <img src="@/assets/images/pdd.jpg" alt="">
            <div class="text">
                <h3>淘宝优惠券</h3>
                <span>定期更新剁手优惠券</span>
            </div>
            <a href="#" class="go">去看看</a>
        </li>
    </ul>
</template>

<script>
export default {
    name:"CouponThree"
}
</script>

<style lang="less" scoped>
.three{
    background: #FFF;
    margin-top: 13px;
    padding: 35px 30px;
    >li{
        float: left;
        width: 33.33%;
        padding-left: 15px;
        box-sizing: border-box;
        >img{
          width: 52px;
          height: 52px;
          float: left;
          margin-right: 25px;
       }
       >.text{
           float: left;
           width: 140px;
           height: 52px;
           >h3{
                font-size: 15px;
                color: #333;   
                line-height: 26px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden; 
           }

       }
       >.go{
           width: 100px;
           height: 35px;
           display: inline-block;
           text-align: center;
           line-height: 35px;
           border: 1px solid #ccc;
           border-radius: 20px;
           margin-left: 10px;
           margin-top: 8px;
           &:hover{
              border: 1px solid red; 
              color:red;
           }
       }
    }
}
</style>
