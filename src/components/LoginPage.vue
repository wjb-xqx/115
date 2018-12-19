<template>
    <div class="login clearfix">
        <div class="container">
            <div class="box">
                <a href="/" class="logo"><img src="@/assets/images/logo.png" alt=""></a>
                 <form action="" class="loginmain">
                    <div class="input">
                        <input type="text" placeholder="请输入您的手机或邮箱账号" name="username">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="请输入您的密码" name="password">
                    </div>
                    <div class="loo">
                        <div class="ks"><a href="#">注册账号</a></div>
                        <div class="zc"><a href="#">找回密码</a></div>
                    </div>
                    <button>立即登录</button>
              </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.login{
    background-color: #ccc;
    >.container{
        height: 1000px;
        .box{
            width: 540px;
            height: 495px;
            background-color: #fff;
            margin: 0 auto;
            margin-top: 60px;
            padding: 80px 60px;
            >.logo{
                width: 151px;
                height: 46px;
                display: block;
                margin: 0 auto;
            }
            >.loginmain{
                width: 420px;
                height: 254px;
                margin: 25px auto;
                >.input{
                    height: 48px;
                    margin-top: 30px;
                    >input{
                        height: 48px;
                        width: 100%;
                        background: #F9F9F9;
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
           
        }
    }
}
</style>
