<template>
    <div class="secoend container">
        <div class="left">
            <div class="text">
                <div class="title">人气榜单</div>
                <div class="types">
                    <a href="#" class="hover">本月冠军</a>
                    <a href="#">总榜之巅</a>
                </div>
            </div>
            <div class="contanter">
                    <div class="MaxBox">
                          <ul>
                              <li>
                                  <a href="#"><i>1</i> Gm刺激战场845处理器专用版稳到飞上天 </a>
                              </li>
                              <li>
                                  <a href="#"><i>1</i> Gm刺激战场845处理器专用版稳到飞上天 </a>
                              </li>
                              <li>
                                  <a href="#"><i>1</i> Gm刺激战场845处理器专用版稳到飞上天 </a>
                              </li>
                              <li>
                                  <a href="#"><i>1</i> Gm刺激战场845处理器专用版稳到飞上天 </a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                  <a href="#"><i>1</i> Gm刺激战场845处理器专用版稳到飞上天 </a>
                              </li>
                              <li>
                                  <a href="#"><i>1</i> Gm刺激战场845处理器专用版稳到飞上天 </a>
                              </li>
                              <li>
                                  <a href="#"><i>1</i> Gm刺激战场845处理器专用版稳到飞上天 </a>
                              </li>
                             
                           </ul>
                    </div>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <div class="text">随机推荐</div>
                <i class="el-icon-arrow-right icon"></i>
            </div>
                <ul class="containar">
                    <li>
                        <a href="#">
                            <img src="@/assets/images/seSj.png" alt="">
                            <div class="text">
                                 <h3>自己买的游戏版纯净的Win10最新版1803版</h3>
                                 <p>2018-08-10</p>
                             </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="@/assets/images/seSj.png" alt="">
                            <div class="text">
                                 <h3>自己买的游戏版纯净的Win10最新版1803版</h3>
                                 <p>2018-08-10</p>
                             </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="@/assets/images/seSj.png" alt="">
                            <div class="text">
                                 <h3>自己买的游戏版纯净的Win10最新版1803版</h3>
                                 <p>2018-08-10</p>
                             </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="@/assets/images/seSj.png" alt="">
                            <div class="text">
                                 <h3>自己买的游戏版纯净的Win10最新版1803版</h3>
                                 <p>2018-08-10</p>
                             </div>
                        </a>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"Scoend"
}
</script>

<style lang="less" scoped>
.secoend{
    height: 500px;    
    >.left{
        background-color: #fff;
        width: 760px;
        height: 100%;
        padding: 18px 25px;
        float: left;
        >.text{
             height: 45px;
             line-height: 35px;
              border-bottom: 1px solid #F6F6F6;
            >.title{
               text-indent: 15px;
               font-size: 17px;
               position: relative;
               float: left;
              &::before{
                  content: "";
                  width: 3px;
                  height: 20px;
                  background-color: blue;
                  position: absolute;
                  top: 10px;
                  left: 0;
              }
          } 
          >.types{
              float: right;
              >a{
                  width: 80px;
                  height: 30px;
                  display: inline-block;
                  text-align: center;
              }
              >.hover{
                    background: #eaf2ff;
                    color: #5a9dff;
                    border-radius: 6px;
              }
          }
        }
         >.contanter{
              width: 100%;
              height: 437px;
              overflow: hidden;
            >.MaxBox{
                width: 1430px;
                height: 100%;
                >ul{
                    height: 100%;
                    width: 710px;
                    margin-top: 27px;
                    margin-bottom: 32px;
                    float: left;
                    >li{
                        float: left;
                         width: 50%;
                        padding-right: 5px;
                        margin-bottom: 32px;
                        >a{
                            color: #333;
                        }
                        i{
                            display: inline-block;
                            font-style: normal;
                            width: 33px;
                            height: 23px;
                            background-color: #ff2a2a;
                            color:#fff;
                            text-align: center;
                            border-radius: 15px;
                        }
                      }
                }
            }
          }
    }
    >.right{
        width: 430px;
        height: 100%;
        float: right;
        padding: 18px 25px;
        background-color: #fff;
        >.title{
             position: relative;
            height: 45px;
            line-height: 35px;
            text-indent: 21px;
            font-size: 17px;
            border-bottom: 1px solid #F6F6F6;
            &::before{
                content: "";
                width: 2px;
                height: 18px;
                background-color: blue;
                position: absolute;
                top: 10px;
                left: 3px;
            }
            >.text{
                float: left;
                color:#000;
            }
            >i{
                float: right;
                margin-top: 5px;
                font-size: 25px;
            }
        }
        >.containar{
            height: 371px;
            >li{
                height: 65px;
                margin-top: 30px;
                margin-bottom: 37px;
                >a{
                    display: block;
                    height: 100%;
                    >img{
                        width: 100px;
                        float: left;
                    }
                    >.text{
                        width: 257px;
                       float: right;
                       >h3{
                            font-size: 16px;
                            height: 18px;
                            line-height: 18px;
                       }
                       >p{
                           height: 20px;
                           margin-top: 20px;
                       }
                    }
                }
            }



        }
    }
}

</style>

