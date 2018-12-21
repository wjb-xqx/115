<template>
    <div>
        <!-- 修改我的信息 -->
        <div class="xg">
            <div class="title">
                修改资料
            </div>
            <form action="">
             <div class="layui-form-item">
                 <label for="" class="layui-form-label">我的昵称</label>
                 <div class="layui-input-block">
                     <input type="text" class="layui-input" placeholder="昵称" value="用户8127">
                 </div>
             </div>
             <div class="layui-form-item1">
                 <label for="" class="layui-form-label">我的昵称</label>
                 <div class="layui-input-block">
                     <textarea name="" id="" cols="30" rows="10" placeholder="签名">
                         初来乍到，请多指教
                     </textarea>
                 </div>
             </div>
             <div class="layui-form-item2">
                 <label for="" class="layui-form-label">性别</label>
                 <div class="layui-input-block">
                    <input type="radio" name="gender" value="0" title="男" checked>男
                    <input type="radio" name="gender" value="1" title="女">女
                 </div>
             </div>
             <div class="layui-form-item3">
                 <label for="" class="layui-form-label">我的QQ</label>
                 <input type="text" placeholder="QQ">
                 <div class="ts">投稿后用户联系您的方式，个人主页也会显示</div>
             </div>
             <div class="layui-form-item4">
                 <div class="layui-form-item">
                     <label for="" class="layui-form-label">我的QQ</label>
                     <input type="text" placeholder="网站名称">
                 </div>
                 <div class="layui-form-item">
                     <label for="" class="layui-form-label">我的QQ</label>
                     <input type="text" placeholder="网站名称" value="http://www.115z.com">
                 </div>
             </div>
             <button class="layui-btn">保存信息</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// 修改信息
.xg{
    .title{
    position: relative;
    height: 45px;
    line-height: 35px;
    text-indent: 21px;
    font-size: 17px;
    }
    form{
        width: 650px;
        >.layui-form-item{
        margin-bottom: 30px;
        height: 38px;
        >.layui-form-label{
            width: 90px;
            padding: 9px 0;
            color: #929292;
            text-align: left;
            float: left;
        }
        >.layui-input-block{
                float: right;
                width: 550px;
                height: 38px;
                display: inline-block;
                >input{
                    width: 100%;
                    height: 100%;
                }
        }
        >.layui-form-item2{
           
        }
      }
    }
}
</style>
