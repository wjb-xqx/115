<template>
    <div class="index">
        <!-- 导航详情页 -->
        <com-header></com-header> 
        <!-- 软件 -->
        <div class="indexContainer clearfix" v-if="List.data_class === '软件'">
            <div class="container clearfix">
                <div class="import clearfix">
                    <div class="left">
                        <div class="img">
                            <img :src="'https://www.115z.com/' + List.cover_img"  alt="">
                        </div>
                    </div>
                    <div class="right">
                        <h3>{{List.title}}</h3>
                        <div class="info clearfix">
                            <span>更新时间：<b>{{List.publish_time}}</b></span>
                            <span>附件大小：<b>{{List.publish_time}}</b></span>
                            <span>语言种类：<b>简体中文</b></span>
                            <span>所属分类：<b>{{List.name}}</b></span>
                            <span>运行平台：<b>Window</b></span>
                            <span>投稿作者：<b>{{List.nick}}</b></span>
                            <span>围观：<b>{{List.all_views}}</b></span>
                            <span>获取点赞：<b>{{List.likes}}次</b></span>
                            <span>回复：<b>{{List.publish_time}}次</b></span>
                        </div>
                        <div class="down">
                            <a :href="'https://down.115z.com/' + List.down_link" target="_blank">本地下载</a>
                            <a v-if="List.sky_link != ''" :href="List.sky_link" target="_blank">备用下载</a>
                        </div>
                    </div>
                </div>
                <div class="soft-intr clearfix">
                    <div class="left clearfix">
                        <h3>简要介绍</h3>
                        <div class="soft-content" v-html="List.content">
                        </div>
                        <div class="tj">
                            <h3>同类推荐</h3>
                            <ul class="clearfix">
                                <li>
                                    <a href="#">
                                        <div class="left">
                                            <div class="img"><img :src="'https://www.115z.com/' + List.cover_img" alt=""></div>
                                        </div>
                                        <div class="right">
                                            <p>{{List.title}}</p>
                                            <span>查看</span>
                                        </div>
                                    </a>
                                </li>
                               <li>
                                    <a href="#">
                                        <div class="left">
                                            <div class="img"><img :src="'https://www.115z.com/' + List.cover_img" alt=""></div>
                                        </div>
                                        <div class="right">
                                            <p>{{List.title}}</p>
                                            <span>查看</span>
                                        </div>
                                    </a>
                                </li>
                                 <li>
                                    <a href="#">
                                        <div class="left">
                                            <div class="img"><img :src="'https://www.115z.com/' + List.cover_img" alt=""></div>
                                        </div>
                                        <div class="right">
                                            <p>{{List.title}}</p>
                                            <span>查看</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left">
                                            <div class="img"><img :src="'https://www.115z.com/' + List.cover_img" alt=""></div>
                                        </div>
                                        <div class="right">
                                            <p>{{List.title}}</p>
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
                            <router-link :to="'/person/' + List.uuid" class="img">
                                <img :src="'https://www.115z.com' + userData.avatar || '../../static/img/default_head.png'" alt="">
                                
                            </router-link>
                            <div class="right">
                                <div class="title">
                                    <p>{{userData.nick}}</p>
                                    <span>qq{{ userData.qq || 'qq加载失败...'}} 个性签名：{{userData.sign || '签名加载失败...'}}</span>
                                </div>
                            </div>
                        </router-link>
                        <ul class="number">
                                    <li>
                                        <p>投稿次数</p>
                                        <span>{{List.day_views || 0}}</span>
                                    </li>
                                     <li>
                                        <p>投稿次数</p>
                                        <span>{{List.all_views || 0}}</span>
                                    </li>
                                     <li>
                                        <p>投稿次数</p>
                                        <span>{{List.likes || 0}}</span>
                                    </li>
                        </ul>
                         <div class="lx">
                             <a @click="qq('123456')" target="_blank">联系作者</a>
                             <a href="#" target="_blank">他的主页</a>
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
        <!-- 文章 -->
        <div class="indexContainer1 clearfix" v-if="List.data_class === '文章'">
            <div class="container clearfix">
                <div class="soft-intr clearfix">
                    <div class="left clearfix">
                        <h4>{{List.title}}</h4>
                        <span>{{List.publish_time}}投稿作者：{{List.nick}}安全组：冰哥围观人数：{{List.all_views}}
                            点赞：{{List.likes}}次</span>
                        <div class="content">
                            <!-- v-html="List.content" -->
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
                                <span>已有{{List.likes}}次赞</span>
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
                        <router-link :to="'/person/' + List.uuid" tag="div" class="info">
                            <div class="img"><img :src="'https://www.115z.com' + userData.avatar" :alt="userData.nick"></div>
                            <div class="right">
                                <div class="title">
                                    <p>{{userData.nick}}</p>
                                    <span>{{userData.sign}}</span>
                                </div>
                            </div>
                        </router-link>
                        <ul class="number">
                                    <li>
                                        <p>投稿次数</p>
                                        <span>{{List.day_views || 0}}</span>
                                    </li>
                                     <li>
                                        <p>投稿次数</p>
                                        <span>{{List.all_views || 0}}</span>
                                    </li>
                                     <li>
                                        <p>投稿次数</p>
                                        <span>{{List.likes || 0}}</span>
                                    </li>
                                </ul>
                                <div class="lx">
                                    <a @click="qq('123456')" target="_blank">联系作者</a>
                                    <a href="#" target="_blank">他的主页</a>
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
import ComHeader from "../common/ComHeader"
import ComFooter from "../common/ComFooter"

