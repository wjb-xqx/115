<template>
<div class="comHearder">
    <div class="container">
       <div class="header clearfix">
            <a href="/" class="logo">
            <img src="@/assets/images/logo.png" alt="">
            </a>
            <img src="@/assets/images/yxcz.png" alt="" class="logo-right-decation" >
            <form action="" class="search clearfix">
                <input type="text" class="search-input" placeholder="快来搜一搜吧！" 
                ref="searchInput" v-model.trim="searchVal">
                <input type="submit" class="search-submit iconfont" value="" @click="getSearchinfo">
            </form>
       </div>
    </div>
    <nav>
         <div class="container">
             <ul class="nav nav-pills">
                <li role="presentation"><router-link to="/" tag="a" >首页</router-link></li>
                <router-link :to="'/list/' + item.id" tag="li" role="presentation" v-for="item in navUl" :key="item.id">
                    <a>{{item.name}}</a>
                </router-link>
                <li><router-link to="/CouponInfo" tag="a">剁手优惠券</router-link></li>
            </ul>
            <div class="login clearfix">
               <i class="iconfont">&#xe601;</i>
               <div class="showData">
                   <div class="show">
                     <i></i>
                     <span>登录后，享受更多优质服务哦</span>
                     <button @click="login">登录</button>
                   </div>
                 </div>
            </div>
         </div>
    </nav>
    <com-login v-show="showLogin"></com-login>
</div>
</template>

<script>
import ComLogin from "./ComLogin"

export default {
    name:"comHearder",
    data(){
        return{
            showLogin:false,
             navUl:[],
             searchVal:'', //默认输入为空
             goodsList:[],//获取到所有数据
     }
    },
    linkActiveClass:"active",
    components:{
        ComLogin
    },
    created(){
        this.getTypeList()
        //限制发送请求操作频率
        //  this.debouncedGetAnswer = _.debounce(this.getSearchinfo, 500)
    },
    methods:{
        login(){
            this.showLogin = true;
        },
        getTypeList(){
            this.$axios.get('https://www.115z.com/app/index?app_key=aa5df25a43369803d9ef26851fb7d717')
                .then(res=>{
                    this.navUl = res.data.data.nav;
                })
                .catch(error=>{
                  this.$message.error('数据请求失败~请联系站长');
                })
        },
        getSearchinfo(){
            let url ="https://www.115z.com/u_api/Update_column.html?&app_key=aa5df25a43369803d9ef26851fb7d717"
            if(!this.name){
                return
            }
            this.$axios.get(url)
            .then(res => {
                if(res.data.code === 1){
                    console.log(res.data.data.list)
                    this.goodsList = res.data.data.list 
                }
                
            })
        }
    },
    computed:{
        list:function(){
            //逻辑-->根据input的value值筛选goodsList中的数据
            let arrByZM = [];//声明一个空数组来存放数据
            for(let i = 0; i < this.goodsList.length; i++){
                 //for循环数据中的每一项（根据name值）
              if(this.goodsList[i].title.search(this.searchVal) != -1){
                //判断输入框中的值是否可以匹配到数据，如果匹配成功
                arrByZM.push(this.goodsList[i]);
                //向空数组中添加数据
              }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.comHearder{
    width: 100%;
    background-color: #000;
    height: 108px;
    .container{
        .header{
            height: 108px;
            >.logo{
             display: block;
             width: 190px;
             float: left;
             padding-top: 16px;
             cursor: pointer;
             
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
                     background-color: #fff;
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
                     background-color: #fff;
                 }
             }
        }
    }
      nav{
            width: 100%;
            height: 55px;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            box-shadow: 0 0 4px #dedede;
            ul{
                float: left;
                width: 1130px;
            }
            .nav-pills>li{
                width: 11%;
                height: 55px;
                text-align: center;
                >a{
                    width: 100%;
                    height: 100%;
                    font-size: 18px;
                    color:#333;
                    transition: all .4s;
                    &:hover,&:focus{
                         color: #ffd633;
                        background-color: #fff;
                        border-bottom: 3px solid #ffd633;
                    }
                }
                &.active>a{
                    color: #ffd633;
                    background-color: #fff;
                    border-bottom: 3px solid #ffd633;
                }
            }
            .login{
                width: 40px;
                float: right;
                height: 100px;
                position: relative;
                text-align: center;
                margin-top: 5px;
                 cursor: pointer;
                 &:hover{
                          >.showData{
                              display: block;
                          }
                     }
                >i{
                   font-size: 30px;
                   color:#ccc;
                   
                }
                 > .showData {
                    right: -2px;
                    top: 41px;
                    z-index: 100;
                    padding-top: 14px;
                    position: absolute;
                       display: none;

                    > .show {
                      width: 245px;
                      background: #FFF;
                      border-radius: 7px;
                      padding: 20px 25px;
                      box-shadow: 0px 3px 14px #a9a9a9;

                      > i {
                        top: 0;
                        width: 0;
                        height: 0;
                        z-index: 1;
                        right: 27px;
                        position: absolute;
                        border-left: 7px solid transparent;
                        border-right: 7px solid transparent;
                        border-bottom: 14px solid white;
                      }

                      > span {
                        height: 30px;
                        color: #333;
                        display: block;
                        font-size: 15px;
                        line-height: 30px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                      }

                      > button {
                        border: 0;
                        width: 100%;
                        height: 34px;
                        color: #FFF;
                        display: block;
                        font-size: 14px;
                        cursor: pointer;
                        margin: 0px auto;
                        margin-top: 15px;
                        line-height: 34px;
                        border-radius: 3px;
                        background: linear-gradient(to right, #ff850b 0, #ff5945 100%);
                      }
                       }}
            }
        }
}
</style>

