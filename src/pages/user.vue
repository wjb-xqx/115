<template>
    <div class="user">
        <!-- 导航详情页 -->
        <com-header></com-header> 
        <div class="container">
            <div class="c">
                <div class="left">
                    <el-menu
                     default-active="2"
                     class="el-menu-vertical-demo"
                     @open="handleOpen"
                     @close="handleClose">
                     <el-menu-item index="1">
                       <i class="iconfont">&#xe720;</i>
                       <span slot="title">我的信息</span>
                     </el-menu-item>
                     <el-menu-item index="1">
                       <i class="el-icon-edit-outline"></i>
                       <span slot="title">在线投稿</span>
                     </el-menu-item>
                      <el-menu-item index="3">
                       <i class="el-icon-goods"></i>
                       <span slot="title">投稿记录</span>
                     </el-menu-item>
                      <el-menu-item index="4">
                       <i class="el-icon-tickets"></i>
                       <span slot="title">个人主页</span>
                     </el-menu-item>
                      <el-menu-item index="5">
                       <i class="el-icon-setting"></i>
                       <span slot="title">我的评价</span>
                     </el-menu-item>
                      <el-menu-item index="6">
                       <i class="el-icon-circle-check"></i>
                       <span slot="title">安全绑定</span>
                     </el-menu-item>
                      <el-menu-item index="7">
                       <i class="el-icon-news"></i>
                       <span slot="title">开放接口</span>
                     </el-menu-item>
                      <el-menu-item index="8">
                       <i class="el-icon-news"></i>
                       <span slot="title">修改密码</span>
                     </el-menu-item>
                    </el-menu>
                </div>
                 <div class="right">
                     <!-- 有发表内容 -->
                    <div class="tg">
                        <div class="title">数据概述</div>
                        <ul class="data">
                            <li><b>1</b>
                               <span>累计投稿</span>
                            </li>
                            <li><b>1</b>
                               <span>通过次数</span>
                            </li>
                            <li><b>1</b>
                               <span>失败次数</span>
                            </li>
                        </ul>
                        <div class="title">投稿记录</div>
                        <ul class="content">
                            <li>
                                <div class="img"></div>
                                <div class="right">
                                    <h3>
                                        <span>待审核</span>
                                        <span>文章</span>
                                        <a href="#">标题</a>
                                    </h3>
                                    <div class="listContent">
                                         刷吧刷吧刷吧刷吧刷吧 
                                    </div>
                                    <div class="time">
                                        投稿时间：2018-12-19 20:13:34
                                    </div>
                                    <a href="#">查看详情</a>
                                </div>
                            </li>
                        </ul>
                        <p>没有更多了</p>
                    </div>
                    <!-- 无内容 -->
                    
                </div>
                </div>
             </div>
        <!-- <com-footer></com-footer> -->
    </div>
</template>

<script>
import ComHeader from "../common/ComHeader"
import changePassword from "./changePassword"
// import ComFooter from "../common/ComFooter"

export default {
    name:"user",
    components:{
        ComHeader,
        changePassword
        // ComFooter
    },
     

}
</script>

<style lang="less" scoped>
.container{
    margin-top: 55px;
    height: 1131px;
    >.c{
        display: flex;
      >.left{
        width: 200px;
        height: 570px;
        padding: 35px 0px;
        border-right: 1px solid #ececec;
        /deep/.el-menu{
            border-right: none;
            
        }
        /deep/.el-menu-item{
            line-height: 45px;
            font-size: 16px;
            margin-bottom: 25px;
            text-align: center;
        }
      }
      >.right{
          flex: 1;
          padding: 35px 0px;
          padding-left: 60px;
      }
     }
}
.tg{
    >.title{
        line-height: 38px;
        font-size: 25px;
        margin-bottom: 25px;
    }
    >.data{
        height: 90px;
        margin-top: 15px;
        >li{
            float: left;
            width: 28%;
            margin-right: 3.5%;
            text-align: center;
        }
    }
    >.content{
        >li{
            height: 130px;
            margin-bottom: 15px;
            >.img{
                width: 200px;
                height: 130px;
                background-color: pink;
                float: left;
            }
            >.right{
                float: left;
                padding-left: 15px;
            }
        }
    }

}

</style>
