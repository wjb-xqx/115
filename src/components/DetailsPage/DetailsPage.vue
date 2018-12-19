<template>
    <div class="index">
        <!-- 导航详情页 -->
        <com-header></com-header> 
        <div class="indexContainer clearfix">
            <div class="container clearfix">
                <div class="import clearfix">
                    <div class="left">
                        <div class="img">
                            <img src="@/assets/images/info.png" alt="">
                        </div>
                    </div>
                    <div class="right">
                        <h3>微鲤看看app利用脚本无限刷阅读撸金币，附视频教程</h3>
                        <div class="info clearfix">
                            <span>更新时间：<b>2018-12-12 02:50:27</b></span>
                            <span>附件大小：<b>89.38MB</b></span>
                            <span>附件大小：<b>89.38MB</b></span>
                            <span>附件大小：<b>89.38MB</b></span>
                            <span>附件大小：<b>89.38MB</b></span>
                            <span>附件大小：<b>89.38MB</b></span>
                            <span>附件大小：<b>89.38MB</b></span>
                        </div>
                        <div class="down">
                            <a href="#">本地下载</a>
                            <a href="#">备用下载</a>
                        </div>
                    </div>
                </div>
                <div class="soft-intr clearfix">
                    <div class="left clearfix">
                        <h3>简要介绍</h3>
                        <div class="soft-content">
                            <span>大家好，我是小二 </span>
                            <span>今天给大家带来的是 新躺赚项目</span>
                            <span>QQ:3047431526</span>
                            <span>利用脚本在 微鲤看看app 无限刷阅读赚金币 （修复版本）</span>
                        </div>
                        <div class="tj">
                            <h3>同类推荐</h3>
                            <ul class="clearfix">
                                <li>
                                    <a href="#">
                                        <div class="left">
                                            <div class="img"><img src="" alt=""></div>
                                        </div>
                                        <div class="right">
                                            <p>DNF原创辅助骚猪11.17变身秒杀 半自动刷图 剧情 支持全系统</p>
                                            <span>查看</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left">
                                            <div class="img"><img src="" alt=""></div>
                                        </div>
                                        <div class="right">
                                            <p>DNF原创辅助骚猪11.17变身秒杀 半自动刷图 剧情 支持全系统</p>
                                            <span>查看</span>
                                        </div>
                                    </a>
                                </li>
                                    <li>
                                    <a href="#">
                                        <div class="left">
                                            <div class="img"><img src="" alt=""></div>
                                        </div>
                                        <div class="right">
                                            <p>DNF原创辅助骚猪11.17变身秒杀 半自动刷图 剧情 支持全系统</p>
                                            <span>查看</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p>115资源网温馨提示：游戏辅助类只针对当前发布时的游戏版本，若游戏更新后谨慎使用，防止封号</p>
                    </div>
                    <div class="right">
                        <h3>作者信息</h3>
                        <router-link  to="/person" tag="div" class="info">
                            <div class="img"><img src="https://www.115z.com/static/user_head/8275ac25ba03716c03952932f3875123.jpg" alt=""></div>
                            <div class="right">
                                <div class="title">
                                    <p>小二引流</p>
                                    <span>小二交流群:716624567  不定期更新免费引流脚本</span>
                                </div>
                            </div>
                        </router-link>
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
        >.import{
            width: 100%;
            margin-top: 10px;
            padding: 37px;
            background: #FFF;
             margin-bottom: 13px;
             display: flex;
             >.left{
                 flex:2;
                 >.img{
                     width: 350px;
                     height: 267px;
                     >img{
                         width: 100%;
                         height: 100%;
                     }
                 }
             }
             >.right{
                 flex: 4;
                 padding-left: 15px;
                 >h3{
                     font-size: 26px;
                    margin-top: -2px;
                    color: #333;
                    font-weight: bold;
                    line-height: 30px;
                 }
                 >.info{
                     margin-top: 32px;
                     >span{
                         float: left;
                        width: 33.333333%;
                        margin-bottom: 20px;
                        font-size: 15px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                         white-space: nowrap;
                         color: #969696;
                         >b{
                             color: #333;
                             
                         }
                     }
                 }
                >.down{
                    margin-top: 15px;
                    height: 43px;
                    >a{
                        display: inline-block;
                        width: 180px;
                        height: 43px;
                        line-height: 43px;
                        text-align: center;
                        border: 1px solid #ccc;
                        &:nth-child(1){
                            background: #5298ff;
                            border: 1px solid #5298ff;
                            color: #FFF;
                        }
                    }
                }
             }
        }
        >.soft-intr{
            color:#333;
            display: flex;
            .left{
                padding: 20px;
                flex: 1;
                width: px;
                 background-color: #fff;
                >h3{
                line-height: 50px;
                font-size: 18px;
                 }
                 .soft-content{
                      >span{
                         display: block;
                         line-height: 34px;
                     }
                 }
                 >.tj{
                    >h3{
                        line-height: 45px;
                        font-size: 18px;
                    }
                    >ul{
                        >li{
                            height: 90px;
                            float: left;
                            margin-bottom: 20px;
                            >a{
                                display: inline-block;
                                height: 100%;
                                >.left{
                                    float: left;
                                    >.img{
                                        width: 120px;
                                        height: 90px;
                                        background-color: pink;
                                    }
                                }
                                >.right{
                                    padding: 20px 0;
                                    float: right;
                                    width: 215px;
                                    height: 90px;
                                    >span{
                                        width: 59px;
                                        height: 25px;
                                        background-color: #ccc;
                                        border: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }
                    
                 }
                 >p{
                    height: 39px;
                    line-height: 39px;
                    font-size: 15px;
                    margin-bottom: 30px;
                    display: block;
                    color: #929292;
                    background: #f9f9f9;
                    padding: 0px 20px;
                    margin-top: 10px;
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
