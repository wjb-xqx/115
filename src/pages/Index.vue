<template>
    <div class="index">
        <com-header></com-header> 
        <div class="indexContainer clearfix">
               <!-- 发帖排行 -->
            <div class="contribute">
                <div class="container hotTop">
                         <i></i>
                         <div class="left">
                             <a v-for="(item,index) in addHover" :key="index" @mouseenter="changeHover(index)"
                             :class="{hover:changHover== index}" 
                             >近期投稿</a>
                         </div>
                         <div class="right" >
                             <div class="rightOverflow clearfix" :class="{rightOverflow1 : rightOverflow1,rightOverflow2 : rightOverflow2}">
                                 <div class="rightMain" >
                                     <ul>
                                         <router-link tag="li" to="/person" v-for="(item,index) in rotationData" :key="index">
                                            <a href="#">
                                                 <div class="img">
                                                    <img src="@/assets/images/person.jpeg" alt="">
                                                </div>
                                             <h3>{{item.name}}</h3>
                                            </a>
                                         </router-link>
                                     </ul>
                                 </div>
                                  <div class="rightMain">
                                     <ul>
                                         <li v-for="(item,index) in rotationData" :key="index">
                                            <a href="#">
                                                 <div class="img">
                                                    <img src="@/assets/images/person.jpeg" alt="">
                                                </div>
                                             <h3>蓝天</h3>
                                            </a>
                                         </li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                 </div>
            </div>
             <!-- 广告 -->
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
             <!-- 最新更新 -->
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
                                      <!-- 登录前 -->
                                      <div class="u-info">
                                          <h3>您还没有登录哦~</h3>
                                          <a href="">立即登录</a>
                                      </div>
                                      <!-- 登陆后 -->
                                       <!-- <div class="u-info">
                                          <h3>用户8127~</h3>
                                          <a href="">我要投稿</a>
                                      </div> -->
                                </div>
                            </div>
                            <div class="intr">
                                <h3>投稿拿奖励</h3>
                                <p>支持在线投稿<br/>优质教程一律送现金</p>
                            </div>
                    </div>
                        
                 </div>
                <div class="right" v-loading="loading">
                    <div class="title">
                        <div class="left">最近更新</div>
                         <i class="el-icon-arrow-right icon"></i>
                    </div>
                    <div class="r-content">
                        <ul>
                            <li v-for="(item,index) in upList" :key="index">
                                <router-link :to="'/DetailsPage/' + item.id" tag="a"   :title="item.title">
                                    <i class="ad">{{item.data_class || ''}}</i>{{item.title}}
                                </router-link>
                                <font class="new-time">12-16</font>
                            </li>
                        </ul>
                        <div class="page">
                            <div class="Previous" @click="Previous">上一页</div>
                            <b class="cfx"></b>
                            <div class="next" @click="next">下一页</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 淘宝优惠券 -->
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
            <!-- 人气排名 -->
             <div class="secoend container">
                  <div class="left">
                      <div class="text">
                          <div class="title">人气榜单</div>
                          <div class="types">
                              <a href="#" :class="{hover:changeBig==index}" v-for="(item,index) in listChange"
                              :key="index" @mouseenter="secoendChange(index)">{{item.name}}</a>
                          </div>
                      </div>
                      <div class="contanter">
                    <div class="MaxBox" :class="{leftOverflowX:leftOverflowX,leftOverflowy:leftOverflowy}">
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
             <!-- 板块更新 -->
             <div class="updata container clearfix">
                     <div class="title">板块更新
                         <div class="type">
                             <a class="hover">辅助 / 源码 / 实用</a>
                             <a >软件 / 活动 / 其它</a>
                         </div>
                     </div>
                     <div class="container ">
                         <ul>
                             <li>
                    <a href="#">
                        <div class="img">
                            <img src="@/assets/images/updata1.jpeg" alt="">
                            <span>万能影视破解版 免费看最新电影电视</span>
                        </div>
                    </a>
                             </li>
                         </ul>
                         <ul>
                             <li>
                                 <a href="#">
                                     <div class="img">
                                         <img src="@/assets/images/updata1.jpeg" alt="">
                                         <span>万能影视破解版 免费看最新电影电视</span>
                                     </div>
                                 </a>
                             </li>
                              <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>XH12.16最新版变态刺激</span>
                                 </a>
                             </li>
                              <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>XH12.16最新版变态刺激</span>
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>XH12.16最新版变态刺激</span>
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>ML刺激战变态脚本</span>
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>ML刺激战场12.16新版本稳定多功能变态脚本</span>
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>XH12.16最新版变态刺激</span>
                                 </a>
                             </li>
                                      </ul>
                                      <ul>
                             <li>
                                 <a href="#">
                                     <div class="img">
                                         <img src="@/assets/images/updata1.jpeg" alt="">
                                         <span>万能影视破解版 免费看最新电影电视</span>
                                     </div>
                                 </a>
                             </li>
                              <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>XH12.16最新版变态刺激</span>
                                 </a>
                             </li>
                              <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>XH12.16最新版变态刺激</span>
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>XH12.16最新版变态刺激</span>
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>ML刺激战变态脚本</span>
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>ML刺激战场12.16新版本稳定多功能变态脚本</span>
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     <span>[ 游戏辅助 ]</span>
                                     <span>XH12.16最新版变态刺激</span>
                                 </a>
                             </li>
                         </ul>
                     </div>
            </div>
            <!-- 实时投稿 -->
            <div class="other container">
                <div class="left">
                         <h3>实时投稿</h3>
                             <ul>
                             <li>
                            <a href="#">
                                <img src="@/assets/images/default_head.png" alt="">
                            </a>
                            <div class="text">
                                <a href="#">用户02655</a>
                               <span>
                                   <b>等待审核</b>在2018-12-16 在2018-12-16 18:55:14投稿了：印度合伙人超清中字资源
                                </span> 
                             </div>
                             </li>
                             <li>
                            <a href="#">
                                <img src="@/assets/images/default_head.png" alt="">
                            </a>
                            <div class="text">
                                <a href="#">用户02655</a>
                               <span>
                                   <b>等待审核</b>在2018-12-16 在2018-12-16 18:55:14投稿了：印度合伙人超清中字资源
                                </span> 
                             </div>
                             </li>
                             <li>
                            <a href="#">
                                <img src="@/assets/images/default_head.png" alt="">
                            </a>
                            <div class="text">
                                <a href="#">用户02655</a>
                               <span>
                                   <b>等待审核</b>在2018-12-16 在2018-12-16 18:55:14投稿了：印度合伙人超清中字资源
                                </span> 
                             </div>
                             </li>
                         </ul>
                   </div>
                   <div class="right">
                        <h3>用户兴趣谱图</h3>
                        <div class="classification">
                            <a href="#">其他资源</a>
                            <a href="#">网络软件</a>
                            <a href="#">游戏辅助</a>
                            <a href="#">活动线报</a>
                            <a href="#">使用教程</a>
                            <a href="#">网站源码</a>
                        </div>
                     </div>
            </div>
            <friendship-link></friendship-link>
        </div>
        <com-footer></com-footer>
       
    </div>
