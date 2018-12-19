<template>
    <div class="coupon">
        <div class="container">
            <div class="content clearfix">
                <div class="shop-info clearfix">
                    <div class="shop-logo">
                        <img src="https://img.alicdn.com/bao/uploaded//59/8a/TB1RmN1lUOWBKNjSZKzSutfWFXa.jpg_200x200.jpg_.webp" alt="">
                    </div>
                    <div class="shop-title">
                        奥力德保健品旗舰店
                    </div>
                    <div class="coupons-wrap">
                            <div class="price">
                                <span>￥</span>
                                30
                            </div>
                            <span>使用期限</span>
                            <span class="time">2018.12.16-2018.12.22</span>
                            <div class="coupons-btn">立即领券</div>
                    </div>
                </div>
                <div class="item-detail-view clearfix">
                    <a href="#">
                        <div class="left">
                            <img src="https://gaitaobao2.alicdn.com/tfscom/i3/2991116089/O1CN01T6W0JH1uqo86HsNIC_!!0-item_pic.jpg_300x300q90.jpg_.webp" alt="">
                        </div>
                        <div class="right">
                            <h3>【买2送3】奥力德乳清蛋白质粉健身男女增肌粉瘦人增肥增重健肌粉</h3>
                            <div class="tags">
                                <img src="@/assets/images/tb.jpg" alt="">
                                <span class="bytag">包邮</span>
                                <span>3.99万笔成交</span>
                            </div>
                            <div class="price-origin">现价：￥49.9</div>
                            <div class="discount">
                                <img src="@/assets/images/TB1Y.png" alt="">
                                <div class="sale">
                                    <span>￥</span>
                                    <span>19.9</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.coupon{
    width: 100%;
    height: 3000px;
    background-color: #ccc;
    >.container{
        height: 100%;
        >.content{
            width: 640px;
            height: 3000px;
            background: url(../../assets/images/coupon.png) no-repeat;
            margin: 0 auto;
            >.shop-info{
                    width: 100%;
                    margin-top: 20px;
                >.shop-logo{
                    width: 92px;
                    height: 92px;
                    margin: 0 auto;
                    >img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
                >.shop-title{
                    height: 45px;
                    text-align: center;
                    font-size: 25px;
                    color: #fff;
                    margin-top: 15px;
                }
                >.coupons-wrap{
                     margin: 0 auto;
                     margin-top: 30px;
                     height: 181px;
                     width: 482px;
                     background: url(../../assets/images/youhui.png) no-repeat;
                     position: relative;
                  >.price{
                        color: #d0021b;
                        font-size: 65px;
                        height: 86px;
                        line-height: 86px;
                        margin-top: 15px;
                        padding-left: 95px;
                        >span{
                            font-size: 30px;
                        }
                  }
                  >span{
                      display: block;
                      height: 38px;
                      font-size: 20px;
                      text-align: center;
                      padding-right: 130px;
                  }
                  >.coupons-btn{
                      width: 128px;
                      height: 57px;
                      color:#fff;
                      font-size: 30px;
                      position: absolute;
                      top: 60px;
                      right: 10px;
                  }
                }
            }
            >.item-detail-view{
                width: 640px;
                height: 273px;
                margin-top: 120px;
                padding: 20px;
                >a{
                    width: 100%;
                    height: 100%;
                    >.left{
                        width: 208px;
                        height: 208px;
                        float: left;
                        >img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    >.right{
                        width: 341px;
                        float: right;
                        padding: 20px;
                        h3{
                            line-height: 30px;
                            font-size: 18px;
                        }
                        >.tags{
                            line-height: 30px;
                            img{
                                width: 26px;
                                height: 26px;
                                margin-top: 5px;
                                vertical-align: top;
                            }
                            >.bytag{
                                color:red;
                                border: 1px solid red;
                            }
                            
                        }
                        >.price-origin{
                                height: 25px;
                        }
                    }
                }
            }
        }
    }
}
</style>

