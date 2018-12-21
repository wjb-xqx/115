<template>
    <div class="user">
        <!-- 导航详情页 -->
        <com-header></com-header> 
        <div class="container">
            <div class="c">
                <div class="left">
                    <el-menu
                     default-active="2"
                     class="el-menu-vertical-demo">
                     <el-menu-item index="1">
                       <i class="iconfont">&#xe720;</i>
                       <router-link to="/myInfo" tag="span" slot="title">我的信息</router-link to="/myInfo" tag="span">
                     </el-menu-item>
                     <el-menu-item index="1">
                       <i class="el-icon-edit-outline"></i>
                       <router-link to="/zxtg" tag="span" slot="title">在线投稿</router-link>
                     </el-menu-item>
                      <el-menu-item index="3">
                       <i class="el-icon-goods"></i>
                       <router-link to="/tg" tag="span" slot="title">投稿记录</router-link>
                     </el-menu-item>
                      <el-menu-item index="4">
                       <i class="el-icon-tickets"></i>
                       <router-link to="/person" tag="span" slot="title">个人主页</router-link>
                     </el-menu-item>
                      <el-menu-item index="5">
                       <i class="el-icon-setting"></i>
                       <router-link to="/tg" tag="span" slot="title">我的评价</router-link>
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
                       <router-link to="/changePassword" tag="span" slot="title">修改密码</router-link to="/changePassword" tag="span">
                     </el-menu-item>
                    </el-menu>
                </div>
                 <div class="right">
                   
                    <router-view/>
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
        changePassword,
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
/deep/#editor{
    width: 800px;
}
 /deep/#edui1{
    width: 800px!important;
    // height: 800px!important;
}
/deep/#edui1_iframeholder{
    height: 300px!important;
}

</style>