</template>

<script>
import ComHeader from "../common/ComHeader"
import Contribute from "../components/Index/components/Contribute"
import FriendshipLink from "../components/Index/components/FriendshipLink"
import ComFooter from "../common/ComFooter"
export default {
    name:"Index",
    data(){
        return{
            changHover:0,
            loading: true,
            //投稿排名
             addHover:[{
                id:'001',
                     name:'近期投稿'
                 },{
                     id:'002',
                     name:'本月冠军'
                 }],
              upList:[],
              rightOverflow1: false,
              rightOverflow2: false,
              rotationData: [{
                  id:"001",
                  name:'酷酷的旧爱',
                  url:'http://localhost:8081/static/img/default_head.png'
              },{
                  id:"002",
                  name:'bilibili',
                  url:'http://localhost:8081/static/img/default_head.png'
              }],
              //人气排名
               listChange:[{
                  id:'1',
                     name:'本月冠军'
                 },{
                     id:'2',
                     name:'总榜之巅'
                 }],
                 changeBig:0,
                 leftOverflowX:false,
                 leftOverflowy:false,
                 page:1,
                 pages:0,
                 now_page:1
        }
    },
    created(){
        this.getUpdata()
    },
    methods:{
         getUpdata(){
             let page = this.page;
           let updatUrl = "https://www.115z.com/u_api/Update_column.html?&app_key=aa5df25a43369803d9ef26851fb7d717"
           this.$axios.get(updatUrl,{
               params:{
                   page:page,
                   limit:26
               }
           })
           .then(res => {
                this.upList = res.data.data.list
                this.loading = false
                this.pages = res.data.data.pages
               this.now_page = res.data.data.now_page

           })
           .catch(err => {
              this.$message.error('数据请求失败~请联系站长');
           })
       },
       //下一页
       next(){
           this.page++
           if(this.page> this.pages / 26){
                this.$alert('已到最后一页了', '你好，官人', {
                })
                return
           }
           this.getUpdata()
       },
       Previous(){
           this.page--
           if(this.page<0){
                this.$alert('已经是第一页了', '你好，官人', {
                })
           }
           this.getUpdata()
       },
        //   投稿排名上下滑动
       changeHover(index){
           this.changHover =index;
           if(index!=0) {
               this.rightOverflow1 = true;
               this.rightOverflow2 = false;
               console.log(index)
           }else{
               this.rightOverflow2 = true;
               this.rightOverflow1 = false;
           }
       },
       //    人气榜单左右滑动
       secoendChange(index){
           this.changeBig = index;
           if(index==1){
               this.leftOverflowX = true
               this.leftOverflowy = false
           }else{
                this.leftOverflowy = true
                this.leftOverflowX =false
           }
       }
   },
    components:{
       ComHeader,
       Contribute,
       FriendshipLink,
       ComFooter,
    },

}
</script>

