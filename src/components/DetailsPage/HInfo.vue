<template>
    <div class="index">
        <!--文章详情页 -->
        <com-header></com-header> 
        <div class="indexContainer clearfix">
            <div class="container clearfix">
                <div class="soft-intr clearfix">
                    <div class="left clearfix">
                        <h4>淡蓝琥珀(HD+中文字幕)附百度云下载地址</h4>
                        <span>2018-12-18 00:43:56投稿作者：幽灵安全组：冰哥围观人数：342点赞：0次</span>
                        <div class="content">
                            <p>手机各大应用商店下载“掌上生活”然后打开APP登录 在首页选择 - 充值中心 最上面可以看到圣诞季活动图片</p>
                            <p>手机各大应用商店下载“掌上生活”然后打开APP登录 在首页选择 - 充值中心 最上面可以看到圣诞季活动图片</p>
                            <p>手机各大应用商店下载“掌上生活”然后打开APP登录 在首页选择 - 充值中心 最上面可以看到圣诞季活动图片</p>
                            <img src="@/assets/images/hd1.jpg" alt="" class="img1">
                            <h3>下面是小编测试图</h3>
                            <img src="@/assets/images/hd2.jpg" alt="" class="img2">
                        </div>
                        <div class="articleEnd">
                            <div class="title">the end</div>
                            <p>免责声明：本文来自115资源网发布，但不代表本站的观点和立场。</p>
                            <div class="good">
                                <a class="el-icon-bell"></a>
                                <span>已有1次赞</span>
                            </div>
                        </div>
                        <div class="pj">
                            <div class="title">
                                我要评价
                                <span>0条评价，0条回复</span>
                            </div>
                        </div>

                    </div>
                    <div class="right">
                        <h3>作者信息</h3>
                        <div class="info">
                            <div class="img"><img src="https://www.115z.com/static/user_head/8275ac25ba03716c03952932f3875123.jpg" alt=""></div>
                            <div class="right">
                                <div class="title">
                                    <p>小二引流</p>
                                    <span>小二交流群:716624567  不定期更新免费引流脚本</span>
                                </div>
                                
                            </div>
                        </div>
                        <ul class="number">
                                    <li>
                                        <p>投稿次数</p>
                                        <span>13</span>
                                    </li>
                                     <li>
                                        <p>投稿次数</p>
                                        <span>13</span>
                                    </li>
                                     <li>
                                        <p>投稿次数</p>
                                        <span>13</span>
                                    </li>
                                </ul>
                                <div class="lx">
                                    <a href="#">联系作者</a>
                                    <a href="#">他的主页</a>
                                </div>
                                <div class="footer clearfix">
                                    <h3>随机推荐</h3>
                                    <ul class="clearfix">
                                        <li><a href="#"><span>1</span>腾讯云服务器标配8元每月新活动 </a></li>
                                        <li><a href="#"><span>2</span>腾讯云服务器标配8元每月新活动 </a></li>
                                        <li><a href="#"><span>2</span>腾讯云服务器标配8元每月新活动 </a></li>
                                        <li><a href="#"><span>2</span>腾讯云服务器标配8元每月新活动 </a></li>
                                        <li><a href="#"><span>2</span>腾讯云服务器标配8元每月新活动 </a></li>
                                        <li><a href="#"><span>2</span>腾讯云服务器标配8元每月新活动 </a></li>
                                        <li><a href="#"><span>2</span>腾讯云服务器标配8元每月新活动 </a></li>
                                        <li><a href="#"><span>2</span>腾讯云服务器标配8元每月新活动 </a></li>
                                        <li><a href="#"><span>2</span>腾讯云服务器标配8元每月新活动 </a></li>
                                        <li><a href="#"><span>2</span>腾讯云服务器标配8元每月新活动 </a></li>
                                    </ul>
                                </div>
                    </div>
                </div>
            </div>
        </div>
        <com-footer></com-footer>
    </div>
</template>

<script>
import ComHeader from "../../common/ComHeader"
import ComFooter from "../../common/ComFooter"

export default {
    name:"DetailsPage",
    components:{
       ComHeader,
       ComFooter
    }
}
</script>

<style lang="less" scoped>
.indexContainer{
    margin-top: 55px;
    width: 100%;
    background-color: #F6F6F6;
    >.container{
        margin-bottom: 20px;
        height: 100%;
        >.soft-intr{
            margin-top: 10px;
            color:#333;
            display: flex;
            .left{
                >h4{
                    line-height: 50px;
                    font-size: 30px;
                    color:#000;
                }
                >span{
                    line-height: 50px;
                }
                padding: 20px;
                flex: 1;
                width: px;
                 background-color: #fff;
               >.content{
                    display: block;
                    line-height: 30px;
                    margin-bottom: 15px;
                     font-size: 17px;
                    color:#333;
                    >img{
                        width: 640px;
                        height: 635px;
                    }
                    >h3{
                            line-height: 50px;
                            
                        }
                }
                >.articleEnd{
                    height: 300px;
                    border-top: 1px solid #ccc;
                    >.title{
                        height: 24px;
                        margin: 15px;
                        font-size: 18px;
                        text-align: center;
                    }
                    >p{
                        line-height: 42px;
                        font-size: 18px;
                        text-align: center;
                    }
                    >.good{
                        height: 102px;
                        margin-top: 30px;
                        text-align: center;
                        >a{
                            display: block;
                            font-size: 50px;
                            margin: 0 auto;
                            width: 50px;
                        }
                        >span{
                            display: inline-block;
                            line-height: 15px;
                        }
                    }

                }

            }
            >.right{
                width: 360px;
                height: 972px;
                background-color: #fff;
                float: right;
                margin-left: 10px;
                padding: 20px;
                >h3{
                    height: 45px;
                    line-height: 35px;
                    text-indent: 21px;
                    font-size: 17px;
                }
                >.info{
                    height: 90px;
                    display: flex;
                    margin-top: 10px;
                    border-bottom: 1px solid #ccc;
                    >.img{
                        flex:1;
                        >img{
                            width: 82px;
                            height: 80px;
                        }
                        
                    }
                    >.right{
                        flex: 2;
                        height: 100%;
                        .title{
                              >p{
                              display: block;
                              height: 22px;
                          }
                          >span{
                              display: block;
                              height: 24px;
                              margin-top: 11px;
                              display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                         }
                        }
                       
                    }
                }
                 >.number{
                       width: 100%;
                       height: 75px;
                       margin-top: 30px;
                  >li{
                      height: 100%;
                      float: left;
                      width: 33.33%;
                      text-align: center;
                      >p{
                          line-height: 35px;
                      }
                    }
                }
                >.lx{
                    height: 42px;
                    margin-top: 20px;
                    >a{
                        width: 142px;
                        height: 40px;
                        border: 1px solid #ccc;
                        display: inline-block;
                        text-align: center;
                        line-height: 40px;
                    }
                }
                >.footer{
                    >h3{
                        height: 45px;
                        line-height: 45px;
                        font-size: 18px;
                    }
                    >ul{
                        >li{
                            line-height: 30px;
                            margin-bottom: 25px;
                            >a{
                                display: block;
                                line-height: 30px;
                                height: 30px;
                                font-size: 15px;
                                overflow: hidden;
                                >span{
                                    display: inline-block;
                                    width: 30px;
                                    height: 20px;
                                    border: 1px solid #ccc;
                                    line-height: 20px;
                                    text-align: center;
                                    margin-right: 10px;
                                }
                            }
                        }
                    }
                }
            }
            
           
        }
    }
}
</style>
