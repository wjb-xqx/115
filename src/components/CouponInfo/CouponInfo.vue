<template>
    <div class="navInfo">
        <!-- 剁手优惠券 -->
        <div class="indexContainer clearfix">
               <div class="container">
                   <div class="title">
                       <h3>小编有话说</h3>
                   </div>
                   <p class="text">特价商品都是卖家赔本赚吆喝的，性价比超高，暂时低价卖，等销量上去以后， 商家就会涨价。咱只在低价的时候发给大家购买！特价商品随时涨价，看好立即购买，不要等优惠券没了。 每日人工整理全网最低价最超值商品，让大家买得舒心用得舒心，欢迎大家每天来看看本页面</p>
                   <div class="more">
                       <a href="http://ltt.1fqw.com/" target="_blank" style="margin-right:2%;">更多优惠券大全</a>
                       <a href="http://www.1fqw.com/other" target="_blank" >拼多多首发优惠券</a>
                   </div>
                   <!-- 每日人工推荐 -->
                   <div class="title2">
                       <h3>每日人工推荐</h3>
                   </div>
                   <div class="shop_li">
                       <ul class="clearfix">
                             <li v-for="(item,index) in List" :key="index">
                               <router-link to="/Coupon" tag="a">
                                   <div class="shop-utl">
                                       <div class="shopImg">
                                           <img :src="item.Url" alt="">
                                       </div>
                                       <div class="shopInfo">
                                           <h3>{{item.title}}</h3>
                                           <div class="price">
                                               <p><i>￥</i>{{item.price}}</p>
                                               <span>销量：<b>{{item.num}}件</b></span>
                                           </div>
                                           <div class="coupon">
                                               <i class="left"></i>
                                               {{item.money}}元券 
                                               <i class="right"></i>
                                           </div>
                                       </div>
                                   </div>
                               </router-link>
                           </li>
                       </ul>
                   </div>
                   <a href="http://ltt.1fqw.com/" class="moreAll" target="_blank">更多淘宝、天猫优惠券</a>
               </div>
        </div>
    </div>
</template>

<script>


export default {
    name:"CouponInfo",
    data(){
        return{
            List:[{
                id:"0001",
                Url:require('../../assets/images/shop.jpg'),
                title:'diy小屋阁楼别墅手工制作小房子模型拼装创意圣诞节生日礼物女生',
                price:'58',
                num:'7571',
                money:'10.00'
            },{
                id:"0002",
                Url:require('../../assets/images/shop.jpg'),
                title:'diy小屋阁楼别墅手工制作小房子模型拼装创意圣诞节生日礼物女生',
                price:'58',
                num:'7571',
                money:'10.00'
            },{
                id:"0003",
                Url:require('../../assets/images/shop.jpg'),
                title:'diy小屋阁楼别墅手工制作小房子模型拼装创意圣诞节生日礼物女生',
                price:'58',
                num:'7571',
                money:'10.00'
            },{
                id:"0004",
                Url:require('../../assets/images/shop.jpg'),
                title:'diy小屋阁楼别墅手工制作小房子模型拼装创意圣诞节生日礼物女生',
                price:'58',
                num:'7571',
                money:'10.00'
            },{
                id:"0005",
                Url:require('../../assets/images/shop.jpg'),
                title:'diy小屋阁楼别墅手工制作小房子模型拼装创意圣诞节生日礼物女生',
                price:'58',
                num:'7571',
                money:'10.00'
            }]
        }
    }
    
}
</script>

<style lang="less" scoped>
.indexContainer{
    margin-top: 55px;
    width: 100%;
    background-color: #fff;
    >.container{
        margin-top: 35px;
        margin-bottom: 35px;
        >.title{
            height: 45px;
            line-height: 45px;
            text-indent: 21px;
            font-size: 17px;
            position: relative;
            &::before{
                content: '';
                width: 3px;
                height: 20px;
                background-color: red;
                position: absolute;
                top: 0px;
                left: 2px;

            }
        }
        >.text{
            font-size: 16px;
            line-height: 27px;
            color: #7d7d7d;
            margin-bottom: 15px;
        }
        >.more{
            height: 48px;
            margin-bottom: 30px;
            >a{
            float: left;
            width: 49%;
            height: 48px;
            line-height: 48px;
            font-size: 16px;
            color: #777777;
            border: 1px solid #e0e0e0;
            text-align: center;
            border-radius: 4px;
            }
        }
        >.title2{
            position: relative;
            height: 45px;
            line-height: 35px;
            text-indent: 21px;
            font-size: 17px;
            &::before{
                content: '';
                width: 3px;
                height: 20px;
                background-color: red;
                position: absolute;
                top: 0px;
                left: 2px;
            }
        }
        >.shop_li{
            li{
                float: left;
                margin-bottom: 25px;
                background: #FFF;
                height: 399px;
                width: 23.5%;
                margin-right: 2%;
                border: 1px solid #f1f1f1;
                &:nth-child(4n){
                    margin-right: 0;
                }
                >a{
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    >.shop-utl{
                         width: 100%;
                        height: 100%;
                        >.shopImg{
                            width: 100%;
                            height: 282px;
                            >img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        >.shopInfo{
                            padding: 0px 15px;
                            padding-top: 8px;
                            >h3{
                                font-size: 13px;
                                height: 25px;
                                font-weight: normal;
                                line-height: 25px;
                                margin-bottom: 8px;
                                color: #333;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            >.price{
                                height: 20px;
                                display: flex;
                                >p{
                                    flex: 1;
                                    color:red;
                                    font-size: 20px;
                                    >i{
                                        font-size: 15px;
                                        font-style: normal;
                                        padding-right: 5px;
                                    }
                                }
                                >span{
                                    flex: 1;
                                    text-align: right;
                                    >b{
                                        color:red;
                                    }
                                }
                            }
                            >.coupon{
                                width: 89px;
                                height: 25px;
                                background-color: red;
                               line-height: 25px;
                                color:#fff;
                                text-align: center;
                                float: right;
                                margin-top: 10px;
                                border-radius: 3px;
                                position: relative;
                                >.left{
                                    width: 9px;
                                    height: 9px;
                                    background-color: #fff;
                                    position: absolute;
                                    top: 50%;
                                    left: 0;
                                    transform: translate(-50%,-50%);
                                    border-radius: 50%;
                                }
                                 >.right{
                                    width: 9px;
                                    height: 9px;
                                    background-color: #fff;
                                    position: absolute;
                                    top: 50%;
                                    right: 0;
                                    transform: translate(50%,-50%);
                                    border-radius: 50%;
                                }
                            }
                        }
                    }
                }
            }
        }
        >.moreAll{
            display: inline-block;
                width: 100%;
                 height: 51px;
                 line-height: 51px;
                 text-align: center;
                 font-size: 16px;
                 border-radius: 4px;
                 color: #f18d51!important;
                 border: 1px solid #ffd2ab;
                 background: #fffbf2;
        }
    }
}
</style>