<style lang="less">
.indexContainer{
    margin-top: 55px;
    width: 100%;
    background-color: #ccc;
}
.container{
    padding-right: 0px!important;
    padding-left: 0px!important;
}
// 发帖排名
.hotTop{
    margin-top: 10px;
    height: 147px;
    background-color: #fff;
    position: relative;
      padding: 22px 20px;
    >i{
        display: block;
        width: 60px;
        height: 60px;
        background-image: url(../assets/images/tg-ph.png);
        background-size: contain;
        position: absolute;
        z-index: 99;
        top: 0;
        right: 0;
    }
    >.left{
        width: 121px;
        height: 103px;
        float: left;
        position: relative;
        >a{
             width: 121px;
             height: 45px;
             display: block;
             font-size: 15px;
             cursor: pointer;
             color: #989898;
             line-height: 45px;
             text-align: center;
             border-radius: 2px;
             margin-bottom: 13px;
             background: #f6f6f6;
             &.hover{
                 color: #FFF;
                 position: relative;
                 background: #5298ff;
               &::after{
               content: "";
                width: 0;
                height: 0;
                z-index: 1;
                top: 15.5px;
                right: -10px;
                position: absolute;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-left: 10px solid #5298ff;
               }
              }
            }
        }
    >.right{
        float: left;
        width: 1013px;
        height: 115px;
        margin-left: 26px;
        overflow: hidden;
        >.rightOverflow{
            height: 250px;
            width: 100%;
            >.rightMain{
                width: 100%;
                height: 110px;
                margin-bottom: 20px;
                >ul{
                    height: 100%;
                    li{
                        float: left;
                        width: 78px;
                        height: 110px;
                        margin-right: 10px;
                        >a{
                            display: inline-block;
                            width: 78px;
                            height: 100%;
                            .img{
                                    width: 78px;
                                    height: 78px;
                                img{
                                     width: 78px;
                                    height: 100%;
                               }
                            }
                            >h3{
                                height: 25px;
                                margin-top: 7px;
                                font-size: 14px;
                                text-align: center;
                                 overflow: hidden;
                            }
                        }
                    }
                }
            }
        }
    }
    .rightOverflow1 {
        transition: 0.4s all;
        transform: translateY(-140px);
    }
     .rightOverflow2 {
        transition: 0.4s all;
        transform: translateY(0);
    }
}
// 广告
.ad{
    height: 70px;
    margin-top: 30px;
    background-color: #fff;
    >a{
        display: inline-block;
        width: 580px;
        float: left;
        height: 100%;
        position: relative;
        >img{
            width: 100%;
            height: 100%;
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
// 新闻更新
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
                    float: left;
                    margin-bottom: 15px;
                    height: 35px;
                    >a{
                         display: inline-block;
                         height: 35px;
                         width: 265px;
                         float: left;
                         line-height: 35px;
                          color: #333;
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
                            color:red;
                          }
                    }
                    >.new-time{
                        float: right;
                        width: 60px;
                        display: inline-block;
                        height: 35px;
                        line-height: 35px;
                        padding-left: 10px;
                        color:red;
                    }
                }
            }
             >.page{
               height: 35px;
               width: 100%;
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
// 淘宝优惠券
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
// 人气排名
.secoend{
    height: 500px; 
    margin-top: 15px;   
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
    .leftOverflowX {
        transition: 0.4s all;
        transform: translatex(-710px);
    }
    .leftOverflowy {
        transition: 0.4s all;
        transform: translatex(0px);
    }
}
// 板块更新
.updata{
        margin-top: 13px;
        background: #FFF;
        padding: 18px 25px;
        position: relative;
        >.title{
            height: 45px;
            line-height: 35px;
            text-indent: 21px;
            font-size: 17px;
            border-bottom: 1px solid #F6F6F6;
            padding-left: 10px;
            &::before{
                content: "";
                width: 2px;
                height: 20px;
                background-color: blue;
                position: absolute;
                top: 25px;
                left: 12px;
            }
            >.type{
                float: right;
                padding-left: 10px;
                >a{
                    margin-left: 13px;
                    font-size: 15px;
                    height: 30px;
                    line-height: 30px;
                    padding-right: 8px;
                    padding: 0 10px;
                    cursor: pointer;
                    &.hover{
                        background: #eaf2ff;
                        color: #5a9dff;
                        border-radius: 6px;
                    }
                }
            }
              .leftOverflowX {
                 transition: 0.4s all;
                 transform: translatex(-710px);
              }
              .leftOverflowy {
                  transition: 0.4s all;
                  transform: translatex(0px);
                  }
              }
        >.container{
            height: 544px;
            >ul{
                padding: 0 0 0 25px ;
                width: 31.33%;
                height: 100%;
                float: left;
                margin-right: 3%;
                &:nth-child(3){
                    margin-right: 0;
                }
                >li:nth-child(n+2){
                    margin-bottom: 16px;
                     width: 100%;
                     >a{
                        display: block;
                        line-height: 40px;
                        height: 40px;
                        font-size: 15px;
                        overflow: hidden;
                        >span:nth-child(1){
                            display: block;
                            color: #ababab;
                            margin-right: 7px;
                            float: left;
                            width: 80px;
                        }
                        >span:nth-child(2){
                            display: block;
                            float: left;
                            color:#000;
                            width: calc(100% - 7px - 80px );
                            text-overflow: ellipsis;
                             white-space: nowrap;
                             overflow: hidden;
                            line-height: 40px;
                            height: 40px;
                        }
                     }
                }
                >li:nth-child(1){
                    margin-bottom: 24px;
                    width: 100%;
                    height: 200px;
                    >a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        >.img{
                            width: 100%;
                            height: 100%;
                            position: relative;
                            >img{
                                width: 100%;
                               height: 100%;
                            }
                            >span{
                                display: inline-block;
                                width: 100%;
                                height: 40px;
                                background: rgba(0,0,0,.6);
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                text-align: center;
                                line-height: 40px;
                                color: #FFF;
                            }
                        }
                    }
                }
            }
        }
}
// 实时投稿
.other{
    height: 410px;
    margin-top: 10px;
    background-color: #fff;
   
    >.left{
        width: 690px;
        height: 100%;
        float: left;
        padding: 18px 25px;
        >h3{
            position: relative;
            height: 45px;
            line-height: 35px;
            text-indent: 21px;
            font-size: 17px;
            border-bottom: 1px solid #F6F6F6;
            &::before{
                content: '';
                width: 3px;
                height: 20px;
                background-color: blue;
                position: absolute;
                top: 7px;
                left: 5px;
            }
        }
        >ul{
            margin-top: 63px;
            >li{
                float: left;
                width: 50%;
                height: 80px;
                margin-bottom: 65px;
                >a {
                    display: inline-block;
                    width: 80px;
                    height: 80px;
                    float: left;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
                >.text{
                    float: left;
                    margin-left: 20px;
                    width: 220px;
                    height: 70px;
                    overflow: hidden;
                    >a{
                        display: block;
                        height: 21px;
                        line-height: 21px;
                        overflow: hidden;
                        color:#ccc;
                    }
                    >span{
                        margin-top: 5px;
                        display: block;
                        line-height: 23px;
                        height: 46px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        font-size: 14px;
                        color: #a7a7a7;
                    }
                }
            }
        }
    }
    >.right{
        padding: 18px 25px;
        width: 403px;
        height: 100%;
        float: right;
        >h3{
            position: relative;
             height: 45px;
             line-height: 35px;
             text-indent: 21px;
             font-size: 17px;
             border-bottom: 1px solid #F6F6F6;
              &::before{
                content: '';
                width: 3px;
                height: 20px;
                background-color: blue;
                position: absolute;
                top: 9px;
                left: 5px;
            }
        }
        >.classification{
            height: 300px;
            position: relative;
            background: url(../assets/images/bj.jpg) no-repeat 50%;
            >a{
                display: block;
                border-radius: 50%;
                 position: absolute;
                 
                text-align: center;
                color:#fff;
                font-size: 14px;
                &:nth-child(1),
                 &:nth-child(4),
                  &:nth-child(5),
                   &:nth-child(6){
                    width: 85.8px;
                    height: 85.8px;
                    background-color: #f45f93;
                    left: 35px;
                    top: 14px;
                    line-height: 85.8px;
                }
                &:nth-child(2){
                    width: 93.6px;
                    height: 93.6px;
                    background-color: #41d39d;
                    right: 26px;
                    top: 8px;
                    line-height: 93.6px;
                }
                 &:nth-child(3){
                    width: 117px;
                    height: 117px;
                    background-color: #ff5d5d;
                    width: 120px;
                    top: 79px;
                    left: 100px;
                    line-height: 117px;
                }
                &:nth-child(4){
                    left: 13px;
                    top: 206px;
                    background-color: #fea342;
                }
                &:nth-child(5){
                    left: 152px;
                     top: 225px;
                    background: #4197e2;
                }
                &:nth-child(6){
                   left: 250px;
                     top: 200px;
                    background: #8c8c8c;
                }
                &:hover{
                    opacity: .8;
                }
            }
        }
    }
}
</style>
