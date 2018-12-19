<template>
    <div class="frined">
        <div class="container">
            <div class="text">
                友情链接：
                <span>（为了做收录和排名,近期调整 所有换链网站必须满足流量大于1万或爱站权重>=2,望各位站长谅解）</span>
            </div>
            <ul>
                <li>
                    <a href="#">小刀娱乐网</a>
                </li>
                <li>
                    <a href="#">小刀娱乐网</a>
                </li>
                <li>
                    <a href="#">小刀娱乐网</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"FriendshipLink"
}
</script>

<style lang="less" scoped>
.frined{
    background-color: #000;
    height: 129px;
    margin-top: 10px;
    >.container{
        padding: 20px 0;
        color: #a4a4a4;
        >.text{
            height: 30px;
            font-size: 15px;
            margin-bottom: 11px;
            >span{
                float: right;
                font-size: 13px;
                color: #676767;
            }
        }
        >ul{
            height: 48px;
            background-color: #424242;
             padding: 0 20px;
            >li{
                float: left;
                margin-right: 20px;
                >a{
                    display: inline-block;
                    line-height: 48px;
                }
            }
        }
    }
}
</style>

