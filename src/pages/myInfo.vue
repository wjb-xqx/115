<template>
    <div>
        <!-- 我的信息 -->
        <div class="info" v-if="flag">
           <div class="myinfo">
               <a href="javascript:;" @click.stop="uploadHeadImg">
                   <img :src="Url" alt="">
               </a>
               <input type="file" value="file" @change="handleFile" class="hiddenInput">
               <div class="info-info">
                   <h3>
                       <i></i>用户8127
                       <span>6f4ecca9-d5f1-4b99-8f5d-8c16e3740627</span>
                       <b>普通用户</b>
                   </h3>
                   <p class="intr">初来乍到，请多指教</p>
               </div>
           </div>
           <div class="title"> 概括数据 </div>
           <div class="gaikuo">
               <b>0</b>
               <b>0</b>
               <b>0</b>
               <b>0</b>
               <b class="bx">投稿</b>
               <b class="bx">通过</b>
               <b class="bx">评论</b>
               <b class="bx">获赞</b>
           </div>
           <div class="title">  我的信息  </div>
           <ul class="my-info">
               <li>
                   <h3>我的昵称</h3>
                   <span>用户8127</span>
               </li>
               <li>
                   <h3>介绍</h3>
                   <span>用户8127</span>
               </li>
               <li>
                   <h3>当前级别</h3>
                   <span>用户8127</span>
               </li>
               <li>
                   <h3>性别</h3>
                   <span>用户8127</span>
               </li>
               <li>
                   <h3>我的QQ</h3>
                   <span>用户8127</span>
               </li>
               <li>
                   <h3>邮箱号码</h3>
                   <span>用户8127</span>
               </li>
               <li>
                   <h3>手机号码</h3>
                   <span>用户8127</span>
               </li>
               <li>
                   <h3>注册时间</h3>
                   <span>用户8127</span>
               </li>
               <li>
                   <h3>我的ID</h3>
                   <span>用户8127</span>
               </li>
           </ul>
           <a class="goChange" @click="changeInfo">修改资料</a>
        </div>
        <!-- 修改我的信息 -->
        <div class="xg" v-if="!flag">
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
    data(){
        return{
            flag:true,
            Url:require('../assets/images/person.jpeg')
        }
    },
    methods:{
        // 打开图片上传
        uploadHeadImg: function () {
            this.$el.querySelector('.hiddenInput').click()
        },
        // 将头像显示
         handleFile: function (e) {
           let $target = e.target || e.srcElement
           let file = $target.files[0]
           var reader = new FileReader()
           reader.onload = (data) => {
             let res = data.target || data.srcElement
             this.Url = res.result
           }
           reader.readAsDataURL(file)
         },
         changeInfo(){
             this.flag = false;
         }
    }
}
</script>

<style lang="less" scoped>
//   我的信息
   .info{
       width: 100%;
       height: 100%;
       >.myinfo{
           height: 100px;
          margin-bottom: 50px;
          position: relative;
         >a{
             display: inline-block;
             width: 100px;
             height: 100px;
             float: left;
             position: relative;
             &:hover{
                 display: block;
                &::before{
                content: "更换头像";
                width: 70px;
                height: 22px;
                position: absolute;
                z-index: 55;
                 color: white;
                 text-align: center;
                 border: 2px solid white;
                 background-color: #ccc;
                 border-radius: 3px;
                font-size: 13px;
                 top: 50%;
                 left: 50%;
                 transform: translate(-50%, -50%);
                 }
             }
             >img{
                 width: 100%;
                 height: 100%;
                 position: relative;
                 
                 &:hover{
                     opacity: .8;
                 }
             }
         }
         >input{
                position: absolute;
                top: 45%;
                left: 18%;
                transform: translate(-50%, -50%);
                opacity: 0;
             }
         >.info-info{
             width: 750px;
             height: 78px;
             float: right;
             >h3{
                font-size: 22px;
                font-weight: 400;
                height: 35px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color:#333;
                >b{
                    font-weight: normal;
                    font-size: 15px;
                    border: 1px solid #ffaf1e;
                    height: 26px;
                    display: inline-block;
                    line-height: 26px;
                    vertical-align: middle;
                    padding: 0px 10px;
                    color: #ffaf1e;
                    margin-left: 13px;
                    margin-top: -1px;
                    border-radius: 15px;
                    cursor: default;

                }
             }
             >.intr{
                    font-size: 16px;
                    color: #616161;
                    line-height: 26px;
                    padding: 5px 0px;
                    margin-top: 7px;
             }
         }
       }
       >.title{
             position: relative;
            height: 45px;
            line-height: 35px;
            text-indent: 21px;
            font-size: 17px;
            color:#333;
            position: relative;
            &::before{
                content: "";
                width: 3px;
                height: 20px;
                background-color: blue;
                position: absolute;
                left: 3px;
                top: 8px;
            }
       }
       >.gaikuo{
           height: 136px;
           margin-top: 8px;
            border-bottom: 1px solid #ececec;
            margin-bottom: 40px;
            >b{
                 width: 20%;
                float: left;
                font-size: 37px;
                font-weight: normal;
                height: 50px;
                line-height: 50px;
                font-family: arial;
                color: #4c4c4c;
                margin-right: 5%;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            >.bx{
                font-weight: normal;
                font-size: 15px;
                height: 40px;
                margin-top: 5px;
                line-height: 40px;
                color: #737373;
            }
       }
        >.my-info{
            padding-left: 21px;
            margin-top: 15px;
            color:#333;
            >li{
                line-height: 45px;
                 height: 45px;
                 overflow: hidden;
                 margin-bottom: 10px;
                 >h3{
                    float: left;
                    max-width: 45%;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    font-size: 16px;
                 }
                 >span{
                        float: right;
                        max-width: 45%;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        text-align: right;
                        font-size: 16px;
                 }
            }
        }
        >.goChange{
                display: block;
                margin-left: 21px;
                height: 47px;
                line-height: 47px;
                background: #5298ff;
                color: #FFF;
                border-radius: 5px;
                width: 240px;
                text-align: center;
                margin-top: 20px;
                font-size: 15px;
                transition: 0.2s all;
        }

   }
</style>

