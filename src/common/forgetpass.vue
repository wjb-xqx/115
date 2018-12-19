<template>
    <div class="container clearfix">
        <h3>115资源网 - 找回登录密码</h3>
        <div class="sep"></div>
        <form action="" class="formData">
            <input type="text" placeholder="手机号码或邮箱号码" class="number">
            <div class="yz">
                <input type="text" placeholder="右侧验证码">
                <div class="img"></div>
            </div>
            <button>下一步</button>
        </form>
    </div>
</template>

<script>
export default {
    name:"forgetpass"
}
</script>

<style lang="less" scoped>
.container{
    >h3{
            line-height: 40px;
            margin: 0px auto;
            height: 41px;
            margin-top: 109px;
            overflow: hidden;
            text-align: center;
            font-size: 26px;
            color: #333;
    }
    >.sep{
        width: 840px;
        margin: 0px auto;
        height: 60px;
        background: url(../assets/images/step1.png);
        background-size: 100% auto;
        margin-top: 108px;
        margin-bottom: 60px;
        overflow: hidden;
        
    }
    >.formData{
        width: 375px;
        height: 188px;
        margin: 0px auto;
        >.number{
            height: 43px;
            margin-top: 10px;
            width: 100%;
            border: 1px solid #ccc;
            padding-left: 10px;
        }
        >.yz{
             height: 43px;
             width: 100%;
             margin-top: 10px;
             >input{
                  width: 60%;
                 height: 43px;
                 border: 1px solid #ccc;
                 padding-left: 10px;
                 float: left;
             }
             >.img{
                 width: 35%;
                 float: right;
                 height: 43px;
                 border: 1px solid #ccc;
             }
        }
        >button{
                display: block;
                width: 100%;
                height: 40px;
                line-height: 40px;
                margin-top: 22px;
                background: #5298ff;
                text-align: center;
                color: #FFF;
                font-size: 14px;
                border-radius: 4px;
                outline: none;
                border:none;
        }
    }
}
</style>

