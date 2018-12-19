<template>
    <div class="com-footer clearfix">
        <div class="container">
            <div class="left">
                <img src="@/assets/images/logo.png" alt=""> 
                <p>
                115资源网提供最新游戏辅助,电影抢先看,QQ软件等。努力打造为全国网络爱好者提供优质服务的平台，让我们的生活更加精彩！
                联系小编萤火虫Qq：1839577559
               </p>
                <ul>
                    <li><a href="#">关于我们</a></li>
                    <li><a href="#">广告合作</a></li>
                    <li><a href="#">在线投稿</a></li>
                    <li><a href="#">站长统计</a></li>
                    <li><a href="#">/</a></li>
                    <li><a href="#">苏ICP备12011667号-1</a></li>
                    
                </ul>
            </div>
            <div class="right">
                <img src="@/assets/images/web-code.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ComFooter"
}
</script>

<style lang="less" scoped>
.com-footer{
    width: 100%;
    color: #a4a4a4;
    background-color: #000;
    >.container{
        .left{
            float: left;
            width: 60%;
            >img{
                display: block;
                margin-bottom: 15px;
            }
            >p{ 
                line-height: 26px;
            }
            >ul{
                width: 100%;
                margin: 15px 0;
                padding: 20px 0;
                border-top: 1px solid #a4a4a4;
                >li{
                    float: left;
                    margin-right: 21px;
                }
            }
        }
        .right{
            margin-top: 48px;
            float: right;
             height: 100px;
            >img{
                width: 100px;
                background: #FFF;
                height: 100px;
                border-radius: 2px;
                overflow: hidden;
            }
        }
    }
}
</style>
