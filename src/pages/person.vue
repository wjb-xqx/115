<template>
    <div class="person">
        <div class="container">
            <!-- 发帖排行用户信息 -->
             <div class="header clearfix">
                  <a href="/" class="logo">
                  <img src="@/assets/images/logo.png" alt="">
                  </a>
                  <img src="@/assets/images/yxcz.png" alt="" class="logo-right-decation">
                  <form action="" class="search clearfix">
                      <input type="text" class="search-input" placeholder="快来搜一搜吧！">
                      <input type="submit" class="search-submit iconfont" value="">
                  </form>
             </div>
         </div>
        <div class="indexContainer clearfix">
            <div class="container">
                <div class="banImg">
                        <div class="left">
                        <img :src="'https://www.115z.com' + List.avatar" alt="">
                        <div class="info">
                            <div class="name">{{List.nick}}{{List.email || ''}}</div>
                             <div class="content">
                                 <span>投稿次数：{{List.likes_sum || 0}}</span>
                                 <span>通过次数：{{List.likes_sum || 0}}</span>
                                 <span>获取点赞：{{List.likes_sum || 0}}</span>
                                 <span>评价：1</span>
                             </div>
                             <span>金牌作者</span>
                        </div>
                        </div>
                        <div class="right">
                            <a @click="getQq()"  target="_blank">联系Ta</a>
                            <a href="#">进入网站</a>
                        </div>
                </div>
            </div>
        </div>
        <div class="container">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                     <el-tab-pane label="主页" name="first">
                         <ul class="myinfo">
                             <li><span>Ta的昵称</span><span>一梦     ʚ</span></li>
                             <li><span>当前级别</span><span>一梦     ʚ</span></li>
                             <li><span>性别</span><span>一梦     ʚ</span></li>
                             <li><span>Ta的QQ</span><span>一梦     ʚ</span></li>
                             <li><span>已投稿</span><span>一梦     ʚ</span></li>
                             <li><span>通过</span><span>一梦     ʚ</span></li>
                             <li><span>评论</span><span>一梦     ʚ</span></li>
                             <li><span>注册时间</span><span>一梦     ʚ</span></li>
                             <li><span>唯一ID</span><span>一梦     ʚ</span></li>
                         </ul>
                     </el-tab-pane>
                     <el-tab-pane label="投稿" name="second">
                         <h3>个人简介</h3>
                         <p>一梦QQ:1464164 全网活动分享群：332987422</p>
                         <h4>投稿记录</h4>
                         <ul>
                             <router-link tag="li" to="/DetailsPage">
                                 <img src="@/assets/images/tougao.jpeg" alt="">
                                 <div class="text">
                                     <span>软件</span>
                                     <span>最新手游飞车梅花一建改s</span>
                                 </div>
                             </router-link>
                           
                         </ul>
                     </el-tab-pane>
                     <el-tab-pane label="评价" name="third">
                         <ul class="clearfix">
                             <li>
                                 <p>115资源网牛逼支持一下~</p>
                                <div class="text">2018-08-15 11:21:33</div>
                                <div class="address">来自：庆祝115资源网首次突破1万IP送红包</div>
                             </li>
                         </ul>
                     </el-tab-pane>
                 </el-tabs>
        </div>
    </div>
</template>

<script>
import ComHeader from "../common/ComHeader"


export default {
    name:"person",
    data() {
      return {
        activeName: 'second',
        List:[]
      };
    },
    created(){
        this.getPerson()
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getPerson(){
          let personUrl = "https://www.115z.com/u_api/Author_info.html?uuid=" + this.$route.params.id +
         '&app_key=aa5df25a43369803d9ef26851fb7d717';
          this.$axios.get(personUrl)
          .then(res => {
              if(res.data.code === 1){
                  console.log(res)
                  this.List = res.data.data
              }
          })
      },
      getQq(qq) {
         this.$confirm('请不要和作者发生任何 金钱交易 注意防范网络诈骗保护好自己的财产!', '提示', {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           type: 'warning'
         }).then(() => {
           if (qq === "---") {
             this.$notify.error({
               title: "错误",
               message: "此账号已经被永久封出!"
             });
           } else {
             window.open("http://wpa.qq.com/msgrd?v=3&uin=" + qq + "&site=qq&menu=yes", "_blank");
           }
         }).catch(() => {
           this.$message({
             type: 'info',
             message: '已取消删除'
           });
         });
        }
    },
    components:{
       ComHeader,
    }
}
</script>

