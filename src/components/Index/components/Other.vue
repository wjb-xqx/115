<template>
    <div class="other container">
        <div class="left">
            <h3>实时投稿</h3>
            <ul>
                <li>
                    <a href="#">
                        <img src="@/assets/images/default_head.png" alt="">
                    </a>
                    <div class="text">
                        <a href="#">用户02655</a>
                       <span>
                           <b>等待审核</b>在2018-12-16 在2018-12-16 18:55:14投稿了：印度合伙人超清中字资源
                        </span> 
                     </div>
                </li>
                <li>
                    <a href="#">
                        <img src="@/assets/images/default_head.png" alt="">
                    </a>
                    <div class="text">
                        <a href="#">用户02655</a>
                       <span>
                           <b>等待审核</b>在2018-12-16 在2018-12-16 18:55:14投稿了：印度合伙人超清中字资源
                        </span> 
                     </div>
                </li>
                <li>
                    <a href="#">
                        <img src="@/assets/images/default_head.png" alt="">
                    </a>
                    <div class="text">
                        <a href="#">用户02655</a>
                       <span>
                           <b>等待审核</b>在2018-12-16 在2018-12-16 18:55:14投稿了：印度合伙人超清中字资源
                        </span> 
                     </div>
                </li>
            </ul>
        </div>
        <div class="right">
            <h3>用户兴趣谱图</h3>
            <div class="classification">
                <a href="#">其他资源</a>
                <a href="#">网络软件</a>
                <a href="#">游戏辅助</a>
                <a href="#">活动线报</a>
                <a href="#">使用教程</a>
                <a href="#">网站源码</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Other"
}
</script>

<style lang="less" scoped>
.other{
    height: 410px;
    margin-top: 10px;
    background-color: #fff;
   
    >.left{
        width: 690px;
        height: 100%;
        float: left;
        padding: 18px 25px;
        >h3{
            position: relative;
            height: 45px;
            line-height: 35px;
            text-indent: 21px;
            font-size: 17px;
            border-bottom: 1px solid #F6F6F6;
            &::before{
                content: '';
                width: 3px;
                height: 20px;
                background-color: blue;
                position: absolute;
                top: 7px;
                left: 5px;
            }
        }
        >ul{
            margin-top: 63px;
            >li{
                float: left;
                width: 50%;
                height: 80px;
                margin-bottom: 65px;
                >a {
                    display: inline-block;
                    width: 80px;
                    height: 80px;
                    float: left;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
                }
                >.text{
                    float: left;
                    margin-left: 20px;
                    width: 220px;
                    height: 70px;
                    overflow: hidden;
                    >a{
                        display: block;
                        height: 21px;
                        line-height: 21px;
                        overflow: hidden;
                        color:#ccc;
                    }
                    >span{
                        margin-top: 5px;
                        display: block;
                        line-height: 23px;
                        height: 46px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        font-size: 14px;
                        color: #a7a7a7;
                    }
                }
            }
        }
    }
    >.right{
        padding: 18px 25px;
        width: 403px;
        height: 100%;
        float: right;
        >h3{
            position: relative;
             height: 45px;
             line-height: 35px;
             text-indent: 21px;
             font-size: 17px;
             border-bottom: 1px solid #F6F6F6;
              &::before{
                content: '';
                width: 3px;
                height: 20px;
                background-color: blue;
                position: absolute;
                top: 9px;
                left: 5px;
            }
        }
        >.classification{
            height: 300px;
            position: relative;
            background: url(../../../assets/images/bj.jpg) no-repeat 50%;
            >a{
                display: block;
                border-radius: 50%;
                 position: absolute;
                 
                text-align: center;
                color:#fff;
                font-size: 14px;
                &:nth-child(1),
                 &:nth-child(4),
                  &:nth-child(5),
                   &:nth-child(6){
                    width: 85.8px;
                    height: 85.8px;
                    background-color: #f45f93;
                    left: 35px;
                    top: 14px;
                    line-height: 85.8px;
                }
                &:nth-child(2){
                    width: 93.6px;
                    height: 93.6px;
                    background-color: #41d39d;
                    right: 26px;
                    top: 8px;
                    line-height: 93.6px;
                }
                 &:nth-child(3){
                    width: 117px;
                    height: 117px;
                    background-color: #ff5d5d;
                    width: 120px;
                    top: 79px;
                    left: 100px;
                    line-height: 117px;
                }
                &:nth-child(4){
                    left: 13px;
                    top: 206px;
                    background-color: #fea342;
                }
                &:nth-child(5){
                    left: 152px;
                     top: 225px;
                    background: #4197e2;
                }
                &:nth-child(6){
                   left: 250px;
                     top: 200px;
                    background: #8c8c8c;
                }
                &:hover{
                    opacity: .8;
                }
            }
        }
    }
}
</style>

