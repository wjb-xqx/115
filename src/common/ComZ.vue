<template>
    <div class="login">
        <div class="left">
            <img src="@/assets/images/a8e.png" alt="">
            <span>Welcome</span>
        </div>
        <div class="right">
            <div class="del" @click="delLogin"><i class="el-icon-close"></i></div>
            <h3>注册您的账号</h3>
            <form action="" class="loginmain">
                <div class="input">
                    <i class="iconfont">&#xe720;</i>
                    <input type="text" placeholder="请输入您的手机或邮箱账号" name="username">
                </div>
                <div class="input">
                    <i class="el-icon-goods icon2"></i>
                    <input type="password" placeholder="请输入您的密码" name="password">
                </div>
                <div class="input">
                    <input type="text" placeholder="验证码">
                </div>
                <div class="loo">
                    <div class="ks"><a href="#">我已经有账户了？</a></div>
                </div>
                <button>立即登录</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"ComLogin",
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    width: 678px;
    height: 390px;
    z-index: 999;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    >.left{
        width: 246px;
        height: 100%;
        float: left;
         padding: 120px 60px 0;
         background-image: linear-gradient(132deg, #a2c7ff, #3378dc); 
         >img{
             width: 122px;
             height: 112px;
         }
         >span{
             color:#fff;
             font-size: 25px;
         }
    }
    >.right{
        width: 432px;
        float: right;
        height: 100%;
        position: relative;
        background-color: #fff;
        >h3{
            line-height: 24px;
            height: 24px;
            width: 80%;
            margin: 0px auto;
            margin-top: 26px;
            font-size: 17px;
            color: #333;
        }
        >.loginmain{
            position: absolute;
            transform: translate(-50%, -50%);
            top: 54%;
            left: 50%;
            width: 80%;
            >.input{
                width: 100%;
                height: 50px;
                font-size: 15px;
                 padding: 10px 15px;
                 border-bottom: 1px solid #eaeaea;
                 >input{
                     width: 100%;
                     height: 100%;
                     border: none;
                     padding-left: 10px;
                 }
                 >i{
                    position: absolute;
                    left: 0;
                    height: 50px;
                    line-height: 48px;
                    top: 0;
                    width: 20px;
                    font-size: 21px;
                    text-align: center;
                    
                 }
                 >.icon2{
                    top: 50px; 
                 }
            }
            >.loo{
              height: 50px;
              >div{
                  float: right;
                  height: 50px;
                  line-height: 50px;
                  >a{
                    margin-left: 10px;
                    font-size: 15px;
                    color: #8e8e8e;
                    &:hover{
                        color:blue;
                    }
                  }
              }
            }
            >button{
                  width: 100%;
                  height: 40px;
                  line-height: 40px;
                  background: #5298ff;
                  margin-top: 10px;
                  color:#fff;
                  border-radius: 4px;
                  text-align: center;
                  border: 0;
                  font-size: 15px;
                  margin-top: 12px;
                  cursor: pointer;
              }
        }
        >.del{
            font-size: 21px;
            position: absolute;
            right: 24px;
            top: 24px;
            color: #b3b3b3;
            cursor: pointer;
            z-index: 1;
            >i{
                font-size: 25px;
                &:hover{
                    color:blue;
                }
            }
        }   
    }  
}
</style>

