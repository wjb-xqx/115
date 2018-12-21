<template>
     <!-- 有发表内容 -->
    <div class="tg">
        <div class="title">数据概述</div>
        <ul class="data">
            <li><b>1</b>
                <span>累计投稿</span>
            </li>
            <li><b>1</b>
                <span>通过次数</span>
            </li>
            <li><b>1</b>
                <span>失败次数</span>
            </li>
        </ul>
        <div class="title">投稿记录</div>
        <ul class="content">
            <li>
                <div class="img"></div>
                <div class="right">
                    <h3>
                        <span>待审核</span>
                        <span>文章</span>
                        <a href="#">标题</a>
                    </h3>
                    <div class="listContent">
                            刷吧刷吧刷吧刷吧刷吧 
                    </div>
                    <div class="time">
                        投稿时间：2018-12-19 20:13:34
                    </div>
                    <a href="#">查看详情</a>
                </div>
            </li>
        </ul>
        <p>没有更多了</p>
    </div>
                    <!-- 无内容 -->
</template>

<script>
export default {

}
</script>

<style lang="less">
.tg{
    >.title{
        line-height: 38px;
        font-size: 25px;
        margin-bottom: 25px;
    }
    >.data{
        height: 90px;
        margin-top: 15px;
        >li{
            float: left;
            width: 28%;
            margin-right: 3.5%;
            text-align: center;
        }
    }
    >.content{
        >li{
            height: 130px;
            margin-bottom: 15px;
            >.img{
                width: 200px;
                height: 130px;
                background-color: pink;
                float: left;
            }
            >.right{
                float: left;
                padding-left: 15px;
            }
        }
    }

}

</style>