<style lang="less" scoped>
.container{
        .header{
            height: 108px;
            >.logo{
             display: block;
             width: 190px;
             float: left;
             padding-top: 16px;
             >img{
                 width: 100%;
                  }
             }
             >.logo-right-decation{
                 height: 80px;
                 margin: 14px 0;
                 margin-left: 100px;
             }
             >.search{
                 width: 350px;
                 float: right;
                 margin-top: 36px;
                 position: relative;
                 >.search-input{
                     width: 100%;
                     height: 40px;
                     background-color: #ccc;
                     border-radius: 30px;
                     padding-left: 20px;
                     color: #5f5f5f;
                 }
                 >.search-submit{
                     position: absolute;
                     top: 0;
                     right: 15px;
                     line-height: 40px;
                     font-size: 20px;
                     background-color: #ccc;
                 }
             }
        }
}
.indexContainer{
    margin-top: 55px;
    width: 100%;
    
    >.container{
        >.banImg{
            height: 166px;
            padding: 30px 30px;
                    // height: 327px;
            // background: url(../../assets/images/person.jpeg) no-repeat;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #ccc;
            // background-color: rgba(0,0,0,.2);
            // filter: blur(40px);
            z-index:-1;
            color:#fff;
             >.left{
                 width: 720px;
                 height: 147px;
                 float: left;
                 >img{
                      float: left;
                     width: 127px;
                     height: 127px;
                     border-radius: 50%;
                 }
                 >.info{
                     float: left;
                     padding-left: 20px;
                 }
             }
             >.right{
                 width: 205px;
                 height: 127px;
                 float: right;
                 >a{
                     display: block;
                     width: 205px;
                     height: 45px;
                     line-height: 45px;
                     text-align: center;
                     margin-top: 15px;
                     border-radius: 30px;
                     font-size: 15px;
                     color:#fff;
                     &:nth-child(1){
                         background: #ff7043;
                          border: 1px solid #ff7043;
                     }
                     &:nth-child(2){
                             border: 1px solid #FFF;
                             color: #ff7043;
                             background: #FFF;
                     }
                 }
             }
        }
    }
}
.myinfo{
    >li{
        height: 45px;
        margin-bottom: 15px;
        >span{
            &:nth-child(1){
                float: left;
                max-width: 45%;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 18px;
            }
             &:nth-child(2){
                float: right;
                max-width: 45%;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 18px;
            }
        }
    }
}
#pane-second{
    >h3{
        line-height: 45px;
    }
    >p{
        line-height: 30px;
    }
    >h4{
        line-height: 45px;
    }
    >ul{
        width: 100%;
        height: 1000px;
        >li{
           width: 24%;
           float: left;
           height: 240px;
           margin-right: 1%; 
           margin-top: 15px;
           border: 1px solid #ccc;
           &:nth-child(4n){
               margin-right: 0;
           }
           >img{
               width: 100%;
               height: 170px;
           }
           >.text{
               line-height: 40px;
               font-size: 15px;
               text-align: center;
               >span:nth-child(1){
                   width: 50px;
                   height: 27px;
                   border: 1px solid #ccc;
               }
           }
        }
    }
}
#tab-third{
    >ul{
        height: 1000px;
        li{
            width: 100%;
            height: 60px;
            line-height: 60px;
            margin: 0  15px;
            border-bottom: 1px solid #eee;
        }
    }
}
</style>

