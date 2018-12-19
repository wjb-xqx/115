<template>
    <div class="new-position container">
        <div class="left">
            <div class="banner">
                 <el-carousel trigger="click">
                   <el-carousel-item>
                      <img src="@/assets/images/banner1.jpeg" alt="">
                   </el-carousel-item>
                   <el-carousel-item>
                      <img src="@/assets/images/banner2.jpeg" alt="">
                   </el-carousel-item>
                   <el-carousel-item>
                      <img src="@/assets/images/banner3.jpeg" alt="">
                   </el-carousel-item>
                 </el-carousel>
             </div>
            <div class="index-login">
                    <div class="title">我的信息<span></span></div>
                    <div class="info">
                         <div class="lg_no">
                              <a href="#"><i class="iconfont">&#xe601;</i></a>
                              <div class="u-info">
                                  <h3>您还没有登录哦~</h3>
                                  <a href="">立即登录</a>
                              </div>
                        </div>
                    </div>
                    <div class="intr">
                        <h3>投稿拿奖励</h3>
                        <p>支持在线投稿<br/>优质教程一律送现金</p>
                    </div>
            </div>
                
         </div>
        <div class="right">
            <div class="title">
                <div class="left">最近更新</div>
                 <i class="el-icon-arrow-right icon"></i>
            </div>
            <div class="r-content">
                <ul>
                    <li>
                        <a href="javascript:;" title=" 免费领赞永久q钻/快手抖音粉">
                            <i class="ad">广告</i>免费领赞永久q钻/快手抖音粉
                        </a>
                        <font class="new-time">12-16</font>
                    </li>
                     <li>
                        <a href="javascript:;" title=" 免费领赞永久q钻/快手抖音粉">
                            <i class="ad">广告</i>免费领赞永久q钻/快手抖音粉
                        </a>
                        <span class="new-time">12-16</span>
                    </li>
                     <li>
                        <a href="javascript:;" title=" 免费领赞永久q钻/快手抖音粉">
                            <i class="ad">广告</i>免费领赞永久q钻/快手抖音粉
                        </a>
                        <span class="new-time">12-16</span>
                    </li>
                </ul>
                <div class="page">
                    <div class="Previous">上一页</div>
                    <b class="cfx"></b>
                    <div class="next">下一页</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"NewPosition",
    data(){
        return{
            
        }
    },
    methods:{
         
    }
}
</script>

<style lang="less" scoped>
.new-position{
    margin-top: 13px;
    height: 780px;
    >.left{
        width: 430px;
        height: 100%;
        float: left;
        >.banner{
            width: 100%;
            height: 300px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        >.index-login{
            background: #FFF;
            margin-top: 13px;
            height: calc( 767px - 300px);
            padding: 25px 33px;
            >.title{
                height: 45px;
                padding: 6px;
                border-bottom: 1px solid #F6F6F6;
                font-size: 17px;
                position: relative;
                padding-left: 15px;
                color:#000;
                >span{
                    display: block;
                    width: 2px;
                    height: 18px;
                    background-color: #5298ff;
                    position: absolute;
                    top: 10px;
                    left: 0;
                }
            }
            >.info{
                height: 89px;
                padding: 0px 26px;
                 margin: 49px 0;
                 margin-top: 60px;
                 .lg_no{
                     height: 89px;
                     >a{
                        display: inline-block;
                        width: 89px;
                        height: 89px;
                        float: left;
                        >i{
                            font-size: 60px;
                        }
                     }
                     >.u-info{
                         float: left;
                         >h3{
                             line-height: 29px;
                            color: #333;
                            font-size: 17px;
                         }
                         >a{
                             display: block;
                             width: 116px;
                             height: 40px;
                             border: 1px solid #66a4ff;
                             color: #66a4ff;
                             text-align: center;
                             line-height: 40px;
                             margin-top: 10px;
                             background: #f2f7ff;
                         }
                     }
                 }
            }
            >.intr{
               padding: 0px 26px;
               padding-top: 20px;
               >h3{
                   height: 33px;
                   font-size: 19px;
                    color: #e21b05;
               }
               >p{
                   line-height: 28px;
                    font-size: 16px;
                    color: #b9b9b9;
               }
            }
        }
    }
    >.right{
        width: 760px;
        height: 100%;
        float: right;
        background: #FFF;
        padding: 17px 28px;
        .title{
            height: 45px;
             border-bottom: 1px solid #F6F6F6;
            line-height: 35px;
             text-indent: 21px;
             font-size: 17px;
             border-bottom: 1px solid #F6F6F6;
             position: relative;
             &::before{
                 content:"";
                 width: 2px;
                 height: 20px;
                 background-color: #5298ff;
                 position: absolute;
                 top: 8px;
                 left: 0;
             }
             >.left{
                 float: left;
                 width: 100px;
             }
             >.icon{
                 float: right;
                 line-height: 35px;
                 font-size: 20px;
             }
        }
        >.r-content{
            height: 650.5px;
            width: 100%;
            >ul{
                padding-top: 20px;
                height: 100%;
                >li{
                    padding-right: 25px;
                    width: 50%;
                    margin-bottom: 13.5px;
                    text-align: center;
                    float: left;
                    >a{
                         height: 35px;
                          font-size: 15px;
                          color: #333;
                          max-width: calc(100% - 60px);
                          text-overflow: ellipsis;
                          white-space: nowrap;
                          overflow: hidden;
                          position: relative;
                          &::before{
                              content:"";
                              width: 5px;
                              height: 5px;
                              background-color: #ccc;
                              border-radius: 50%;
                              position: absolute;
                              top:6px;
                              left: -8px;
                          }
                          >.ad{
                              display: inline-block;
                              width: 37px;
                              height: 20px;
                              color:#ccc;
                              border: 1px solid #ccc;
                              font-size: 5px;
                          }
                    }
                    >.new-time{
                        width: 60px;
                        display: inline-block;
                        height: 35px;
                        padding-left: 10px;
                        color:red;
                    }
                }
            }
             >.page{
               height: 35px;
               position: relative;
               overflow: hidden;
               >div{
                   width: 50%;
                   height: 100%;
                   border: 1px solid #ccc;
                   float: left;
                   color: #666;
                    line-height: 35px;
                    text-align: center;
                    cursor: pointer;
                    font-size: 14px;
               }
               >.cfx{
                    display: block;
                    width: 84px;
                     height: 25px;
                     float: left;
                     float: left;
                     position: absolute;
                     z-index: 1;
                     top: 50%;
                     transform: translate(-50%, -50%) rotate(-42deg);
                     left: 50%;
                     border-bottom: 1px solid #efefef;
                     border-top: 1px solid #efefef;
                    background: white;
               }
             }
        }
    }
}
</style>
