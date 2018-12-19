<template>
    <div class="contribute">
        <!-- 发帖排行 -->
        <div class="container hotTop">
            <i></i>
            <div class="left">
                <a  @mouseenter.native="show" ref="a">近期投稿</a>
                <a @mouseenter.native="hide" ref="b">本月冠军</a>
            </div>
            <div class="right" >
                <div class="rightOverflow clearfix">
                    <div class="rightMain" :class="{rightOverflow1 : rightOverflow1, rightOverflowHover: rightOverflowHover}">
                        <ul>
                            <router-link tag="li" to="/person" v-for="(item,index) in rotationData" :key="index">
                               <a href="#">
                                    <div class="img">
                                       <img :src="item.url" alt="">
                                   </div>
                                <h3>{{item.name}}</h3>
                               </a>
                            </router-link>
                        </ul>
                    </div>
                     <div class="rightMain">
                        <ul>
                            <li v-for="(item,index) in rotationData" :key="index">
                               <a href="#">
                                    <div class="img">
                                       <img :src="item.url" alt="">
                                   </div>
                                <h3>蓝天</h3>
                               </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // hover:true,
            rightOverflow1: false,
            rightOverflowHover: false,
            rotationData: [{
                id:"001",
                name:'酷酷的旧爱',
                url:'http://localhost:8081/static/img/default_head.png'
            },{
                id:"002",
                name:'bilibili',
                url:'http://localhost:8081/static/img/default_head.png'
            }],
        }
    },
    methods:{
        hide(){
            this.hover=true
            this.$refs.b.className = "hove"
            this.$refs.a.className = ""
            // this.rightOverflowHover=true;
        },
        show(){
             this.hover=false
            this.$refs.b.className = ""
            this.$refs.a.className = "hove"
            //  this.rightOverflow1=true;
        }
    }
}
</script>

<style lang="less" scoped>
.hotTop{
    margin-top: 10px;
    height: 147px;
    background-color: #fff;
    position: relative;
      padding: 22px 20px;
    >i{
        display: block;
        width: 60px;
        height: 60px;
        background-image: url(../../../assets/images/tg-ph.png);
        background-size: contain;
        position: absolute;
        z-index: 99;
        top: 0;
        right: 0;
    }
    >.left{
        width: 121px;
        height: 103px;
        float: left;
        position: relative;
        >a{
             width: 121px;
             height: 45px;
             display: block;
             font-size: 15px;
             cursor: pointer;
             color: #989898;
             line-height: 45px;
             text-align: center;
             border-radius: 2px;
             margin-bottom: 13px;
             background: #f6f6f6;
             &.hover{
                 color: #FFF;
                 position: relative;
                 background: #5298ff;
               &::after{
               content: "";
                width: 0;
                height: 0;
                z-index: 1;
                top: 15.5px;
                right: -10px;
                position: absolute;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-left: 10px solid #5298ff;
               }
              }
            }
        }
    >.right{
        float: left;
        width: 1013px;
        height: 115px;
        margin-left: 26px;
        overflow: hidden;
        >.rightOverflow{
            height: 250px;
            width: 100%;
            >.rightMain{
                width: 100%;
                height: 110px;
                margin-bottom: 20px;
                >ul{
                    height: 100%;
                    li{
                        float: left;
                        width: 78px;
                        height: 110px;
                        margin-right: 10px;
                        >a{
                            display: inline-block;
                            width: 78px;
                            height: 100%;
                            .img{
                                    width: 78px;
                                    height: 78px;
                                img{
                                     width: 78px;
                                    height: 100%;
                               }
                            }
                            >h3{
                                height: 25px;
                                margin-top: 7px;
                                font-size: 14px;
                                text-align: center;
                                 overflow: hidden;
                            }
                        }
                    }
                }
            }
        }
    }
    .rightOverflow1 {
        transition: 0.4s all;
        transform: translateY(0);
    }
    > .rightOverflowHover {
        transform: translateY(-140px);
    }
}
</style>