export default {
    name:"DetailsPage",
    data(){
        return{
            List:Array,
            userData:[]
        }
    },
    components:{
       ComHeader,
       ComFooter
    },
    created(){
        this.getDetail()
    },
    methods:{
        qq(qq){
            if(qq == '') {
              this.$alert('该作者没有填写QQ联系方式，无法联系~', '信息', {
                confirmButtonText: '确定',
                callback: action => {
                  this.$message({
                    showClose: true,
                    message: '请在文章下方评论,联系作者哦~'
                  });
                }
              });
            }else if (qq == '---') {
              this.$message.error('此用户已经被禁用');
            }else {
              this.$alert('请不要和作者发生任何<font color="red"> 金钱交易 </font> 注意防范网络诈骗 保护好自己财产！', '信息', {
                confirmButtonText: '继续联系',
                cancelButtonText: '取消',
                dangerouslyUseHTMLString: true
              }).then(() => {
                window.open("http://wpa.qq.com/msgrd?v=3&uin=" + qq + "&site=qq&menu=yes", "_blank");
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消'
                });          
              });
            }
          },
        getDetail(){
            let htmlUrl = 'https://www.115z.com/u_api/Content_info.html?id=' + this.$route.params.id +
            '&app_key=aa5df25a43369803d9ef26851fb7d717'
            this.$axios.get(htmlUrl)
            .then(res => {
                if(res.data.code === 1){
                     this.List = res.data.data;
                    //  console.log(res)
                     let userUrl = 'https://www.115z.com/u_api/Author_info.html?uuid='+res.data.data.uuid+
                     '&app_key=aa5df25a43369803d9ef26851fb7d717';
                          this.$axios.get(userUrl)
                          .then(res => {
                            return this.userData = res.data.data;
                            // console.log(res)
                         })
                         .catch(err => {
                            this.$message.error('数据请求失败~请联系站长');
                        })
                     
                }else{
                    this.$router.push({path: '/'});
                }
            })
            .catch(err => {
              this.$message.error('数据请求失败~请联系站长');
           })
        }
    }
}
</script>

<style lang="less" scoped>
// 软件
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
                         width: 350px;
                         height: 267px;
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
                                        >img{
                                            width: 100%;
                                            height: 100%;
                                        }
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
// 文章
.indexContainer1{
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
                    // line-height: 30px;
                    width: 760px;
                    margin-bottom: 15px;
                     font-size: 17px;
                    color:#333;
                     p{
                        display: inline-block;
                        height: 30px;
                        overflow: hidden;
                        img{
                            width: 760px!important;
                        }
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
                        width: 137px;
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
