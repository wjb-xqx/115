<template>
    <div class="updata container clearfix">
        <div class="title">板块更新
            <div class="type">
                <a class="hover">辅助 / 源码 / 实用</a>
                <a >软件 / 活动 / 其它</a>
            </div>
        </div>
        <div class="container ">
            <ul>
                <li>
                    <a href="#">
                        <div class="img">
                            <img src="@/assets/images/updata1.jpeg" alt="">
                            <span>万能影视破解版 免费看最新电影电视</span>
                        </div>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>ML刺激战变态脚本</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>ML刺激战场12.16新版本稳定多功能变态脚本</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">
                        <div class="img">
                            <img src="@/assets/images/updata1.jpeg" alt="">
                            <span>万能影视破解版 免费看最新电影电视</span>
                        </div>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>ML刺激战变态脚本</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>ML刺激战场12.16新版本稳定多功能变态脚本</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">
                        <div class="img">
                            <img src="@/assets/images/updata1.jpeg" alt="">
                            <span>万能影视破解版 免费看最新电影电视</span>
                        </div>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>ML刺激战变态脚本</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>ML刺激战场12.16新版本稳定多功能变态脚本</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>[ 游戏辅助 ]</span>
                        <span>XH12.16最新版变态刺激</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"PositionUpdate"
}
</script>

<style lang="less" scoped>
.updata{
        margin-top: 13px;
        background: #FFF;
        padding: 18px 25px;
        position: relative;
        >.title{
            height: 45px;
            line-height: 35px;
            text-indent: 21px;
            font-size: 17px;
            border-bottom: 1px solid #F6F6F6;
            padding-left: 10px;
            &::before{
                content: "";
                width: 2px;
                height: 20px;
                background-color: blue;
                position: absolute;
                top: 25px;
                left: 12px;
            }
            >.type{
                float: right;
                padding-left: 10px;
                >a{
                    margin-left: 13px;
                    font-size: 15px;
                    height: 30px;
                    line-height: 30px;
                    padding-right: 8px;
                    padding: 0 10px;
                    cursor: pointer;
                    &.hover{
                        background: #eaf2ff;
                        color: #5a9dff;
                        border-radius: 6px;
                    }
                }
            }
        }
        >.container{
            height: 544px;
            >ul{
                padding: 0 0 0 25px ;
                width: 31.33%;
                height: 100%;
                float: left;
                margin-right: 3%;
                &:nth-child(3){
                    margin-right: 0;
                }
                >li:nth-child(n+2){
                    margin-bottom: 16px;
                     width: 100%;
                     >a{
                        display: block;
                        line-height: 40px;
                        height: 40px;
                        font-size: 15px;
                        overflow: hidden;
                        >span:nth-child(1){
                            display: block;
                            color: #ababab;
                            margin-right: 7px;
                            float: left;
                            width: 80px;
                        }
                        >span:nth-child(2){
                            display: block;
                            float: left;
                            color:#000;
                            width: calc(100% - 7px - 80px );
                            text-overflow: ellipsis;
                             white-space: nowrap;
                             overflow: hidden;
                            line-height: 40px;
                            height: 40px;
                        }
                     }
                }
                >li:nth-child(1){
                    margin-bottom: 24px;
                    width: 100%;
                    height: 200px;
                    >a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        >.img{
                            width: 100%;
                            height: 100%;
                            position: relative;
                            >img{
                                width: 100%;
                               height: 100%;
                            }
                            >span{
                                display: inline-block;
                                width: 100%;
                                height: 40px;
                                background: rgba(0,0,0,.6);
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                text-align: center;
                                line-height: 40px;
                                color: #FFF;
                            }
                        }
                    }
                }
            }
        }
}
</style>
